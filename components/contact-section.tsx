"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with enhanced feedback
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "alex.chen@example.com",
      href: "mailto:alex.chen@example.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "San Francisco, CA",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float delay-400"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-macaly="contact-title">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 animate-gradient"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-macaly="contact-description">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's discuss how we can bring your iOS app ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <Card className={`hover:shadow-lg transition-all duration-500 hover-lift border-border/50 hover:border-primary/30 ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl gradient-text">
                    <MessageCircle className="w-6 h-6 mr-3 text-primary animate-glow" />
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-card/50 backdrop-blur-sm">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">Name *</Label>
                        <div className="relative">
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Your full name"
                            required
                            className={`focus:ring-primary focus:border-primary transition-all duration-300 ${
                              focusedField === 'name' ? 'animate-glow' : ''
                            }`}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="your.email@example.com"
                          required
                          className={`focus:ring-primary focus:border-primary transition-all duration-300 ${
                            focusedField === 'email' ? 'animate-glow' : ''
                          }`}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="What's this about?"
                        required
                        className={`focus:ring-primary focus:border-primary transition-all duration-300 ${
                          focusedField === 'subject' ? 'animate-glow' : ''
                        }`}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell me about your project or idea..."
                        rows={6}
                        required
                        className={`focus:ring-primary focus:border-primary resize-none transition-all duration-300 ${
                          focusedField === 'message' ? 'animate-glow' : ''
                        }`}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold transition-all duration-300 disabled:opacity-50 hover-lift animate-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className={`hover:shadow-lg transition-all duration-500 hover-lift border-border/50 hover:border-primary/30 ${
                isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'
              }`}>
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 bg-card/50 backdrop-blur-sm">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 group hover-lift transition-all duration-300">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300 animate-glow">
                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className={`hover:shadow-lg transition-all duration-500 hover-lift border-border/50 hover:border-primary/30 ${
                isVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'
              }`}>
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="bg-card/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group hover-lift"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300 animate-glow">
                          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                            {social.icon}
                          </div>
                        </div>
                        <div>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                            {social.label}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Follow me on {social.label}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Availability Status */}
              <Card className={`hover:shadow-lg transition-all duration-500 hover-lift border-primary/20 ${
                isVisible ? 'animate-slide-in-right delay-400' : 'opacity-0'
              }`}>
                <CardContent className="p-6 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-foreground font-semibold">Available for Projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new iOS development projects and collaborations. 
                    Let's build something amazing together!
                  </p>
                  
                  {/* Animated progress indicator */}
                  <div className="mt-4 w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-primary rounded-full animate-gradient" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">85% capacity available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

