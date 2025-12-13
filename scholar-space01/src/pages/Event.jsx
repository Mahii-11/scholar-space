/* eslint-disable no-unused-vars */
import { ArrowLeft } from "lucide-react";
import { Globe } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import eventImage from "../assets/image2.jpg";
function Event() {
  return (
    <div>
      <Header />
      <OngoingEventsSection />
      <UpcomingEvent />
    </div>
  );
}

function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white shadow-sm z-50"
    >
      <div className="container mx-auto px-4 md:px-6 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-black
                     hover:text-blue-600 transition-colors
                     font-medium text-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
      <div></div>
    </motion.header>
  );
}

export const OngoingEventsSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 mt-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-neutral-900">
            Ongoing <span className="text-blue-600">Events</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
          <p className="text-neutral-500 mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Current events featuring Dr. Sazzad Hossain's participation and
            leadership.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="flex-1 p-6 md:p-8">
            <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-3">
              <Calendar className="w-4 h-4" />
              August 11–17, 2025
            </div>

            <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">
              Quantum Computing for Everyone – International Summer School 2025
            </h3>

            <div className="flex items-center gap-2 text-neutral-500 text-sm mb-4">
              <MapPin className="w-4 h-4" />
              Samarkand, Uzbekistan
            </div>

            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-6">
              Discover the Future of Computing in the Historic Heart of the Silk
              Road! Join us for an international collaboration between
              University of Milan (Italy), Vellore Institute of Technology
              (India), and Samarkand State University (Uzbekistan) for an
              accessible and engaging one-week quantum computing summer school.
            </p>

            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all">
              View Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative w-full md:w-80 shrink-0">
            <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              Ongoing
            </span>

            <img
              src={eventImage}
              alt="Ongoing Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const UpcomingEvent = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-900">
            Events <span className="text-blue-600">Past</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
          <p className="text-neutral-500 mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Join Dr. Sazzad Hossain at these upcoming academic gatherings and
            professional events.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="flex-1 p-6 md:p-8">
            <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-3">
              <Calendar className="w-4 h-4" />
              August 11–17, 2025
            </div>

            <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">
              Quantum Computing for Everyone – International Summer School 2025
            </h3>

            <div className="flex items-center gap-2 text-neutral-500 text-sm mb-4">
              <MapPin className="w-4 h-4" />
              Samarkand, Uzbekistan
            </div>

            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-6">
              Discover the Future of Computing in the Historic Heart of the Silk
              Road! Join us for an international collaboration between
              University of Milan (Italy), Vellore Institute of Technology
              (India), and Samarkand State University (Uzbekistan) for an
              accessible and engaging one-week quantum computing summer school.
            </p>

            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all">
              View Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative w-full md:w-80 shrink-0">
            <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              Ongoing
            </span>

            <img
              src={eventImage}
              alt="Ongoing Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
