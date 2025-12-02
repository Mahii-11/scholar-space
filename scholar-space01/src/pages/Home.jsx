/* eslint-disable no-unused-vars */
import { FloatingDock } from "../component/Floating-dock";
import { Globe, ArrowRight, ChevronDown } from "lucide-react";
import bannerImage from "../assets/hero_image.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  SummerSchoolSection,
  ProgramHighlightsSection,
  CtaSection,
} from "../component/HomeSection";
import AboutSection from "../component/AboutSection";
import { FeaturedVideosSection } from "../component/FetureVideoSection";
import { NewsSection } from "../component/NewSection";
import { CareerSection } from "../component/CareerSection";
import { ResearchersSection } from "../component/ResearchersSection";
import { ProjectsSection } from "../component/ProjectsSection";
import { SkillsSection } from "../component/SkillsSection";
import { TeachingSection } from "../component/TeachingSection";
import { PublicationSection } from "../component/PublicationSection";
import { BlogSection } from "../component/BlogSection";
import { GallerySection } from "../component/GallerySection";
import { ContactSection } from "../component/ContactSection";
import { FooterSection } from "../component/FooterSection";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 500], [0, 250]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full font-sans">
      <div
        className="relative w-full min-h-screen text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center blur-xs z-0 opacity-35"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        />

        <div className="absolute inset-0 bg-linear-to-br from-black/50 via-black/40 to-black/50 z-10" />

        <div className="absolute top-10 right-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-400/3 rounded-full blur-3xl z-0" />

        <div className="relative z-20 container mx-auto px-4 pt-4 md:pt-6 flex flex-col text-white justify-between min-h-screen">
          <div className="flex justify-between items-center w-full shrink-0">
            <div className="flex items-center gap-2">
              <div className="font-bold text-lg md:text-xl flex items-center">
                <span className="text-red-600 text-2xl md:text-3xl mr-1 font-serif">
                  S
                </span>
                <span className="border-l-2 border-white pl-2 text-sm md:text-base">
                  Dr. Sazzad
                </span>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-colors text-xs md:text-sm font-medium border border-white/10">
              <Globe className="w-3 h-3 md:w-4 md:h-4" />
              English
            </button>
          </div>

          <div className="flex flex-col items-center text-center max-w-5xl mx-auto flex-1 justify-center py-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 md:mb-6 bg-blue-900/40 backdrop-blur-sm border border-blue-500/30 px-3 py-1 md:px-6 md:py-2 rounded-full max-w-full mx-4 relative z-30"
            >
              <span className="text-blue-200 font-medium text-xs md:text-sm">
                Professor Dr. Sazzad Hossain | Samarkand State University
              </span>
            </motion.div>

            <motion.div
              style={{ y: titleY, opacity: titleOpacity }}
              className="relative z-10 mb-4 md:mb-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Advancing Research in <br className="hidden md:block" />
                <span className="text-blue-400 block md:inline mt-1 md:mt-0">
                  Quantum Computing & AI
                </span>
              </h1>
            </motion.div>

            <div className="relative z-20 flex flex-col items-center w-full">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm md:text-base lg:text-lg text-white/90 max-w-3xl leading-relaxed mb-6 md:mb-8 font-medium px-2 md:px-0 drop-shadow-md"
              >
                Professor Dr. Sazzad Hossain is a distinguished academic,
                researcher, and ICT expert with over 30 years of experience in
                higher education and technology consulting. As a leading
                authority in Quantum Computing, Artificial Intelligence, IoT,
                and Cybersecurity, he combines cutting-edge research with
                practical applications to solve complex technological
                challenges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col xs:flex-row items-center justify-center gap-3 md:gap-4 w-full"
              >
                <button
                  data-testid="button-view-research"
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/40 group whitespace-nowrap text-sm md:text-base border border-blue-400/30"
                >
                  View Research
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  data-testid="button-publications"
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-white/15 hover:bg-white/25 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-white/10 whitespace-nowrap text-sm md:text-base border border-white/20 backdrop-blur-sm"
                >
                  Publications & Works
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-16 flex flex-col items-center"
              >
                <span className="text-white/60 text-xs md:text-sm font-medium mb-2">
                  Scroll Down
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronDown className="w-5 h-5 text-white/60" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative bg-white w-full rounded-t-3xl shadow-[0_-50px_100px_rgba(0,0,0,0.3)] pb-32 -mt-20 md:-mt-12 z-40"
      >
      </motion.div>  */}

      <div>
        <div id="hero">
          <SummerSchoolSection />
          <ProgramHighlightsSection />
          <CtaSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="videos">
          <FeaturedVideosSection />
        </div>
        <div id="news">
          <NewsSection />
        </div>
        <div id="career">
          <CareerSection />
        </div>
        <div id="researchers">
          <ResearchersSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="teaching">
          <TeachingSection />
        </div>

        <div id="publications">
          <PublicationSection />
        </div>
        <div id="resources">
          <BlogSection />
        </div>

        <div id="gallery">
          <GallerySection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <FooterSection />
      </div>

      <div className="fixed bottom-6 md:bottom-8 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <FloatingDock />
        </div>
      </div>
    </div>
  );
}
