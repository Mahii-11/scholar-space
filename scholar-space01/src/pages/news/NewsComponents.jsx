/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const NewsComponents = () => {
  const news = [
    {
      date: "7/15/2025",
      id: "40",
      title:
        "QuEra Demonstrates Magic State Distillation for Fault-Tolerant Quantum Computing",
      desc: "QuEra has successfully demonstrated magic state distillation, a critical step towards building fault-tolerant quantum computers. [1]",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "41",
      title:
        "Researchers Demonstrate Quantum Algorithm for Protein Structure Prediction on Quantum Hardware",
      desc: "A new quantum algorithm for protein structure prediction has been successfully demonstrated on quantum hardware, a breakthrough with significant implications fo...",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "42",
      title:
        "BDx Launches Quantum AI Testbed to Accelerate Southeast Asia Adoption",
      desc: "BDx has launched a Quantum AI Testbed in Southeast Asia to provide businesses with access to quantum computing resources and accelerate the adoption of this technolog...",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },

    {
      date: "7/15/2025",
      id: "40",
      title:
        "QuEra Demonstrates Magic State Distillation for Fault-Tolerant Quantum Computing",
      desc: "QuEra has successfully demonstrated magic state distillation, a critical step towards building fault-tolerant quantum computers. [1]",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "41",
      title:
        "Researchers Demonstrate Quantum Algorithm for Protein Structure Prediction on Quantum Hardware",
      desc: "A new quantum algorithm for protein structure prediction has been successfully demonstrated on quantum hardware, a breakthrough with significant implications fo...",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "42",
      title:
        "BDx Launches Quantum AI Testbed to Accelerate Southeast Asia Adoption",
      desc: "BDx has launched a Quantum AI Testbed in Southeast Asia to provide businesses with access to quantum computing resources and accelerate the adoption of this technolog...",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },

    {
      date: "7/15/2025",
      id: "40",
      title:
        "QuEra Demonstrates Magic State Distillation for Fault-Tolerant Quantum Computing",
      desc: "QuEra has successfully demonstrated magic state distillation, a critical step towards building fault-tolerant quantum computers. [1]",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "41",
      title:
        "Researchers Demonstrate Quantum Algorithm for Protein Structure Prediction on Quantum Hardware",
      desc: "A new quantum algorithm for protein structure prediction has been successfully demonstrated on quantum hardware, a breakthrough with significant implications fo...",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "42",
      title:
        "BDx Launches Quantum AI Testbed to Accelerate Southeast Asia Adoption",
      desc: "BDx has launched a Quantum AI Testbed in Southeast Asia to provide businesses with access to quantum computing resources and accelerate the adoption of this technolog...",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "40",
      title:
        "QuEra Demonstrates Magic State Distillation for Fault-Tolerant Quantum Computing",
      desc: "QuEra has successfully demonstrated magic state distillation, a critical step towards building fault-tolerant quantum computers. [1]",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "41",
      title:
        "Researchers Demonstrate Quantum Algorithm for Protein Structure Prediction on Quantum Hardware",
      desc: "A new quantum algorithm for protein structure prediction has been successfully demonstrated on quantum hardware, a breakthrough with significant implications fo...",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "42",
      title:
        "BDx Launches Quantum AI Testbed to Accelerate Southeast Asia Adoption",
      desc: "BDx has launched a Quantum AI Testbed in Southeast Asia to provide businesses with access to quantum computing resources and accelerate the adoption of this technolog...",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "40",
      title:
        "QuEra Demonstrates Magic State Distillation for Fault-Tolerant Quantum Computing",
      desc: "QuEra has successfully demonstrated magic state distillation, a critical step towards building fault-tolerant quantum computers. [1]",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "41",
      title:
        "Researchers Demonstrate Quantum Algorithm for Protein Structure Prediction on Quantum Hardware",
      desc: "A new quantum algorithm for protein structure prediction has been successfully demonstrated on quantum hardware, a breakthrough with significant implications fo...",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
    {
      date: "7/15/2025",
      id: "42",
      title:
        "BDx Launches Quantum AI Testbed to Accelerate Southeast Asia Adoption",
      desc: "BDx has launched a Quantum AI Testbed in Southeast Asia to provide businesses with access to quantum computing resources and accelerate the adoption of this technolog...",
      image: "/scholar-images/image6.jpg",
      link: "/news",
    },
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Latest <span className="text-blue-600">News</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, achievements, and collaborations
            of Professor Dr. Sazzad Hossain.
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
      </div>
    </motion.section>
  );
};
