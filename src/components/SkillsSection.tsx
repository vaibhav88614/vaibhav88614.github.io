import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', percentage: 90, color: 'hsl(var(--tech-orange))' },
    { name: 'CSS', percentage: 82, color: 'hsl(var(--tech-blue))' },
    { name: 'JavaScript', percentage: 60, color: 'hsl(var(--primary))' },
    { name: 'Linux', percentage: 73, color: 'hsl(var(--tech-green))' },
    { name: 'ReactJS', percentage: 55, color: 'hsl(var(--tech-cyan))' },
    { name: 'Machine Learning', percentage: 75, color: 'hsl(var(--tech-purple))' },
    { name: 'Python', percentage: 60, color: 'hsl(var(--tech-green))' },
    { name: 'NodeJS', percentage: 50, color: 'hsl(var(--tech-green))' },
    { name: 'GitHub', percentage: 70, color: 'hsl(var(--foreground))' },
    { name: 'C/C++', percentage: 85, color: 'hsl(var(--tech-blue))' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills & Abilities</h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                  <span className="text-sm font-bold text-primary">{skill.percentage}%</span>
                </div>
              </CardHeader>
              <CardContent>
                <Progress 
                  value={skill.percentage} 
                  className="h-3"
                  style={{
                    '--progress-background': skill.color,
                  } as React.CSSProperties}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;