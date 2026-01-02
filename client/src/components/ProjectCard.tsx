import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  name: string;
  role: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
}

export function ProjectCard({
  name,
  role,
  description,
  detailedDescription,
  technologies,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-1">{name}</h3>
            <p className="text-accent font-medium text-sm">{role}</p>
          </div>
          {detailedDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-4 p-1 hover:bg-muted rounded-md transition-colors"
            >
              <ChevronDown
                size={20}
                className={`text-muted-foreground transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          )}
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {isExpanded && detailedDescription && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-border pt-4 mt-4"
            >
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {detailedDescription}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
