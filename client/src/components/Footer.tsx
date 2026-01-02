import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  resumeUrl?: string;
}

export function Footer({
  email,
  githubUrl,
  linkedinUrl,
  instagramUrl,
  resumeUrl,
}: FooterProps) {
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
    <footer className="bg-card border-t border-border mt-20">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-2">Let's Connect</h3>
            <p className="text-muted-foreground mb-4">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-block text-accent hover:text-accent/80 font-medium transition-colors"
              >
                {email}
              </a>
            )}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
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
                    <link.icon size={20} />
                  </motion.a>
                )
            )}
            {resumeUrl && (
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Bo Li. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
