import { SectionTitle } from '../SectionTitle';
import { Timeline } from '../Timeline';
import type { Education } from '../../../../drizzle/schema';

interface EducationSectionProps {
  items: Education[];
}

export function EducationSection({ items }: EducationSectionProps) {
  const timelineItems = items.map((edu) => ({
    id: edu.id,
    title: edu.degree,
    subtitle: edu.institution,
    startDate: edu.startDate,
    endDate: edu.endDate,
    description: edu.description,
  }));

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle title="Education" subtitle="My academic background and achievements" />
        <Timeline items={timelineItems} />
      </div>
    </section>
  );
}
