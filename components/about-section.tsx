"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Users, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredHighlight, setHoveredHighlight] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First",
      description: "Specialized in iOS development with deep understanding of Apple's design principles and Human Interface Guidelines."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Swift Expert",
      description: "Proficient in Swift, SwiftUI, UIKit, and modern iOS frameworks. Always staying current with the latest Apple technologies."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centered",
      description: "Passionate about creating intuitive user experiences that delight users and solve real-world problems."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Focused on writing clean, efficient code that delivers smooth performance and optimal user experience."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float delay-200"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-macaly="about-title">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 animate-gradient"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-200" data-macaly="about-intro">
                Hi! I'm Alex, a passionate iOS developer with over 5 years of experience creating 
                beautiful and functional mobile applications. My journey in iOS development started 
                with a curiosity about how apps work, and it has evolved into a deep passion for 
                crafting exceptional user experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-300" data-macaly="about-experience">
                I specialize in Swift and SwiftUI, with extensive experience in UIKit, Core Data, 
                networking, and integrating with various APIs. I've worked on projects ranging from 
                simple utility apps to complex enterprise solutions, always focusing on clean code, 
                performance, and user satisfaction.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-400" data-macaly="about-philosophy">
                When I'm not coding, you'll find me exploring the latest iOS features, contributing 
                to open-source projects, or mentoring aspiring developers. I believe in continuous 
                learning and staying at the forefront of mobile technology.
              </p>
            </div>
            
            <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/30 rounded-2xl flex items-center justify-center shadow-2xl hover-lift transition-all duration-500 particle-bg">
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto animate-glow hover-scale">
                    <Code className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <p className="text-lg font-semibold gradient-text">iOS Developer</p>
                  <p className="text-muted-foreground">Swift • SwiftUI • UIKit</p>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-primary/10 rounded-full blur-lg animate-float delay-500"></div>
              <div className="absolute bottom-1/4 -right-6 w-14 h-14 bg-accent/15 rounded-full blur-lg animate-float delay-700"></div>
              
              {/* Floating code symbols */}
              <div className="absolute top-8 left-8 text-primary/30 text-2xl font-mono animate-float delay-200">{'<>'}</div>
              <div className="absolute bottom-8 right-8 text-accent/30 text-2xl font-mono animate-float delay-600">{'{ }'}</div>
            </div>
          </div>
          
          {/* Enhanced Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-lg transition-all duration-500 hover-lift border-border/50 hover:border-primary/50 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                } ${hoveredHighlight === index ? 'scale-105' : ''}`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredHighlight(index)}
                onMouseLeave={() => setHoveredHighlight(null)}
              >
                <CardContent className="p-6 text-center bg-card/50 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 animate-glow">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                  
                  {/* Hover indicator */}
                  <div className={`mt-4 w-8 h-1 bg-primary rounded-full mx-auto transition-all duration-300 ${
                    hoveredHighlight === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

