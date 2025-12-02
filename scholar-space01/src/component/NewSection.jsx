/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const NewsSection = () => {
  const news = [
    {
      date: "7/15/2025",
      id: "40",
      title:
        "QuEra Demonstrates Magic State Distillation for Fault-Tolerant Quantum Computing",
      desc: "QuEra has successfully demonstrated magic state distillation, a critical step towards building fault-tolerant quantum computers. [1]",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "41",
      title:
        "Researchers Demonstrate Quantum Algorithm for Protein Structure Prediction on Quantum Hardware",
      desc: "A new quantum algorithm for protein structure prediction has been successfully demonstrated on quantum hardware, a breakthrough with significant implications fo...",
      image:
        "https://images.unsplash.com/photo-1535431066429-40cf4bab1188?w=500&h=300&fit=crop",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "42",
      title:
        "BDx Launches Quantum AI Testbed to Accelerate Southeast Asia Adoption",
      desc: "BDx has launched a Quantum AI Testbed in Southeast Asia to provide businesses with access to quantum computing resources and accelerate the adoption of this technolog...",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      link: "/news",
    },
  ];

  const featured = {
    title: "National STEAM Olympiad Initiative",
    desc: "Dr. Sazzad Hossain has been instrumental in promoting STEAM (Science, Technology, Engineering, Arts, and Mathematics) education in Bangladesh through the National STEAM Olympiad. This initiative aims to develop critical thinking, problem-solving abilities, and innovation skills among students, preparing them for the challenges of the Fourth Industrial Revolution.",
    collab: "In collaboration with Bangladesh Innovation Forum (BIF)",
    link: "/news",
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Latest <span className="text-blue-600">News</span> & Achievements
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with Dr. Sazzad Hossain's recent activities,
            achievements, and contributions to education and technology.
          </p>
        </motion.div>

        {/* News Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Date */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-neutral-500">
                    📅 {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 line-clamp-3 mb-4 flex-1">
                  {item.desc}
                </p>

                {/* ID and Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <span className="text-xs text-neutral-500">
                    ID: {item.id}
                  </span>
                  <motion.a
                    href={item.link}
                    className="text-blue-600 font-semibold text-sm flex items-center gap-1 group/link hover:text-blue-700"
                    whileHover={{ x: 3 }}
                  >
                    Read More
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-linear-to-r from-blue-50 to-slate-50 rounded-2xl p-8 md:p-10 border border-blue-100/50"
        >
          <div className="flex items-start gap-6">
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center shrink-0 shadow-lg"
            >
              <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                {featured.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {featured.desc}
              </p>
              <p className="text-sm text-neutral-600 mb-5 flex items-center gap-2">
                <span className="text-blue-600">👥</span>
                {featured.collab}
              </p>
              <motion.a
                href={featured.link}
                whileHover={{ x: 5 }}
                className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Learn More
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
