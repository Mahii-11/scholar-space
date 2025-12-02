/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowRight,
  ExternalLink,
  Globe,
  User,
  BookOpen,
  Award,
  Zap,
  Play,
} from "lucide-react";
import heroImage from "../assets/hero_image.webp";

const getFlagEmoji = (code) => {
  const flags = {
    IT: "🇮🇹",
    IN: "🇮🇳",
    UZ: "🇺🇿",
  };
  return flags[code] || "🏳️";
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const SummerSchoolSection = () => {
  return (
    <motion.section
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="py-24 px-4  bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 text-neutral-900 border-b border-blue-200/50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-300/8 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div {...fadeIn} className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-linear-to-r from-emerald-400 to-green-500 text-white rounded-full text-sm font-bold mb-4 shadow-lg shadow-green-400/30">
            ● Currently Ongoing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900">
            Quantum Computing{" "}
            <span className="text-blue-600">Summer School 2025</span>
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto text-lg">
            Historic international collaboration bringing together the
            University of Milan, VIT India, and Samarkand State University for
            groundbreaking quantum education in the heart of the Silk Road.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row"
        >
          <div className="lg:w-2/5 relative h-64 lg:h-auto">
            <img
              src={heroImage}
              alt="Professor Speaking"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-white">
              <p className="font-bold text-lg">Professor Dr. Sazzad Hossain</p>
              <p className="text-sm opacity-90">
                Leading the International Initiative
              </p>
            </div>
          </div>
          <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-neutral-500 font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                August 11-17, 2025
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                Samarkand, Uzbekistan
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">
              Making Quantum Computing Accessible to Everyone
            </h3>

            <p className="text-neutral-600 mb-8 leading-relaxed">
              This groundbreaking summer school represents a unique
              international collaboration...
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer">
                View Full Details
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer">
                Register Interest
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export const ProgramHighlightsSection = () => {
  const highlights = [
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "International Collaboration",
      desc: "3 prestigious universities from Italy, India, and Uzbekistan",
    },
    {
      icon: <User className="w-6 h-6 text-blue-600" />,
      title: "Expert Faculty",
      desc: "Leading professors in Quantum Computing and AI",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "Comprehensive Curriculum",
      desc: "5 days of intensive quantum computing education",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Certificate Program",
      desc: "Official certification upon completion",
    },
  ];

  const steps = [
    {
      day: "Day 1",
      title: "Foundations of Quantum Computing",
      tag: "Theory & Concepts",
    },
    {
      day: "Day 2",
      title: "Qubits and Quantum Operations",
      tag: "Hands-on Practice",
    },
    {
      day: "Day 3",
      title: "Superposition and Probability",
      tag: "Advanced Concepts",
    },
    {
      day: "Day 4",
      title: "Quantum Security & Cryptography",
      tag: "Real Applications",
    },
    { day: "Day 5", title: "Industry Applications", tag: "Future Prospects" },
  ];

  const partners = [
    {
      code: "IT",
      name: "University of Milan",
      desc: "Leading European quantum research institution",
      color: "bg-red-100 text-red-600",
    },
    {
      code: "IN",
      name: "VIT India",
      desc: "Premier technical university with quantum expertise",
      color: "bg-orange-100 text-orange-600",
    },
    {
      code: "UZ",
      name: "Samarkand State University",
      desc: "Historic Silk Road center of learning",
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-blue-50 via-cyan-50/50 to-blue-50 text-neutral-900 border-b border-blue-100/40 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-60 md:w-80 h-60 md:h-80 bg-cyan-200/8 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div {...fadeIn} className="mb-32">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Program Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeIn} className="mb-32">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">
            5-Day Learning Journey
          </h3>
          <p className="text-center text-neutral-500 mb-8">
            From quantum fundamentals to applications
          </p>

          <div className="flex flex-col md:grid md:grid-cols-5 gap-4 md:gap-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow p-5 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-3 shrink-0">
                  {i + 1}
                </div>
                <h4 className="font-bold text-sm mb-1">{step.day}</h4>
                <p className="text-xs text-neutral-600 mb-3 leading-tight">
                  {step.title}
                </p>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                  {step.tag}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeIn}>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            International Partnership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner, i) => {
              const badgeColors = {
                IT: { bg: "bg-red-100", text: "text-red-700" },
                IN: { bg: "bg-yellow-100", text: "text-yellow-700" },
                UZ: { bg: "bg-green-100", text: "text-green-700" },
              };

              const colors = badgeColors[partner.code] || {
                bg: "bg-gray-100",
                text: "text-gray-700",
              };

              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-lg transition-all text-center flex flex-col items-center"
                >
                  <div
                    className={`${colors.bg} ${colors.text} w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mb-4`}
                  >
                    {partner.code}
                  </div>
                  <h4 className="font-bold text-base mb-2">{partner.name}</h4>
                  <p className="text-sm text-neutral-500">{partner.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-32 mb-16 rounded-2xl p-8 md:p-10 text-center text-white relative overflow-hidden shadow-xl"
          style={{
            background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
          }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <Zap className="w-10 h-10 mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Witness History in the Making
            </h3>
            <p className="max-w-xl mx-auto text-base opacity-90 mb-6">
              Follow the progress of this groundbreaking international
              collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-2.5 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-semibold flex items-center justify-center gap-2 transition cursor-pointer">
                Live Updates
              </button>
              <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition cursor-pointer">
                View Photo Gallery
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div {...fadeIn} className="mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 text-center">
            <span className="text-blue-600">TEHI 2025</span> Conference
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto text-base mb-8 text-center">
            The 5th International Conference on Trends in Electronics and Health
            Informatics...
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Opening Ceremony",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                date: "TEHI 2025",
              },
              {
                title: "Conference Panel",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                date: "TEHI 2025",
              },
              {
                title: "Networking Session",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                date: "TEHI 2025",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow h-48 md:h-56"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs opacity-90">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Featured <span className="text-purple-600">Videos</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Opening Ceremony",
                  creator: "Opening Ceremony",
                  thumbnail:
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
                },
                {
                  title: "Keynote Speech",
                  creator: "Professor Wallace",
                  thumbnail:
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
                },
                {
                  title: "Professor Sazzad Hossain's Thoughts",
                  creator: "Professor Sazzad",
                  thumbnail:
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
                },
              ].map((video, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 md:h-56 bg-black group overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                    />
                    <button className="absolute inset-0 flex items-center justify-center cursor-pointer">
                      <div className="w-16 h-16 bg-red-500 group-hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                        <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                      </div>
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-sm mb-1 line-clamp-2">
                      {video.title}
                    </p>
                    <p className="text-xs text-neutral-500">{video.creator}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="mt-12 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Explore the Full Conference Experience
            </h3>
            <p className="max-w-2xl mx-auto text-base opacity-90 mb-6">
              View the complete gallery, watch all keynote speeches, and
              discover more.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold flex items-center justify-center gap-2 transition mx-auto cursor-pointer">
              View Full Conference Page
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export const CtaSection = () => {
  return null;
};
