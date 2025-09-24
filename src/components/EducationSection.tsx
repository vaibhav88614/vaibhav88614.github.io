import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Master of Technology (M.Tech) in Computer Science Engineering',
      institution: 'Govind Ballabh Pant Institute of Engineering & Technology (GBPIET)',
      duration: '2024-2026',
      status: 'Pursuing',
      specialization: 'Computer Science Engineering (CSE)',
      icon: <BookOpen className="text-primary" size={24} />
    },
    {
      degree: 'Bachelor of Engineering (B.Tech) in Computer Science',
      institution: 'Govind Ballabh Pant Institute of Engineering & Technology (GBPIET)',
      duration: '2020-2024',
      status: 'Completed',
      marks: '4257/5401',
      percentage: '78.82%',
      icon: <Award className="text-primary" size={24} />
    },
    {
      degree: 'Intermediate (12th)',
      institution: 'Uttarakhand Board of School Education (UBSE)',
      duration: '2019-2020',
      status: 'Completed',
      subjects: 'Science',
      marks: '402/500',
      percentage: '80.40%',
      icon: <BookOpen className="text-primary" size={24} />
    },
    {
      degree: 'High School (10th)',
      institution: 'Uttarakhand Board of School Education (UBSE)',
      duration: '2017-2018',
      status: 'Completed',
      marks: '435/500',
      percentage: '87.00%',
      icon: <Award className="text-primary" size={24} />
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Education</h2>
          <p className="text-muted-foreground text-lg">
            Education is not the learning of facts, but the training of the mind to think.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    <p className="text-muted-foreground text-lg">{edu.institution}</p>
                  </div>
                  <Badge variant={edu.status === 'Pursuing' ? 'default' : 'secondary'}>
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-primary" />
                    <span className="font-semibold">{edu.duration}</span>
                  </div>
                  
                  {edu.specialization && (
                    <p><strong>Specialization:</strong> {edu.specialization}</p>
                  )}
                  
                  {edu.subjects && (
                    <p><strong>Subjects:</strong> {edu.subjects}</p>
                  )}
                  
                  {edu.marks && (
                    <div className="flex space-x-6">
                      <p><strong>Marks:</strong> {edu.marks}</p>
                      <p><strong>Percentage:</strong> <span className="text-primary font-bold">{edu.percentage}</span></p>
                    </div>
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

export default EducationSection;