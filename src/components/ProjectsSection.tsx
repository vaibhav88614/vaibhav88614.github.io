import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import chatAppProject from '@/assets/chat-app-project.jpg';
import videoChatProject from '@/assets/video-chat-project.jpg';
import blogProject from '@/assets/blog-project.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Chat Application',
      description: 'A real-time chat application built with Socket.io for seamless communication. Let\'s chat! 😄',
      image: chatAppProject,
      liveLink: 'https://chat-app-abhaydev.onrender.com/',
      codeLink: 'https://github.com/codetechie-abhay/chat-application',
      icon: '💬'
    },
    {
      title: 'Video Chat and Screen Share',
      description: 'A video chat website built with Peerjs, including screen sharing features. Share your screen & chat! 🖥️',
      image: videoChatProject,
      liveLink: 'https://65f2a2f0f8145785c84d3f8b--darling-gaufre-679fdd.netlify.app/',
      codeLink: 'https://github.com/codetechie-abhay/video-chat-peerjs',
      icon: '📹'
    },
    {
      title: 'React Blog Website',
      description: 'A React-based project for creating and managing a blog with a responsive design. Share your thoughts! ✍️',
      image: blogProject,
      liveLink: 'https://github.com/codetechie-abhay/react-mini-blog-website',
      codeLink: 'https://github.com/codetechie-abhay/react-mini-blog-website',
      icon: '📝'
    },
  ];

  return (
    <section id="work" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects Made</h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <span>{project.title}</span>
                  <span>{project.icon}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex space-x-3">
                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/codetechie-abhay?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;