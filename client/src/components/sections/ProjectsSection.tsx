import { SectionTitle } from '../SectionTitle';
import { ProjectCard } from '../ProjectCard';

interface ProjectWithTech {
  id: number;
  name: string;
  description: string | null;
  detailedDescription: string | null;
  role: string | null;
  technologies: string[];
}

interface ProjectsSectionProps {
  items: ProjectWithTech[];
}

export function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle title="Projects" subtitle="Showcasing my work and contributions" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              role={project.role || 'Developer'}
              description={project.description || ''}
              detailedDescription={project.detailedDescription || undefined}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
