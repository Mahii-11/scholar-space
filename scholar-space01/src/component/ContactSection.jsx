/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  MapPin,
  Globe,
  Mail,
  Phone,
  Send,
  Download,
  Github,
  Linkedin,
  Twitter,
  BookOpen,
  Award,
  FileText,
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const professionalProfiles = [
    { name: "Google Scholar", icon: BookOpen, url: "#" },
    { name: "ResearchGate", icon: Award, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "ORCID", icon: FileText, url: "#" },
    { name: "Web of Science", icon: Globe, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "BASIS Soft Expo", icon: BookOpen, url: "#" },
    { name: "YouTube", icon: Play, url: "#" },
  ];

  const affiliations = [
    {
      position: "Professor",
      org: "Faculty of Artificial Intelligence and Computer Technologies",
      subOrg: "Samarkand State University, Uzbekistan",
    },
    {
      position: "Former Department Head",
      org: "Department of International Education Development",
      subOrg: "Synergy University, Moscow, Russia",
      date: "(October 2024 - March 2025)",
    },
  ];

  const cvOptions = [
    {
      title: "Short Resume",
      desc: "Concise 2-page overview of qualifications and experience",
      icon: FileText,
    },
    {
      title: "Professional Bio",
      desc: "Detailed biography highlighting career achievements",
      icon: FileText,
    },
    {
      title: "Detailed CV",
      desc: "Comprehensive curriculum vitae with full details",
      icon: FileText,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-white via-blue-50/10 to-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Contact Information
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with Dr. Sazzad Hossain to discuss research
            collaborations, speaking opportunities, or academic inquiries.
          </p>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12 rounded-xl overflow-hidden shadow-lg border border-neutral-200"
        >
          <div className="relative h-64 md:h-96 bg-linear-to-br from-blue-100 to-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.123456789!2d66.95!3d39.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM5JzAwLjAiTiA2NsKwNTcnMDAuMCJF!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Location Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 md:p-8 rounded-lg border border-neutral-200 mb-12 flex items-start gap-4"
        >
          <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              Samarkand State University
            </h3>
            <p className="text-neutral-600">
              University blv. 15, Samarkand city, Samarkand region, Uzbekistan,
              140104
            </p>
          </div>
        </motion.div>

        {/* Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <div className="flex items-start gap-3 mb-2">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-900">Office Address</h4>
                  <p className="text-sm text-neutral-600 mt-1">
                    University blv. 15, Samarkand city, Samarkand region,
                    Uzbekistan, 140104
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <div className="flex items-start gap-3 mb-2">
                <Globe className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-900">Website</h4>
                  <a
                    href="https://www.professorsazzad.com"
                    className="text-sm text-blue-600 hover:text-blue-700 mt-1"
                  >
                    www.professorsazzad.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">
            Professional Profiles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {professionalProfiles.map((profile, i) => {
              const Icon = profile.icon;
              return (
                <motion.a
                  key={i}
                  href={profile.url}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 p-3 bg-white border border-blue-100 rounded-lg hover:shadow-md transition-all group"
                >
                  <Icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-neutral-900">
                    {profile.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Affiliations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">
            Current Affiliations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {affiliations.map((aff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg border border-neutral-200"
              >
                <h4 className="font-bold text-neutral-900 mb-2">
                  {aff.position}
                </h4>
                <p className="text-sm text-neutral-700 mb-1">{aff.org}</p>
                <p className="text-sm text-neutral-600">{aff.subOrg}</p>
                {aff.date && (
                  <p className="text-xs text-neutral-500 mt-2">{aff.date}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">
            Download CV
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cvOptions.map((cv, i) => {
              const Icon = cv.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white p-6 rounded-lg border border-neutral-200 text-center hover:shadow-lg transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h4 className="font-bold text-neutral-900 mb-2">
                    {cv.title}
                  </h4>
                  <p className="text-sm text-neutral-600 mb-4">{cv.desc}</p>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Play icon component
const Play = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 3v18l15-9z" />
  </svg>
);
