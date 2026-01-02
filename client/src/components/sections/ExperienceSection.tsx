import { SectionTitle } from '../SectionTitle';
import { Timeline } from '../Timeline';
import type { Experience } from '../../../../drizzle/schema';

interface ExperienceSectionProps {
  items: Experience[];
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  const timelineItems = items.map((exp) => ({
    id: exp.id,
    title: exp.position,
    subtitle: exp.company,
    startDate: exp.startDate,
    endDate: exp.endDate,
    description: exp.description,
  }));

  return (
    <section id="experience" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle title="Experience" subtitle="My professional journey and roles" />
        <Timeline items={timelineItems} />
      </div>
    </section>
  );
}
