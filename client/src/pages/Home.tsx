import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ResearchSection } from '@/components/sections/ResearchSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { trpc } from '@/lib/trpc';

export default function Home() {
  const portfolioMetadata = trpc.portfolio.getMetadata.useQuery();
  const education = trpc.portfolio.getEducation.useQuery();
  const experience = trpc.portfolio.getExperience.useQuery();
  const research = trpc.portfolio.getResearch.useQuery();
  const projects = trpc.portfolio.getProjects.useQuery();
  const skills = trpc.portfolio.getSkills.useQuery();

  const isLoading =
    portfolioMetadata.isLoading ||
    education.isLoading ||
    experience.isLoading ||
    research.isLoading ||
    projects.isLoading ||
    skills.isLoading;

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-accent" size={40} />
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  const metadata = portfolioMetadata.data;
  const portfolioName = metadata?.name || 'Bo Li';
  const aboutText =
    metadata?.about ||
    "Hi, I'm interested in the field of supervised learning and autonomous driving. I am planning to work as a software engineer after graduation.";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header portfolioName={portfolioName} />

      <main>
        {/* Hero Section */}
        <HeroSection name={portfolioName} about={aboutText} />

        {/* Education Section */}
        {education.data && education.data.length > 0 && (
          <EducationSection items={education.data} />
        )}

        {/* Experience Section */}
        {experience.data && experience.data.length > 0 && (
          <ExperienceSection items={experience.data} />
        )}

        {/* Research Section */}
        {research.data && research.data.length > 0 && (
          <ResearchSection items={research.data} />
        )}

        {/* Projects Section */}
        {projects.data && projects.data.length > 0 && (
          <ProjectsSection items={projects.data} />
        )}

        {/* Skills Section */}
        {skills.data && Object.keys(skills.data).length > 0 && (
          <SkillsSection categories={skills.data} />
        )}

        {/* Contact Section */}
        <ContactSection
          email={metadata?.email}
          githubUrl={metadata?.githubUrl || undefined}
          linkedinUrl={metadata?.linkedinUrl || undefined}
          instagramUrl={metadata?.instagramUrl || undefined}
          resumeUrl={metadata?.resumeUrl || undefined}
        />
      </main>

      <Footer
        email={metadata?.email}
        githubUrl={metadata?.githubUrl || undefined}
        linkedinUrl={metadata?.linkedinUrl || undefined}
        instagramUrl={metadata?.instagramUrl || undefined}
        resumeUrl={metadata?.resumeUrl || undefined}
      />
    </div>
  );
}
