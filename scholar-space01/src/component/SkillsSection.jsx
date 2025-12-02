/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Zap,
  Brain,
  Shield,
  Users,
  Database,
  Cpu,
  BookOpen,
  Award,
  Building2,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const SkillsSection = () => {
  const researchInterests = [
    {
      icon: Zap,
      title: "Quantum Computing",
      desc: "Quantum Algorithms, Fault-Tolerant Computing, Quantum Cryptography, and Quantum Circuit Optimization",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      desc: "Deep Learning, Natural Language Processing, AI Ethics, and Predictive Analytics",
    },
    {
      icon: Shield,
      title: "Cybersecurity & IoT",
      desc: "AI-driven Security, Blockchain Security, Smart Cities, and IoT Network Protection",
    },
    {
      icon: Users,
      title: "Human-Robot Interaction",
      desc: "AI-Enabled Robotics, Cognitive Computing, and Assistive Technologies",
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      desc: "AI-driven Decision Systems, Industry 4.0 Solutions, and Data Visualization",
    },
    {
      icon: Cpu,
      title: "Satellite Communication Systems",
      desc: "AI-integrated satellite communication, Space technology policies, and Network optimization",
    },
  ];

  const technicalSkills = [
    {
      category: "Programming Languages",
      icon: Cpu,
      skills: [
        "C",
        "C++",
        "Java",
        "Python",
        "LISP",
        "VHDL",
        "Verilog",
        "SQL",
        "PL/SQL",
        "FORTRAN 77",
      ],
    },
    {
      category: "AI & ML Frameworks",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "OpenCV"],
    },
    {
      category: "Database Systems",
      icon: Database,
      skills: ["FoxPro", "Oracle 8", "MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Engineering & CAD Applications",
      icon: Cpu,
      skills: ["MATLAB", "CADENCE", "PSPICE", "Mentor Graphics", "ArcGIS"],
    },
    {
      category: "Languages",
      icon: BookOpen,
      skills: ["English", "Bengali", "Russian"],
    },
  ];

  const editorialRoles = [
    {
      title:
        "Editor: Proceedings of The Fourth Industrial Revolution and Beyond",
      subtitle: "Springer Nature (SCOPUS Indexed)",
    },
    {
      title: "Editor: ULAB Journal of Science and Engineering",
      subtitle: "Bangladesh (ISSN 2079-4398)",
    },
    {
      title: "Advisory Committee Member: 1st International Conference on AICT",
      subtitle: "ICAICT 2018",
    },
    {
      title:
        "Organizing Chair: International Conference of Fourth Industrial Revolution",
      subtitle: "2021 - Dhaka, Bangladesh",
    },
  ];

  const reviewerRoles = [
    {
      title: "Institution of Engineering and Technology Journals",
    },
    {
      title: "International Journal of Electronics",
    },
    {
      title:
        "International Journal of Computers & Mathematics with Applications",
      subtitle: "ISSN: 0898-1221",
    },
    {
      title: "International Journal of Mathematical and Computer Modeling",
      subtitle: "ISSN: 0885-7177",
    },
  ];

  const memberships = [
    { title: "Life Fellow, Institution of Engineers Bangladesh", icon: Award },
    { title: "Life Fellow, American Alumni Association", icon: Award },
    { title: "Life Member, Russian Alumni Association", icon: Award },
    { title: "Life Member, CUET Ex-Student Association", icon: Award },
    { title: "Senior Member, IEEE (USA), ACM, and IEICE (Japan)", icon: Award },
    {
      title: "Board Member, Bangladesh AI Research Society (BAIRS)",
      icon: Award,
    },
  ];

  const leadershipRoles = [
    {
      title:
        "Chairman and Founder, Alternative and Sustainable Energy Foundation Bangladesh",
      icon: Building2,
    },
    {
      title:
        "AABL Leadership Award for Promoting Higher Education in Bangladesh",
      icon: Award,
    },
    {
      title:
        "Central Council Member, Institution of Engineers Bangladesh (IEB), 2015-2017",
      icon: Building2,
    },
    {
      title:
        "Executive Member, Bangabandhu Prokausholee Porihod (BPP), 2013-2016",
      icon: Building2,
    },
    {
      title:
        "Science and Technology Secretary, CUET Ex-Student Association, 2011-2012",
      icon: Building2,
    },
    { title: "Member, Energy Action Coalition, USA", icon: Building2 },
  ];

  return (
    <>
      {/* Research Interests & Expertise Section */}
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
              Research{" "}
              <span className="text-blue-600">Interests & Expertise</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Dr. Sazzad Hossain's multidisciplinary expertise spans
              cutting-edge technological domains
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {researchInterests.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-xl p-6 md:p-8 text-center shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                    </motion.div>
                    <h3 className="font-bold text-neutral-900 text-lg mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-700">{item.desc}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Technical Skills Section */}
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
          <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              Technical <span className="text-blue-600">Skills</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {technicalSkills.map((skillGroup, i) => {
              const Icon = skillGroup.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-neutral-900">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.skills.map((skill, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: j * 0.05 }}
                        className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Editorial & Reviewer Roles Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Editorial & Advisory Roles */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900">
                Editorial &{" "}
                <span className="text-blue-600">Advisory Roles</span>
              </h3>
              <div className="space-y-4">
                {editorialRoles.map((role, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-3"
                  >
                    <BookOpen className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {role.title}
                      </p>
                      {role.subtitle && (
                        <p className="text-sm text-neutral-600">
                          {role.subtitle}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reviewer Roles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900">
                Reviewer <span className="text-blue-600">Roles</span>
              </h3>
              <div className="space-y-4">
                {reviewerRoles.map((role, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-3"
                  >
                    <BookOpen className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {role.title}
                      </p>
                      {role.subtitle && (
                        <p className="text-sm text-neutral-600">
                          {role.subtitle}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Professional Memberships & Leadership Roles Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Professional Memberships */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900">
                Professional <span className="text-blue-600">Memberships</span>
              </h3>
              <div className="space-y-4">
                {memberships.map((membership, i) => {
                  const MemberIcon = membership.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex gap-3"
                    >
                      <MemberIcon className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                      <p className="font-semibold text-neutral-900">
                        {membership.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Leadership Roles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900">
                Leadership <span className="text-blue-600">Roles</span>
              </h3>
              <div className="space-y-4">
                {leadershipRoles.map((role, i) => {
                  const LeadIcon = role.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex gap-3"
                    >
                      <LeadIcon className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                      <p className="font-semibold text-neutral-900">
                        {role.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
