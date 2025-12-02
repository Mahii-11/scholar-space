/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const PublicationSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const publicationTabs = [
    "Journal Articles",
    "Conference Papers",
    "Workshop Papers",
    "Technical Reports",
    "Term Papers",
    "Books & Edited Volumes",
    "Doctoral Research",
  ];

  const publications = [
    {
      type: "Journal Articles",
      items: [
        {
          id: 1,
          title:
            "An Integrated Neural Network and SEIR Model to Predict COVID-19",
          authors: "S. N. Zisad, M.S. Hossain, M.S. Hossain and K. Andersson",
          year: 2021,
          category: "Journal Article",
          journal: "Algorithms, 14(3):94",
          tags: ["Web of Science", "Scopus and DBLP Indexed"],
        },
        {
          id: 2,
          title:
            "A Robust Architecture for CR-VANET in Multi-agent Based Intelligent Traffic Management System",
          authors: "N. Mansoor, S.M.N. Uddin, S. Hossain",
          year: 2016,
          category: "Journal Article",
          journal: "Journal Teknologi",
          tags: ["SCOPUS Indexed"],
        },
        {
          id: 3,
          title:
            "Search for Universal Ternary Quantum Gate Sets with Exact Minimum Costs",
          authors: "N. Giesecke, S. Hossain, D. H. Kim, M. Perkowski",
          year: 2009,
          category: "Journal Article",
          journal:
            "Embedded Software Design (Journal of System Architecture), The EUROMICRO Journal",
        },
        {
          id: 4,
          title:
            "Logical Reversibility Based on Reversible Computing Technology",
          authors: "S. Hossain, M. Islam, R. Bashar and Alamgir",
          year: 2004,
          category: "Journal Article",
          journal:
            "Asian Journal of Information Technology, Volume 3 Number 4, pp. 241-244",
          tags: ["ISSN: 1638-8831"],
        },
        {
          id: 5,
          title:
            "Bangla Spell Checker Considering Relative Disposition of Characters and Phonetic Similarity",
          authors: "M.N. Seddiqul, S. Hossain, and M.R. Bashar",
          year: 2004,
          category: "Journal Article",
          journal:
            "Asian Journal of Information Technology, Volume 3 Number 4, pp. 241-244",
          tags: ["ISSN: 1638-8831"],
        },
        {
          id: 6,
          title:
            "An Object-oriented Approach to Support Faster Retrieve and Manipulation of Spatial Data",
          authors: "Hossain, M.S., Alamgir, M. and Hossain, M.S.",
          year: 2004,
          category: "Journal Article",
          journal:
            "Asian Journal of Information Technology, Vol. 3, No.7 July 2004, pp. 492-497",
          tags: ["ISSN: 1682-3915"],
        },
      ],
    },
    {
      type: "Conference Papers",
      items: [
        {
          id: 101,
          title: "Quantum Computing Applications in Cybersecurity",
          authors: "S. Hossain, et al.",
          year: 2023,
          category: "Conference Paper",
          journal: "International Conference on Computing and Information",
          tags: ["Indexed"],
        },
      ],
    },
    {
      type: "Workshop Papers",
      items: [
        {
          id: 201,
          title: "AI and Machine Learning Workshop Proceedings",
          authors: "S. Hossain, Team",
          year: 2022,
          category: "Workshop Paper",
          journal: "International Workshop on AI",
        },
      ],
    },
  ];

  const getPublicationsByTab = () => {
    const tab = publicationTabs[activeTab];
    const pubData = publications.find((p) => p.type === tab);
    return pubData?.items || [];
  };

  return (
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
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Research <span className="text-blue-600">Publications</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Selected academic publications by Dr. Hossain spanning Quantum
            Computing, Artificial Intelligence, Cybersecurity, and related
            fields.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {publicationTabs.map((tab, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(i)}
              className={`px-3 md:px-5 py-2 font-semibold rounded-full transition-all duration-300 text-sm md:text-base ${
                activeTab === i
                  ? "bg-neutral-900 text-white shadow-lg"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:border-blue-300"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {getPublicationsByTab().map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col p-6 bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-all group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 shrink-0"
              >
                <FileText className="w-6 h-6 text-blue-600" />
              </motion.div>

              {/* Title */}
              <h3 className="font-bold text-neutral-900 mb-3 text-lg leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
                {pub.title}
              </h3>

              {/* Authors */}
              <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                {pub.authors}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                <span className="flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  {pub.year}
                </span>
                <span>•</span>
                <span>{pub.category}</span>
              </div>

              {/* Journal/Venue */}
              <p className="text-sm text-neutral-700 mb-4 grow">
                {pub.journal}
              </p>

              {/* Tags */}
              {pub.tags && pub.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* View Publication Link */}
              <motion.a
                href="/publications"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm mt-auto pt-4 border-t border-neutral-100"
              >
                View Publication
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Publications Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.a
            href="/publications"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold rounded-full transition-all shadow-sm"
          >
            View All Publications
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};
