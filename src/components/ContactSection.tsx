import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email',
      value: 'abhaynautiyal002@gmail.com',
      link: 'mailto:abhaynautiyal002@gmail.com'
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: 'Location',
      value: 'Pokhra, Pauri-Garhwal, Uttarakhand - 246169'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/in/abhay-nautiyal',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/codetechie-abhay',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: 'https://twitter.com/abhay_nautiyal',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://instagram.com/abhay_nautiyal',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and discuss opportunities together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className={`rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${social.color}`}
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Contact Illustration */}
            <div className="hidden lg:block">
              <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Mail size={64} className="text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold">Let's Start a Conversation</p>
                  <p className="text-muted-foreground">I'm always open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name" 
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?" 
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;