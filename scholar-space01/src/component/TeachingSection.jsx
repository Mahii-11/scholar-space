/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  ShieldAlert,
  Trophy,
  Presentation,
  Award,
  Zap,
  Cpu,
  Shield,
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const TeachingSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const courseTabs = [
    {
      name: "Advanced Technologies",
      courses: [
        { name: "Quantum Computing", icon: Zap },
        { name: "Artificial Intelligence & Machine Learning", icon: Cpu },
        { name: "Internet of Things (IoT)", icon: Zap },
      ],
    },
    {
      name: "Computer Science",
      courses: [
        { name: "Game Theory & Decision Making", icon: Users },
        { name: "Cybersecurity & Cryptography", icon: Shield },
        { name: "Human-Robot Interaction", icon: Zap },
      ],
    },
    {
      name: "Research & Methods",
      courses: [
        { name: "Research Methodology", icon: BookOpen },
        { name: "Advanced Quantum Algorithms", icon: Zap },
        { name: "AI Systems Design", icon: Cpu },
      ],
    },
  ];

  const researchSupervision = [
    {
      icon: ShieldAlert,
      title: "Research Mentorship",
      desc: "Currently leading AI & Quantum Computing research initiatives and supervising interdisciplinary research teams across international institutions.",
    },
    {
      icon: Trophy,
      title: "Doctoral & Graduate Supervision",
      desc: "Supervising doctoral candidates in Quantum Computing, AI, and Cybersecurity at Samarkand State University and through international collaborations.",
    },
    {
      icon: Users,
      title: "Undergraduate Projects",
      desc: "Supervised over 50 undergraduate students on projects including AI systems, IoT applications, and quantum algorithm implementations.",
    },
    {
      icon: BookOpen,
      title: "Research Center Development",
      desc: "Establishing AI-driven Cybersecurity & Big Data Analytics research centers, providing students with hands-on experience on cutting-edge technologies.",
    },
  ];

  const administrativeRoles = [
    {
      title: "Head, Department of Computer Science and Engineering",
      org: "University of Liberal Arts Bangladesh",
      date: "December 2009 - May 2017",
    },
    {
      title: "Head, Department of Computer Science and Engineering",
      org: "International Islamic University Chittagong, Bangladesh",
      date: "March 2003 - May 2003",
    },
    {
      title: "Adviser, IT Division",
      org: "University of Liberal Arts Bangladesh",
      date: "February 2010 - Present",
    },
    {
      title: "Convener, Library Automation Committee",
      org: "International Islamic University Chittagong",
      date: "",
    },
    {
      title: "Convener, Job Fair 2003",
      org: "Chittagong, Bangladesh",
      date: "",
    },
  ];

  const externalRoles = [
    {
      icon: Trophy,
      title: "Chairman and Founder",
      org: "Alternative and Sustainable Energy Foundation Bangladesh",
      date: "2011 - Present",
    },
    {
      icon: Users,
      title: "Secretary General, Central Governing Body",
      org: "Old Faujian Association (Ex-Cadets of Fauzdarhat Cadet)",
      date: "2011 - 2012",
    },
    {
      icon: BookOpen,
      title: "Science and Technology Secretary",
      org: "CUET Ex-Student Association",
      date: "2011 - 2012",
    },
  ];

  const invitedSpeaks = [
    {
      title: '"Quantum Computer"',
      org: "Institute of Engineers, Chittagong, Bangladesh",
      date: "October 27, 2009",
    },
    {
      title: '"Why Quantum Computer"',
      org: "Portland State University, Oregon, USA",
      date: "June 2007",
    },
  ];

  const thesisProjects = [
    "Design of Proxy Server on Java",
    "VLSI Design and Logic Synthesis with Technology Mapping",
    "Online Office Management System",
    "Modeling Wireless Network with Asynchronous VLSI",
    "Design of a 4-bit adder",
    "Design and implement Web-based System",
  ];

  const academicServices = [
    {
      icon: Trophy,
      title: "Conference Chair",
      desc: "Organizing Chair - International Conference of Fourth Industrial Revolution 2021, Dhaka, Bangladesh.",
    },
    {
      icon: Presentation,
      title: "Workshop Leadership",
      desc: "Student Program Chair - International Workshop on Robot and Human Interactive Communication (2005), Portland State University, Oregon, USA.",
    },
    {
      icon: BookOpen,
      title: "Editorial Roles",
      desc: "Editor for Proceedings of The Fourth Industrial Revolution and Beyond, Springer Nature (SCOPUS Indexed) and ULAB Journal of Science and Engineering.",
    },
    {
      icon: Presentation,
      title: "Invited Speaker",
      desc: "Delivered talks on Quantum Computing at the Institute of Engineers, Chittagong (2009) and Portland State University, Oregon (2007).",
    },
    {
      icon: Award,
      title: "Advisory Roles",
      desc: "Advisory Committee Member for the 1st International Conference on Advanced Information and Communication Technology (ICAICT 2018).",
    },
    {
      icon: BookOpen,
      title: "Journal Reviewer",
      desc: "Reviewer for IET Journals, International Journal of Electronics, Computers & Mathematics with Applications.",
    },
  ];

  return (
    <>
      {/* Academic Leadership Header */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              Academic <span className="text-blue-600">Leadership</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Professor Dr. Sazzad Hossain has extensive experience in teaching,
              research supervision, and academic leadership across multiple
              international institutions.
            </p>
          </motion.div>

          {/* Courses & Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-8">
              Courses & Expertise
            </h3>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
              {courseTabs.map((tab, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 md:px-6 py-2 md:py-3 font-semibold rounded-full transition-all duration-300 ${
                    activeTab === i
                      ? "bg-neutral-900 text-white shadow-lg"
                      : "bg-white text-neutral-700 border border-neutral-200 hover:border-blue-300"
                  }`}
                >
                  {tab.name}
                </motion.button>
              ))}
            </div>

            {/* Courses Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {courseTabs[activeTab].courses.map((course, i) => {
                const CourseIcon = course.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-blue-100 hover:shadow-md transition-all group cursor-pointer"
                  >
                    <CourseIcon className="w-5 h-5 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {course.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Research Supervision & Mentorship */}
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
          <motion.h3
            {...fadeIn}
            className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-12"
          >
            Research Supervision & Mentorship
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {researchSupervision.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="flex gap-4 p-6 bg-white rounded-lg border border-blue-100/50 hover:shadow-md transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0"
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-neutral-700">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Administrative Responsibilities */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.h3
            {...fadeIn}
            className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-12"
          >
            Administrative Responsibilities
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {administrativeRoles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="flex gap-4 p-5 bg-white rounded-lg border border-neutral-100 hover:shadow-md transition-all"
              >
                <BookOpen className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-neutral-900">{role.title}</h4>
                  <p className="text-sm text-neutral-600 mt-1">{role.org}</p>
                  {role.date && (
                    <p className="text-xs text-neutral-500 mt-1">{role.date}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* External Services & Leadership Roles */}
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
          <motion.h3
            {...fadeIn}
            className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-12"
          >
            External Services & Leadership Roles
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {externalRoles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="text-center p-6 bg-white rounded-lg border border-blue-100/50 hover:shadow-md transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h4 className="font-bold text-neutral-900 mb-2">
                    {role.title}
                  </h4>
                  <p className="text-sm text-neutral-600 mb-2">{role.org}</p>
                  <p className="text-xs text-neutral-500">{role.date}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Invited Speaker */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h3
            {...fadeIn}
            className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-12"
          >
            Invited Speaker
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {invitedSpeaks.map((speak, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex gap-4 p-5 bg-white rounded-lg border border-blue-100/50 hover:shadow-md transition-all"
              >
                <Presentation className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-neutral-900">
                    {speak.title}
                  </p>
                  <p className="text-sm text-neutral-600">{speak.org}</p>
                  <p className="text-xs text-neutral-500 mt-1">{speak.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Thesis & Project Supervision */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-white via-blue-50/10 to-slate-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h3
            {...fadeIn}
            className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-12"
          >
            Thesis & Project Supervision
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="p-6 md:p-8 bg-white rounded-lg border border-blue-100/50"
          >
            <p className="text-neutral-700 mb-6 text-center">
              More than fifty undergrad students completed their thesis/project
              for their partial fulfillment of the B.Sc. degree in Computer
              Science & Engineering, including:
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {thesisProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg hover:bg-blue-100/50 transition-colors group"
                >
                  <span className="text-blue-600 font-bold mt-0.5 shrink-0">
                    ◉
                  </span>
                  <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                    {project}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Academic Service & Leadership */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.h3
            {...fadeIn}
            className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-12"
          >
            Academic Service & Leadership
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {academicServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="text-center p-6 bg-white rounded-lg border border-blue-100/50 hover:shadow-md transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h4 className="font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-neutral-700">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
