// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Building2, ChevronDown } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const ResearchersSection = () => {
  const researchers = [
    {
      name: "Mr. Rajib Ghose",
      title: "Lieutenant Commander",
      organization: "Bangladesh Navy",
      email: "ghs_rajib@yahoo.com",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      bgColor: "from-blue-500 to-blue-600",
      specialties: [
        "Advanced Image Processing",
        "Formal Verification",
        "+5 more",
      ],
    },
    {
      name: "Mr. Abhijit Pathak",
      title: "Assistant Professor",
      organization: "Department of...",
      email: "a.pathak.cse@su.ed...",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      bgColor: "from-neutral-100 to-neutral-200",
      specialties: ["Artificial Intelligence", "Machine Learning", "+3 more"],
    },
    {
      name: "Prof. Mohammad Shahadat Hossain",
      title: "Professor of Computer Science and Engineering",
      organization: "University of...",
      email: "hossain_ms@cu.ac.bd",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      bgColor: "from-yellow-500 to-amber-600",
      specialties: ["Artificial Intelligence", "Expert Systems", "+3 more"],
    },
    {
      name: "Prof. Karl Andersson",
      title: "Professor and Head of Subject, Dean",
      organization: "Luleå University of...",
      email: "kari.andersson@ltu.se",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      bgColor: "from-neutral-600 to-neutral-700",
      specialties: ["Cyber Security", "5G/6G Networks", "+3 more"],
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            International Research{" "}
            <span className="text-blue-600">Collaboration Team</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Distinguished researchers and academics collaborating with Dr.
            Sazzad Hossain on groundbreaking projects in Quantum Computing, AI,
            and advanced technologies.
          </p>
        </motion.div>

        {/* Researchers Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {researchers.map((researcher, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Researcher Card */}
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                {/* Profile Image */}
                <div
                  className={`relative h-56 md:h-64 bg-linear-to-br ${researcher.bgColor} overflow-hidden`}
                >
                  <img
                    src={researcher.image}
                    alt={researcher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Name and Title */}
                  <h3 className="font-bold text-neutral-900 text-base mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {researcher.name}
                  </h3>
                  <p className="text-sm text-neutral-700 mb-2 line-clamp-2">
                    {researcher.title}
                  </p>

                  {/* Organization */}
                  <div className="flex items-start gap-2 mb-3 pb-3 border-b border-neutral-200">
                    <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-neutral-600 line-clamp-2">
                      {researcher.organization}
                    </p>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-2 mb-4 pb-4 border-b border-neutral-200">
                    <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-neutral-600 line-clamp-2">
                      {researcher.email}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-neutral-700 mb-2">
                      Specialties
                    </p>
                    <ul className="space-y-1.5">
                      {researcher.specialties.map((specialty, j) => (
                        <li
                          key={j}
                          className="text-xs text-neutral-600 flex items-start gap-2"
                        >
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
          >
            Show More Collaborators
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};
