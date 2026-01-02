import { SectionTitle } from '../SectionTitle';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import type { Research } from '../../../../drizzle/schema';

interface ResearchSectionProps {
  items: Research[];
}

export function ResearchSection({ items }: ResearchSectionProps) {
  return (
    <section id="research" className="py-20 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle title="Research" subtitle="Academic research and investigations" />

        <div className="grid grid-cols-1 gap-6">
          {items.map((research, index) => (
            <motion.div
              key={research.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {research.title}
                  </h3>
                  {research.professor && (
                    <p className="text-accent font-medium text-sm">
                      Professor: {research.professor}
                    </p>
                  )}
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                  {format(new Date(research.startDate), 'MMM yyyy')} -{' '}
                  {research.endDate
                    ? format(new Date(research.endDate), 'MMM yyyy')
                    : 'Present'}
                </span>
              </div>

              {research.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {research.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
