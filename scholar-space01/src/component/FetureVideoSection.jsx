/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const FeaturedVideosSection = () => {
  const videos = [
    {
      title: "TV Interview on Quantum Computing Research",
      desc: "Dr. Sazzad Hossain discusses quantum computing research and future technology implications",
      thumbnail:
        "https://images.unsplash.com/photo-1533461502717-83546f485c90?w=500&h=400&fit=crop",
      overlayColor: "from-teal-500 to-green-500",
      event: "Participate in Big Educational Event in Bangladesh",
      eventDesc: "National STEAM Olympiad",
    },
    {
      title: "Key Factors on the Quality of Higher Education",
      desc: "Dr. Sazzad Hossain presents insights on higher education quality factors and strategic improvements",
      thumbnail:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=400&fit=crop",
      overlayColor: "from-yellow-500 to-orange-500",
      event: "ডিজিটাল শিক্ষার ক্ষেত্রে পরামর্শ",
      eventDesc: "Professor Dr. Sazzad Hossain",
    },
    {
      title: "Impact of Modern Technologies on Society",
      desc: "Analysis of how emerging technologies are reshaping societal structures and economic systems",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
      overlayColor: "from-cyan-500 to-blue-500",
      event: "আধুনিক প্রযুক্তি সমাজে প্রভাব",
      eventDesc: "Professor Dr. Sazzad Hossain",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Featured <span className="text-blue-600">Videos</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Watch Dr. Sazzad's interviews, lectures, and discussions on quantum
            computing, artificial intelligence, and advanced technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 h-56 md:h-64 group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div
                  className={`absolute inset-0 bg-linear-to-br ${video.overlayColor} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}
                />

                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-xs font-semibold max-w-[70%]">
                  <div className="truncate">{video.event}</div>
                  <div className="text-xs opacity-90 truncate">
                    {video.eventDesc}
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:bg-white transition-colors"
                  >
                    <Play className="w-7 h-7 text-red-600 fill-red-600 ml-1" />
                  </motion.div>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 group-hover:bg-red-600 transition-colors">
                  <Play className="w-3 h-3 fill-white" />
                  Watch on YouTube
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              >
                <h3 className="font-bold text-neutral-900 text-base md:text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-neutral-600 line-clamp-2">
                  {video.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
          >
            View more videos on YouTube
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};
