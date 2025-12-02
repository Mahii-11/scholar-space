/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Building2, Globe, Lightbulb, Award } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.9, ease: "easeOut" },
};

const AboutSection = () => {
  const stats = [
    {
      icon: Building2,
      title: "Academic Leadership",
      desc: "Professor at Samarkand State University, Uzbekistan. Leading AI & Quantum Computing research initiatives.",
    },
    {
      icon: Globe,
      title: "Policy & Governance",
      desc: "Former Member of the University Grants Commission (UGC) of Bangladesh and Director of BSCL from 2019-2024.",
    },
    {
      icon: Lightbulb,
      title: "Research Excellence",
      desc: "Published 50+ peer-reviewed international journal and conference papers in AI, Cybersecurity, and IoT.",
    },
    {
      icon: Award,
      title: "Recognition & Memberships",
      desc: "Fellow of Institution of Engineers Bangladesh, Senior Member of IEEE and recipient of National Digital Award.",
    },
  ];

  const experiences = [
    {
      icon: Building2,
      title: "Professor",
      org: "Samarkand State University, Uzbekistan",
      period: "2025-PRESENT",
      details: [
        "Leading AI & Quantum Computing research initiatives",
        "Establishing AI-driven Cybersecurity & Big Data Analytics research centers",
      ],
    },
    {
      icon: Globe,
      title: "Department Head",
      org: "International Education Development at Synergy University, Moscow, Russia",
      period: "October 2024 - March 2025",
      details: [
        "Fostered cross-border research collaborations in AI, Cybersecurity, and Quantum Computing",
      ],
    },
    {
      icon: Award,
      title: "Former Member",
      org: "University Grants Commission (UGC) of Bangladesh",
      period: "2019-2024",
      details: [
        "Spearheaded national policies for AI-integrated satellite communication systems",
        "Contributed to the formulation of strategic plans for BangabandhuSatellite-1 & future satellite programs",
      ],
    },
    {
      icon: Lightbulb,
      title: "Former Director",
      org: "Bangladesh Satellite Company Ltd. (BSCL), Bangladesh",
      period: "2019-2024",
      details: [
        "Overseeing AI-driven satellite communication projects",
        "Shaping national space technology policies for Bangladesh",
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            About <span className="text-blue-600">Dr. Sazzad Hossain</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Dr. Md. Sazzad Hossain is a distinguished Professor at Samarkand
            State University and the Department Head of International Education
            Development at Synergy University, Moscow, Russia. With over 30
            years of experience in higher education, research, and technology
            consulting, he has emerged as a leading figure in quantum computing,
            artificial intelligence, and advanced digital technologies.
          </p>
        </motion.div>

        {/* Professional Journey */}
        <motion.div {...fadeInUp} className="mb-16 md:mb-24">
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            Professional Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-neutral-700 leading-relaxed">
                <span className="font-bold text-neutral-900">
                  Professor Dr. Md. Sazzad Hossain
                </span>{" "}
                is a distinguished academic at{" "}
                <span className="font-semibold text-blue-600">
                  Samarkand State University
                </span>{" "}
                and the Department Head of International Education Development
                at Synergy University, Moscow. With over 30 years of experience
                in higher education, research, and technology consulting, he has
                emerged as a leading voice in the fields of Quantum Computing,
                Artificial Intelligence, and Cybersecurity.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                As a former Member of the University Grants Commission (UGC) of
                Bangladesh and Director of Bangladesh Satellite Company Ltd.
                from 2019-2024, Professor Hossain played a pivotal role in
                shaping national education and technology policies, with a
                special focus on digital transformation and space technology
                initiatives.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                  alt="Dr. Sazzad Hossain"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  30+ Years of Academic Excellence
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-28"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <Icon className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="font-bold text-neutral-900 mb-2 text-base">
                  {stat.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Professional Experience */}
        <motion.div {...fadeInUp} className="mb-20 md:mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
            Professional Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-900 text-lg">
                        {exp.title}
                      </h4>
                      <p className="text-sm text-neutral-600 mt-1">{exp.org}</p>
                      <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-neutral-600"
                      >
                        <span className="text-blue-600 mt-1 shrink-0">›</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Distinguished Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-linear-to-r from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12 border border-blue-100/50"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8">
            Distinguished Leadership in Higher Education
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Professor Dr. Md. Sazzad Hossain's tenure as a Member of the
            University Grants Commission (UGC) of Bangladesh (2019 – 2024)
            marked a defining milestone in his career. He demonstrated
            leadership in academic policy, research innovation, and
            technology-driven education reforms.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            At UGC, he spearheaded the integration of{" "}
            <span className="font-semibold text-blue-600">
              AI, Quantum Computing, Cybersecurity
            </span>
            , and <span className="font-semibold text-blue-600">IoT</span> into
            the national higher education curriculum, ensuring future-ready
            policies for STEAM education and digital transformation. His
            leadership in research funding, international collaborations, and
            technology-driven governance positioned Bangladesh at the forefront
            of technological advancement in South Asia.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
