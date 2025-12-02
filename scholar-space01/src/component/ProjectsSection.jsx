/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const ProjectsSection = () => {
  const mainProjects = [
    {
      title: "AI-Driven Quantum Computing Research Center",
      desc: "Leading a major initiative at Samarkand State University to establish a new research center focused on integrating AI and quantum computing technologies. The center will develop next-generation quantum algorithms for optimization problems and explore AI-assisted quantum circuit design.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
      tags: [
        "Quantum Computing",
        "AI Integration",
        "Research Center",
        "Algorithm Design",
      ],
    },
    {
      title: "Explainable AI for Medical Imaging",
      desc: "Developed an Explainable AI-based system for detecting and classifying humerus fractures from X-ray images using various deep learning models including CNN, VGG16, and DenseNet variants, with enhanced interpretability through Saliency Maps and GRAD-CAM visualization techniques.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
      tags: [
        "Explainable AI",
        "Medical Imaging",
        "Deep Learning",
        "X-Ray Analysis",
      ],
    },
    {
      title: "Ensemble Learning for Alzheimer's Disease Classification",
      desc: "Pioneering research applying ensemble learning approaches for accurate classification of Alzheimer's disease using brain imaging data. The project combines multiple machine learning models to enhance diagnostic accuracy and provides interpretable results for clinical application.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
      tags: ["Ensemble Learning", "Brain Imaging", "Alzheimer's", "Medical AI"],
    },
    {
      title: "AI-Integrated Satellite Communication Systems",
      desc: "During tenure at Bangladesh Satellite Company Ltd. (BSCL), spearheaded national policies for AI-integrated satellite communication systems and contributed to strategic planning for Bangabandhu-1 and future satellite programs, incorporating advanced AI capabilities for network optimization.",
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=300&fit=crop",
      tags: [
        "Satellite Communications",
        "AI",
        "Policy Development",
        "Space Technology",
      ],
    },
  ];

  const grants = [
    {
      title: "AI-driven Cybersecurity & Big Data Analytics Research Center",
      period: "2024-Present",
      desc: "Establishing research infrastructure for studying next-generation cybersecurity solutions powered by AI and quantum computing",
      fundedBy: "Samarkand State University",
      role: "",
    },
    {
      title: "Cross-border Research Collaborations",
      period: "October 2024 - March 2025",
      desc: "Fostered international research partnerships in AI, Cybersecurity and Quantum Computing",
      fundedBy: "Synergy University",
      role: "",
    },
    {
      title: "A Holistic Mitigation Approach to Arsenic Contamination",
      period: "2013-2014",
      desc: "Using AI-powered analysis to develop effective mitigation strategies",
      fundedBy: "",
      role: "Principal Investigator",
    },
    {
      title: "Poor Utilization of Road Networks & Traffic Congestion Study",
      period: "2013-2014",
      desc: "Analyzing traffic patterns with machine learning to optimize road networks",
      fundedBy: "",
      role: "Co-Investigator",
    },
    {
      title: "CAD Tools for Quantum Computing",
      period: "2005-2009",
      desc: "Developing specialized computer-aided design tools for quantum circuits",
      fundedBy: "Portland State University/IIUC",
      role: "",
    },
    {
      title: "Model for Human-Robot Interaction",
      period: "2005-2009",
      desc: "Creating frameworks for intuitive human interactions with robotic systems",
      fundedBy: "Portland State University",
      role: "",
    },
  ];

  return (
    <>
      {/* Research & Initiatives Section */}
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

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              Research & Initiatives
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Leading groundbreaking research in quantum computing, AI, and
              cybersecurity, with contributions to academic research and
              technology policy development.
            </p>
          </motion.div>

          {/* Project Cards Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {mainProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Project Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-40 md:h-48 overflow-hidden bg-neutral-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="font-bold text-neutral-900 text-base md:text-lg mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-700 mb-4 line-clamp-3 flex-1">
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <motion.span
                          key={j}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: j * 0.05 }}
                          className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full hover:bg-blue-200 transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Major Research Grants & Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-white via-blue-50/10 to-slate-50 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              Major Research Grants & Projects
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Funded research initiatives spanning international collaborations
              and technological innovation
            </p>
          </motion.div>

          {/* Grants Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {grants.map((grant, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-linear-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                >
                  {/* Period Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                      {grant.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-neutral-900 text-base md:text-lg mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {grant.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-700 mb-4 flex-1">
                    {grant.desc}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 text-xs text-neutral-600">
                    {grant.fundedBy && (
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Funded by:</span>
                        <span>{grant.fundedBy}</span>
                      </p>
                    )}
                    {grant.role && (
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Role:</span>
                        <span>{grant.role}</span>
                      </p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
