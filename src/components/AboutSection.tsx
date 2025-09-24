import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, MapPin, Mail, GraduationCap } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Vaibhav Patil"
                className="w-80 h-80 object-cover rounded-2xl border-4 border-primary/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold">
                M.Tech CSE
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">I'm 0xA13H4Y</h3>
              <h4 className="text-xl text-muted-foreground mb-6">
                M.Tech CSE Enthusiast | Web Development & ML 🖥️🤖
              </h4>
            </div>

            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4 mb-6">
              "The future belongs to those who believe in the beauty of their dreams." 
              <span className="block text-sm mt-2">- Eleanor Roosevelt 💭✨</span>
            </blockquote>

            <p className="text-foreground leading-relaxed">
              M.Tech CSE Student @ GBPIET 🎓. Passionate about Web Development & Machine Learning 🚀. 
              Always eager to explore new technologies and push the boundaries of what's possible! 💡
            </p>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="text-primary" size={20} />
                    <span><strong>College:</strong> Govind Ballabh Pant Institute of Engineering & Technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" size={20} />
                    <span><strong>Email:</strong> abhaynautiyal002@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-primary" size={20} />
                    <span><strong>Place:</strong> Pokhra, Pauri-Garhwal, Uttarakhand - 246169</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;