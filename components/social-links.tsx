"use client";

import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      description: "View my code and open source contributions",
      color: "hover:bg-gray-900 hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/alexchen",
      description: "Connect with me professionally",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/alexchen_dev",
      description: "Follow my iOS development journey",
      color: "hover:bg-blue-400 hover:text-white"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:alex.chen@example.com",
      description: "Send me a direct message",
      color: "hover:bg-primary hover:text-primary-foreground"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground" data-macaly="social-title">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-macaly="social-description">
            Follow my journey, connect professionally, or just say hello. I'm always excited to meet fellow developers and discuss iOS development.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className="group"
              >
                <div className={`p-6 rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${link.color}`}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <div className="text-primary group-hover:text-current transition-colors duration-300">
                        {link.icon}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-current transition-colors duration-300 mb-2">
                        {link.name}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-current/80 transition-colors duration-300">
                        {link.description}
                      </p>
                    </div>
                    
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-current/60 transition-colors duration-300" />
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}