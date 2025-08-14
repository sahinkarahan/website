"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const projects = [
    {
      title: "TaskFlow Pro",
      description: "A comprehensive task management app with intuitive gestures, dark mode support, and seamless iCloud sync. Built with SwiftUI and Core Data.",
      image: "/api/placeholder/400/300",
      technologies: ["SwiftUI", "Core Data", "CloudKit", "Combine"],
      githubUrl: "https://github.com",
      appStoreUrl: "https://apps.apple.com",
      featured: true
    },
    {
      title: "WeatherLens",
      description: "Beautiful weather app with stunning animations, location-based forecasts, and Apple Watch companion. Features custom UI components and weather data visualization.",
      image: "/api/placeholder/400/300",
      technologies: ["UIKit", "Core Location", "WatchKit", "Charts"],
      githubUrl: "https://github.com",
      appStoreUrl: "https://apps.apple.com",
      featured: true
    },
    {
      title: "FitTracker",
      description: "Fitness tracking app with HealthKit integration, workout analytics, and social features. Includes custom workout builder and progress tracking.",
      image: "/api/placeholder/400/300",
      technologies: ["SwiftUI", "HealthKit", "Core ML", "Firebase"],
      githubUrl: "https://github.com",
      appStoreUrl: "https://apps.apple.com",
      featured: false
    },
    {
      title: "CryptoPortfolio",
      description: "Real-time cryptocurrency portfolio tracker with price alerts, news integration, and detailed analytics. Features custom charts and widgets.",
      image: "/api/placeholder/400/300",
      technologies: ["SwiftUI", "Combine", "WidgetKit", "REST API"],
      githubUrl: "https://github.com",
      appStoreUrl: "https://apps.apple.com",
      featured: false
    },
    {
      title: "RecipeBook",
      description: "Digital cookbook with recipe discovery, meal planning, and shopping list generation. Includes AR view for cooking instructions.",
      image: "/api/placeholder/400/300",
      technologies: ["SwiftUI", "ARKit", "Core Data", "Vision"],
      githubUrl: "https://github.com",
      appStoreUrl: "https://apps.apple.com",
      featured: false
    },
    {
      title: "MindfulMoments",
      description: "Meditation and mindfulness app with guided sessions, progress tracking, and Apple Watch integration for breathing exercises.",
      image: "/api/placeholder/400/300",
      technologies: ["SwiftUI", "AVFoundation", "WatchKit", "HealthKit"],
      githubUrl: "https://github.com",
      appStoreUrl: "https://apps.apple.com",
      featured: false
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-macaly="projects-title">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 animate-gradient"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-macaly="projects-description">
              A showcase of my iOS development work, featuring apps that demonstrate my expertise in Swift, SwiftUI, and modern iOS frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover-lift cursor-pointer border-border/50 hover:border-primary/30 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  {/* Project Image Placeholder with enhanced effects */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center relative overflow-hidden">
                    <Smartphone className={`w-16 h-16 text-primary/60 transition-all duration-500 ${
                      hoveredProject === index ? 'scale-110 rotate-12' : ''
                    }`} />
                    
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-primary rounded-full animate-float"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: '3s'
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Enhanced Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary/95 to-accent/95 flex items-center justify-center transition-all duration-500 ${
                      hoveredProject === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}>
                      <div className="flex space-x-4 transform transition-all duration-300">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover-scale animate-glow"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover-scale animate-glow delay-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.appStoreUrl, '_blank');
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          App Store
                        </Button>
                      </div>
                    </div>
                    
                    {project.featured && (
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground animate-glow">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover-scale"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover-lift animate-glow"
                      onClick={() => window.open(project.appStoreUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View App
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover-lift animate-glow"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

