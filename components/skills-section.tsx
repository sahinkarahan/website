"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Code, 
  Database, 
  Palette, 
  Zap, 
  Cloud,
  TestTube,
  GitBranch
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with delay
          setTimeout(() => {
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => ({
                    ...prev,
                    [`${categoryIndex}-${skillIndex}`]: skill.level
                  }));
                }, (categoryIndex * 200) + (skillIndex * 100));
              });
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "iOS Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "Swift", level: 95 },
        { name: "SwiftUI", level: 90 },
        { name: "UIKit", level: 85 },
        { name: "Combine", level: 80 }
      ]
    },
    {
      title: "Frameworks & APIs",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Core Data", level: 85 },
        { name: "CloudKit", level: 75 },
        { name: "HealthKit", level: 70 },
        { name: "ARKit", level: 65 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 },
        { name: "SQLite", level: 75 }
      ]
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Human Interface Guidelines", level: 90 },
        { name: "Accessibility", level: 85 }
      ]
    }
  ];

  const tools = [
    "Xcode", "TestFlight", "Instruments", "Git", "GitHub", "Bitrise", 
    "Fastlane", "CocoaPods", "Swift Package Manager", "Postman"
  ];

  const certifications = [
    "iOS App Development with Swift",
    "Apple Developer Program Member",
    "SwiftUI Fundamentals",
    "Core Data Mastery"
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float delay-300"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-macaly="skills-title">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 animate-gradient"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-macaly="skills-description">
              A comprehensive overview of my technical skills, tools, and expertise in iOS development and related technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className={`group hover:shadow-lg transition-all duration-500 hover-lift border-border/50 hover:border-primary/30 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardContent className="p-6 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300 animate-glow">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const skillKey = `${categoryIndex}-${skillIndex}`;
                      const animatedValue = animatedSkills[skillKey] || 0;
                      
                      return (
                        <div key={skillIndex} className="group/skill">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">{skill.name}</span>
                            <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                          </div>
                          <div className="relative">
                            <Progress 
                              value={animatedValue} 
                              className="h-2 bg-muted/50 overflow-hidden"
                            />
                            {/* Animated glow effect on progress bar */}
                            <div 
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent opacity-20 transition-all duration-1000 rounded-full"
                              style={{ width: `${animatedValue}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className={`hover:shadow-lg transition-all duration-500 hover-lift border-border/50 hover:border-primary/30 ${
              isVisible ? 'animate-slide-in-left delay-300' : 'opacity-0'
            }`}>
              <CardContent className="p-8 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 animate-glow">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Tools & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className={`bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover-scale ${
                        isVisible ? 'animate-fade-in' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-lg transition-all duration-500 hover-lift border-border/50 hover:border-primary/30 ${
              isVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'
            }`}>
              <CardContent className="p-8 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 animate-glow">
                    <TestTube className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center group/cert ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/cert:animate-glow transition-all duration-300"></div>
                      <span className="text-foreground group-hover/cert:text-primary transition-colors duration-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, number: "5+", label: "Years of iOS Development" },
              { icon: Smartphone, number: "20+", label: "Apps Published" },
              { icon: GitBranch, number: "50+", label: "Open Source Contributions" }
            ].map((item, index) => (
              <Card 
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-500 hover-lift border-border/50 hover:border-primary/30 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardContent className="p-8 bg-card/50 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow hover-scale">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text mb-2">{item.number}</h3>
                  <p className="text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

