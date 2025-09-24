import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import chatAppProject from '@/assets/chat-app-project.jpg';
import videoChatProject from '@/assets/video-chat-project.jpg';
import blogProject from '@/assets/blog-project.jpg';

const ProjectsSection = () => {

  const projects = [
    {
      title: 'Real-Time Chat App',
      description: 'A real-time chat application using React, Node.js, Socket.io, and MongoDB.',
      image: chatAppProject,
      liveLink: 'https://chat-app-vaibhavdev.onrender.com/',
      codeLink: 'https://github.com/vaibhav88614/chat-application',
      icon: '�',
    },
    {
      title: 'Video Chat App',
      description: 'Peer-to-peer video chat app using React, PeerJS, and WebRTC.',
      image: videoChatProject,
      liveLink: 'https://video-chat-vaibhavdev.onrender.com/',
      codeLink: 'https://github.com/vaibhav88614/video-chat-peerjs',
      icon: '📹',
    },
    {
      title: 'Mini Blog Website',
      description: 'A minimal blog platform built with React and Node.js.',
      image: blogProject,
      liveLink: 'https://github.com/vaibhav88614/react-mini-blog-website',
      codeLink: 'https://github.com/vaibhav88614/react-mini-blog-website',
      icon: '📝',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
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
            <a href="https://github.com/vaibhav88614?tab=repositories" target="_blank" rel="noopener noreferrer">
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