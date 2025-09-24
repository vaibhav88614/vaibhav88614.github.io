import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'EY GDS AICTE',
      position: 'SDE Intern | React & Node.js',
      duration: 'March 2024 - April 2024',
      location: 'Remote, India',
      type: 'Internship',
      description: [
        'Completed a 6-week internship in Full Stack Development using React & Node.js.',
        'Developed a job portal with features like job posting, resume submission, and real-time communication.',
        'Check out my internship experience on LinkedIn.'
      ],
      icon: '💼',
      link: 'https://www.linkedin.com/posts/abhay-nautiyal-722b24228_internshipcomplete-fullstackdeveloper-nextgenemployability-activity-7190574520238239745-MIOl'
    },
    {
      company: 'Ensino',
      position: 'ML Intern',
      duration: 'June 2023 - July 2023',
      location: 'Remote, Uttarakhand',
      type: 'Training',
      description: [
        'Completed a 4-week training in Machine Learning with Python.',
        'Gained hands-on experience in ML concepts and Python applications.',
        'View my certificate on ENSINO.'
      ],
      icon: '🧑‍💻',
      link: '#'
    },
    {
      company: 'Internshala',
      position: 'ML Intern',
      duration: 'April 2023 - May 2023',
      location: 'Remote',
      type: 'Internship',
      description: [
        'Completed a remote internship in Machine Learning.',
        'Gained practical skills in ML algorithms and data analysis.',
        'View the internship on Internshala.'
      ],
      icon: '🔥',
      link: 'https://trainings.internshala.com/view_certificate/586F356A-C0A4-B48D-F021-92D17E796178/E378472B-7380-917D-5AC9-55203BA0ADA3/'
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">
            Professional journey and learning experiences
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{exp.icon}</div>
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {exp.company} {exp.icon}
                      </CardTitle>
                      <h4 className="text-lg text-primary font-semibold">{exp.position}</h4>
                    </div>
                  </div>
                  <Badge variant="outline">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-primary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <p key={i} className="text-foreground leading-relaxed flex items-start">
                        <span className="text-primary mr-2 mt-2">•</span>
                        {desc}
                      </p>
                    ))}
                  </div>

                  {exp.link !== '#' && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={exp.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        View Details
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;