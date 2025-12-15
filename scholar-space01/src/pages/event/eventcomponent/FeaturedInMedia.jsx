/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
//import { Link } from "react-router";
import { Zap } from "lucide-react";
import { FaBookOpen, FaDownload } from "react-icons/fa";

const FeaturedInMedia = () => {
  return (
    <>
      <section className="w-full bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 relative">
            <h2 className="text-4xl font-extrabold">
              <span className="text-black">Featured in </span>
              <span className="text-[#4f46e5]">Media</span>
            </h2>
            <div className="w-32 h-1 bg-[#4f46e5] mx-auto mt-4"></div>
          </div>
          <p className="text-center text-lg text-[#64748b] mb-16">
            Professor Dr. Sazzad Hossain featured in Uzbekistan National
            Magazine
          </p>

          <div className="max-w-6xl mx-auto border border-[#c7d2fe] rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#eef2ff] flex flex-col items-center justify-center text-center px-10 py-16">
                <div className="w-32 h-32 rounded-full bg-[#e0e7ff] flex items-center justify-center mb-6">
                  <FaBookOpen className="text-[#4f46e5] text-4xl" />
                </div>

                <h3 className="text-2xl font-bold text-black mb-2">
                  National Magazine Feature
                </h3>

                <p className="text-[#64748b] text-lg">
                  Uzbekistan National Magazine
                </p>
              </div>

              <div className="bg-white px-10 py-16">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Professor Dr. Sazzad Hossain
                </h3>

                <p className="text-[#64748b] text-lg leading-relaxed mb-8">
                  Read the exclusive feature article about Professor Dr. Sazzad
                  Hossain's contributions to quantum computing, artificial
                  intelligence, and his role in organizing TEHI 2025 in the
                  Uzbekistan National Magazine.
                </p>

                <button className="inline-flex items-center gap-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-lg font-semibold px-8 py-4 rounded-xl transition-colors duration-300">
                  <FaDownload className="text-xl" />
                  Download Magazine (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReadytoJoin />
    </>
  );
};

const ReadytoJoin = () => {
  return (
    <motion.div
      initial={{ scale: 0.97, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-32 mb-16 rounded-2xl p-8 md:p-10 text-center text-white relative overflow-hidden shadow-xl"
      style={{
        background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <Zap className="w-10 h-10 mb-4" />
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to Join TEHI 2025?
        </h3>
        <p className="max-w-xl mx-auto text-lg opacity-90 mb-6">
          Don't miss this opportunity to present your research, network with
          global experts, and contribute to the advancement of electronics and
          health informatics.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-2.5 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-semibold flex items-center justify-center gap-2 transition cursor-pointer">
            Submit Your Paper
          </button>
          <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedInMedia;
