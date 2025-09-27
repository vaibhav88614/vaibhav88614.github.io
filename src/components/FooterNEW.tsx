import { Github, Linkedin, Heart } from 'lucide-react';
import { resume } from '@/data/resume';
// lucide-react currently still exports Twitter icon; label it as X
import { Twitter as XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/vaibhav88614' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/vaibhavrp614/' },
    { name: 'X', icon: <XIcon size={20} />, url: 'https://x.com/your-handle' },
  ];

  const lastUpdated = resume.lastUpdated ? new Date(resume.lastUpdated).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : '';

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2 leading-tight">
              <span>0xV41BH4V</span>
              <span className="block text-base tracking-widest text-muted-foreground">0xV41BH4V</span>
            </h3>
            <p className="text-muted-foreground">
              Tech Enthusiast | Web Development & ML
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                asChild
                className="rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end space-x-1">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>by Vaibhav Patil</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">© {new Date().getFullYear()} All rights reserved.</p>
            {lastUpdated && (
              <p className="text-xs text-muted-foreground mt-1">Last Updated: {lastUpdated}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;