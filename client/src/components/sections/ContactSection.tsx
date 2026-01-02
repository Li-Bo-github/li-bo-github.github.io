import { SectionTitle } from '../SectionTitle';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  resumeUrl?: string;
}

export function ContactSection({
  email,
  githubUrl,
  linkedinUrl,
  instagramUrl,
  resumeUrl,
}: ContactSectionProps) {
  const socialLinks = [
    {
      icon: Mail,
      href: email ? `mailto:${email}` : '#',
      label: 'Email',
      show: !!email,
    },
    {
      icon: Github,
      href: githubUrl || '#',
      label: 'GitHub',
      show: !!githubUrl,
    },
    {
      icon: Linkedin,
      href: linkedinUrl || '#',
      label: 'LinkedIn',
      show: !!linkedinUrl,
    },
    {
      icon: Instagram,
      href: instagramUrl || '#',
      label: 'Instagram',
      show: !!instagramUrl,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle title="Get In Touch" subtitle="Let's connect and collaborate" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {email && (
              <Button
                size="lg"
                asChild
              >
                <a href={`mailto:${email}`}>
                  <Mail className="mr-2" size={20} />
                  Send Email
                </a>
              </Button>
            )}
            {resumeUrl && (
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            )}
          </div>

          <div className="flex justify-center gap-6">
            {socialLinks.map(
              (link) =>
                link.show && (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.label}
                  >
                    <link.icon size={24} />
                  </motion.a>
                )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
