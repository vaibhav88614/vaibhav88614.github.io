import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import developerIllustration from '@/assets/developer-illustration.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden network-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-foreground/20 rounded-full top-20 left-1/4 animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-foreground/30 rounded-full top-1/3 right-1/4 animate-pulse delay-1000"></div>
        <div className="absolute w-3 h-3 bg-foreground/10 rounded-full bottom-1/4 left-1/3 animate-pulse delay-2000"></div>
        {/* Network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl text-foreground">Hi There,</h2>
              <h1 className="text-4xl lg:text-6xl font-bold">
                I'm <span className="text-primary">0xA13H4Y</span> Nautiyal
              </h1>
              <div className="text-xl text-muted-foreground">
                I Am Into <span className="text-primary">Tech Enthusiast</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full text-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </Button>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <Button variant="outline" size="icon" className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground">
                <Linkedin size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground">
                <Github size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground">
                <Twitter size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground">
                <Instagram size={20} />
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 relative floating">
                <img 
                  src={developerIllustration} 
                  alt="Developer working on computer"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;