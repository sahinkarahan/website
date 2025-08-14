"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "iOS Developer & Swift Enthusiast";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center particle-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float delay-200"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float delay-300"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-2xl animate-float delay-500"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with glow effect */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground shadow-2xl animate-glow hover-scale animate-fade-in">
            AC
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight animate-fade-in-up" data-macaly="hero-title">
            Alex Chen
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium h-8 animate-fade-in-up delay-200" data-macaly="hero-subtitle">
            {displayedText}
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300" data-macaly="hero-description">
            Crafting beautiful, intuitive iOS applications with Swift and SwiftUI. 
            Passionate about creating seamless user experiences and bringing innovative ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-400">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-glow"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover-lift"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links with staggered animation */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up delay-500">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover-scale animate-glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover-scale animate-glow delay-100"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover-scale animate-glow delay-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          {/* Enhanced scroll indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full hover:bg-primary/10 transition-all duration-300 hover-scale animate-fade-in-up delay-600"
          >
            <ArrowDown className="w-6 h-6 text-primary animate-glow" />
          </button>
        </div>
      </div>
    </section>
  );
}

