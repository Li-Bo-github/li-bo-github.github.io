import { SectionTitle } from '../SectionTitle';
import { SkillsGrid } from '../SkillsGrid';
import type { Skill } from '../../../../drizzle/schema';

interface SkillsSectionProps {
  categories: Record<string, Skill[]>;
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle title="Skills" subtitle="Technologies and expertise" />
        <SkillsGrid categories={categories} />
      </div>
    </section>
  );
}
