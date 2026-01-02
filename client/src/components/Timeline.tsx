import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  startDate: Date;
  endDate?: Date | null;
  description?: string | null;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent to-transparent" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-24"
          >
            {/* Timeline dot */}
            <div className="absolute left-2 top-2 w-12 h-12 bg-white border-4 border-accent rounded-full flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-accent rounded-full" />
            </div>

            {/* Content card */}
            <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-accent font-medium">{item.subtitle}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                  {format(new Date(item.startDate), 'MMM yyyy')} -{' '}
                  {item.endDate ? format(new Date(item.endDate), 'MMM yyyy') : 'Present'}
                </span>
              </div>
              {item.description && (
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
