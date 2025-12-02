/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Building2, GraduationCap, Award } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const CareerSection = () => {
  const careerItems = [
    {
      icon: Building2,
      title: "Professor",
      date: "2024-Present",
      organization: "Samarkand State University, Uzbekistan",
      department:
        "Faculty of Artificial Intelligence and Computer Technologies",
      details: [
        "Leading AI & Quantum Computing research initiatives",
        "Establishing AI-driven Cybersecurity & Big Data Analytics research centers",
      ],
      highlight: true,
    },
    {
      icon: Building2,
      title: "Department Head",
      date: "October 2024-March 2025",
      organization: "Synergy University, Moscow",
      department: "Department of International Education Development",
      details: [
        "Oversaw international education programs and partnerships",
        "Fostered cross-border research collaborations in AI and Quantum Computing",
      ],
    },
    {
      icon: Building2,
      title: "Member & Director",
      date: "2019-2024",
      organization:
        "University Grants Commission & Bangladesh Satellite Company Ltd.",
      department: "National Education & Technology Policy",
      details: [
        "Shaped national education and technology policies",
        "Drove policy formation for Bangladesh's first satellite, Bangabandhu-1",
      ],
    },
    {
      icon: GraduationCap,
      title: "Ph.D. in Electrical & Computer Engineering",
      date: "2009",
      organization: "Portland State University, USA",
      department: "Advisor: Professor Dr. Marek A. Perkowski",
      details: [
        'Dissertation: "Synthesis and Minimization of Quantum and Reversible Circuits"',
      ],
    },
    {
      icon: GraduationCap,
      title: "M.Sc. in Electrical & Computer Engineering",
      date: "2002",
      organization: "Portland State University, USA",
      department: "Advisor: Professor Dr. Marek A. Perkowski",
      details: [],
    },
    {
      icon: GraduationCap,
      title: "B.Sc. in Computer Engineering",
      date: "1994",
      organization: "Moscow Technical University, Russia",
      department: "Specialized in Computer Architecture",
      details: [],
    },
  ];

  const recognitions = [
    "National Digital Transformation Award - For contributions to AI and Quantum Computing",
    "PhD Fellowship - International Islamic University Chittagong (2005-2008)",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Professional Journey
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            A chronological overview of Dr. Sazzad Hossain's academic and
            professional milestones.
          </p>
        </motion.div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          {careerItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`flex gap-5 md:gap-6 ${
                  item.highlight
                    ? "p-5 md:p-6 rounded-2xl bg-blue-50 border border-blue-100/50"
                    : ""
                }`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center shrink-0 shadow-md"
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  {/* Title and Date */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-neutral-900">
                      {item.title}
                    </h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100/50 px-3 py-1 rounded-full w-fit">
                      {item.date}
                    </span>
                  </div>

                  {/* Organization */}
                  <p className="text-blue-600 font-semibold mb-1">
                    {item.organization}
                  </p>

                  {/* Department */}
                  <p className="text-sm text-neutral-600 mb-3">
                    {item.department}
                  </p>

                  {/* Details */}
                  {item.details.length > 0 && (
                    <ul className="space-y-2">
                      {item.details.map((detail, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-neutral-700"
                        >
                          <span className="text-blue-600 font-bold mt-0.5">
                            •
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 md:mt-16 p-6 md:p-8 bg-linear-to-r from-blue-50 to-slate-50 rounded-2xl border border-blue-100/50"
        >
          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center shrink-0 shadow-md"
            >
              <Award className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">
                Recognition
              </h3>
              <ul className="space-y-3">
                {recognitions.map((recognition, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-3 text-neutral-700"
                  >
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>{recognition}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
