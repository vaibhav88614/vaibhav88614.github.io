import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { resume } from '@/data/resume';

const SkillsSection = () => {
  // Simple mapping of known technologies to emoji or short badge; user can replace with SVG icons later
  const iconMap: Record<string, string> = {
    Python: '🐍', C: '🔧', 'C++': '➕', Java: '☕', JavaScript: '🟨', PHP: '🐘',
    'Next.js': 'N', 'React.js': '⚛️', CSS: '🎨', HTML: '🧱', 'Node.js': '🟩', Express: '🚄',
    Django: '🟢', Flask: '🧪', Qt5: '🖼️', MySQL: '🐬', PostgreSQL: '🐘', REST: '🌐', FastAPI: '⚡',
    Vite: '⚡', Git: '🔗'
  };

  const categories = [
    { label: 'Languages', items: resume.skills.languages },
    { label: 'Frontend', items: resume.skills.frontend },
    { label: 'Backend', items: resume.skills.backend },
    { label: 'Frameworks', items: resume.skills.frameworks },
    { label: 'Databases', items: resume.skills.databases },
    { label: 'APIs', items: resume.skills.apis },
    { label: 'Tools', items: resume.skills.tools },
    { label: 'Quality & Compliance', items: resume.skills.quality },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map(cat => (
            <Card key={cat.label} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{cat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2 text-sm">
                  {cat.items.map(item => {
                    const icon = iconMap[item] || '•';
                    return (
                      <li key={item} className="px-2 py-1 rounded-md bg-secondary/40 text-foreground border border-border/50 flex items-center gap-1">
                        <span className="text-primary text-sm" aria-hidden="true">{icon}</span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;