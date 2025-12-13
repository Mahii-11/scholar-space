/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export const FooterSection = () => {
  const quickLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Teaching", href: "#teaching" },
    { name: "Publications", href: "#publications" },
    { name: "Student Resources", href: "#resources" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-linear-to-br from-neutral-50 via-white to-blue-50/20 border-t border-neutral-200 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl z-0" />

      {/* Main Footer Content */}
      <div className="container mx-auto max-w-6xl px-3 md:px-4 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
          {/* Left Side - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-1 h-8 bg-red-600 rounded-full shrink-0" />
              <h3 className="text-2xl font-bold text-neutral-900">
                Dr. Sazzad Hossain
              </h3>
            </div>
            <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
              Professor at Samarkand State University, Uzbekistan, Faculty of
              Artificial Intelligence and Computer Technologies. Previously
              served as Department Head of International Education Development
              at Synergy University, Moscow, Russia (October 2024 - March 2025).
            </p>
          </motion.div>

          {/* Right Side - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-neutral-900 mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {quickLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  className="text-sm md:text-base text-neutral-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-neutral-300 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-xs md:text-sm text-neutral-600">
            © 2025 Dr. Sazzad Hossain |
            <a href="#" className="hover:text-blue-600 transition-colors ml-1">
              Terms of Service
            </a>
          </p>

          {/* Social/Contact Links */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="mailto:contact@professorsazzad.com"
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-sm transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
