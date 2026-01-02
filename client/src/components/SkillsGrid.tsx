import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface Skill {
  id: number;
  name: string;
  proficiency: number;
}

interface SkillsGridProps {
  categories: Record<string, Skill[]>;
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  const categoryEntries = Object.entries(categories);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categoryEntries.map(([category, skills], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 pb-3 border-b border-border">
            {category}
          </h3>

          <div className="space-y-5">
            {skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-foreground">
                    {skill.name}
                  </label>
                  <span className="text-xs text-muted-foreground font-semibold">
                    {skill.proficiency}%
                  </span>
                </div>
                <Progress
                  value={skill.proficiency}
                  className="h-2"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
