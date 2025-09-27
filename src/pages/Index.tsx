console.log('BUILD_MARKER_ENTRY_LOADED - ' + new Date().toISOString());
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import { resume } from '@/data/resume';
import { formatExperienceDuration } from '@/lib/utils';
import ContactSection from '@/components/ContactSection';
import FooterNEW from '@/components/FooterNEW';


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Status / metadata strip */}
        <div className="w-full bg-accent/40 text-accent-foreground text-xs py-2 text-center border-b border-border">
          <span>
            Last Updated: {resume.lastUpdated ? new Date(resume.lastUpdated).toLocaleDateString() : '—'} • Experience: {(() => {
              const exp = resume.experience?.[0];
              if (!exp) return 'n/a';
              return formatExperienceDuration(exp.start, exp.end);
            })()}
          </span>
        </div>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
  <ProjectsSection />
  <CertificationsSection />
        <ContactSection />
      </main>
      <FooterNEW />
    </div>
  );
};

export default Index;

