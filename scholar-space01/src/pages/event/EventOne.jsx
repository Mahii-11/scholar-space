import {
  FiClock,
  FiMapPin,
  FiMic,
  FiGlobe,
  FiPhone,
  FiMail,
  FiDollarSign,
  FiExternalLink,
} from "react-icons/fi";
import { Link } from "react-router";
import { Globe } from "lucide-react";
import { FiCalendar, FiArrowUpRight } from "react-icons/fi";
import eventImage from "../../assets/image2.jpg";
import Header from "./eventcomponent/Header";
import InternationalCollaboration from "./eventcomponent/InternationalCollaboration";
import EventGallery from "./eventcomponent/EventGallery";
import EventAgenda from "./eventcomponent/EventAgenda";
import RegisterSection from "./eventcomponent/RegisterSection";
import { FooterSection } from "../../component/FooterSection";
import UniversityFacilities from "./eventcomponent/UniversityFacilities";

function EventOne() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between mt-16">
        <div className="flex items-center gap-2 text-md text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <Link to={"/event"}>
            <span className="text-gray-900 font-medium">Events</span>
          </Link>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     border border-gray-200 bg-white
                     text-sm font-medium text-gray-800
                     shadow-sm hover:shadow-md transition"
        >
          <Globe className="w-4 h-4" />
          English
        </button>
      </div>
      <HeroSection />
      <AboutEvent />
      <InternationalCollaboration />
      <EventGallery />
      <div className="text-center">
        <span className="inline-block px-4 py-2 bg-linear-to-r from-emerald-400 to-green-500 text-white rounded-full text-sm font-bold mb-4 shadow-lg shadow-green-400/30">
          ● Currently Ongoing
        </span>
      </div>
      <EventAgenda />
      <UniversityFacilities />
      <RegisterSection />
      <FooterSection />
    </div>
  );
}

function AboutEvent() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            About This Event
          </h2>

          <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
            <p>
              Join us for an extraordinary international collaboration bringing
              together the University of Milan (Italy), Vellore Institute of
              Technology (India), and Samarkand State University (Uzbekistan)
              for a comprehensive quantum computing summer school program. This
              unique partnership offers participants access to world-class
              expertise from three renowned institutions across different
              continents.
            </p>

            <p>
              Our goal is to provide an accessible introduction to quantum
              computing concepts and applications for beginners, students
              (undergraduate, postgraduate, PhD), and professionals curious
              about quantum computing. Whether you’re taking your first steps
              into quantum computing or looking to deepen your understanding,
              this program is designed to accommodate all levels of experience.
            </p>

            <p>
              The summer school will take place in the beautiful historic city
              of Samarkand, Uzbekistan from August 11–17, 2025. The program
              includes 5 intensive study days plus 2 free/cultural days for
              exploring the rich heritage of Samarkand – a UNESCO World Heritage
              site and ancient center of learning on the Silk Road. The format
              is offline/in-person with a registration fee of USD 150, and
              participants will receive a Certificate of Participation upon
              successful completion.
            </p>

            <p>
              You'll learn from a distinguished international faculty of
              professors and researchers specializing in Quantum Computing, AI,
              Cybersecurity, and related fields. Our expert instructors
              represent the collaborative strength of three leading
              institutions, bringing diverse perspectives and cutting-edge
              research to create an unparalleled learning experience.
            </p>

            <p>
              The program features state-of-the-art facilities at Samarkand
              State University, including modern IT centers with graphics and
              design rooms, robotics laboratories, and programming centers.
              Participants will have access to comprehensive university
              facilities, library resources, and comfortable accommodation
              options.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Event Information
          </h3>

          <div className="space-y-5 text-sm">
            <div className="flex gap-3 items-start">
              <FiClock className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Date & Time</p>
                <p className="text-gray-600">August 11–17, 2025</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <FiMapPin className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Venue</p>
                <p className="text-gray-600">
                  Samarkand State University, Uzbekistan
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <FiMic className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900 mb-1">Speakers</p>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    Prof. Dr. Md. Sazzad Hossain (Samarkand State University)
                  </li>
                  <li>Prof. Dr. Akmal Akhatov (Samarkand State University)</li>
                  <li>
                    Prof. Dr. Hakim Khushvakov (Samarkand State University)
                  </li>
                  <li>
                    Prof. Dr. Fayzullo Nazarov (Samarkand State University)
                  </li>
                  <li>Mr. Nodir Rabimov (Samarkand State University)</li>
                  <li>
                    Prof. Dr. Aswani Kumar Cherukuri (Vellore Institute of
                    Technology, India)
                  </li>
                  <li>
                    PhD Corli Sebastiano (Università degli Studi di Milano,
                    Italy)
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <FiGlobe className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900 mb-1">Key Topics</p>
                <ul className="space-y-1 text-gray-600">
                  <li>Quantum Computing Fundamentals</li>
                  <li>Qubits and Quantum Operations</li>
                  <li>Superposition and Probability</li>
                  <li>Quantum Security and Cryptography</li>
                  <li>Shor's Algorithm and Post-Quantum Cryptography</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                Contact Information
              </p>
              <div className="space-y-2 text-gray-600">
                <div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <FiPhone className="text-blue-600" />
                      <span>+998 90 446 99 77</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMail className="text-blue-600" />
                      <span>sazzad69@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 ml-6">
                      <FiMail className="text-blue-600" />
                      <span>irossu1420@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiDollarSign className="text-blue-600" />
                      <span>Registration Fee: USD 150</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">
                Partner Universities
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>University of Milan, Italy</li>
                <li>Vellore Institute of Technology, India</li>
                <li>Samarkand State University, Uzbekistan</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">
                University Facilities
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Modern IT Centers with Graphics and Design Rooms</li>
                <li>Robotics Laboratory</li>
                <li>Programming Centers</li>
                <li>University Library Branches</li>
                <li>Student Activity Rooms</li>
                <li>Comfortable Accommodation Options</li>
              </ul>
            </div>
            <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2">
              Visit Event Website
              <FiExternalLink />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <FiCalendar />
            <span>August 11–17, 2025</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Quantum Computing for Everyone – International Summer School 2025
          </h1>

          <div className="flex items-center gap-2 text-gray-600 mb-5">
            <FiMapPin />
            <span>Samarkand, Uzbekistan</span>
          </div>

          <p className="text-gray-600 max-w-xl leading-relaxed mb-6">
            Discover the Future of Computing in the Historic Heart of the Silk
            Road! Join us for an international collaboration between the
            University of Milan (Italy), Vellore Institute of Technology
            (India), and Samarkand State University (Uzbekistan) for an
            accessible and engaging one-week quantum computing summer school.
          </p>

          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2.5 rounded-lg font-medium">
            Register Now
            <FiArrowUpRight />
          </button>
        </div>

        <div className="relative">
          <img
            src={eventImage}
            alt="Quantum Summer School Speaker"
            className="w-full h-full  rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default EventOne;
