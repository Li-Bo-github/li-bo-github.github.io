import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-4xl font-bold text-foreground mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      <div className="w-16 h-1 bg-accent rounded-full mt-4" />
    </motion.div>
  );
}
