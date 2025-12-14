import { Calendar, MapPin, ArrowUpRight, Globe } from "lucide-react";
import { Link } from "react-router";
import Header from "./eventcomponent/Header";
import {
  FiClock,
  FiMapPin,
  FiMic,
  FiGlobe,
  FiExternalLink,
} from "react-icons/fi";
import { FooterSection } from "../../component/FooterSection";

const agendaData = [
  {
    dayTitle: "Day 1 (Mon, August 11)",
    subtitle: "Foundations of Quantum Computing",
    sessions: [
      {
        time: "10:00 - 12:00",
        title: "Introduction to Quantum Computing – Theory & Concepts",
        description:
          "Why Quantum? Classical vs. Quantum Computing, Superposition & Entanglement",
      },
      {
        time: "12:00 - 14:00",
        title: "Lunch & Networking",
        description:
          "Networking session with international faculty and participants",
      },
      {
        time: "14:00 - 16:00",
        title:
          "Quantum Hardware and Historical Context – Hands-on & Discussions",
        description:
          "Quantum Hardware, Historical Perspective of Quantum Operations, Encryption and Quantum Computing",
      },
      {
        time: "16:00 - 17:00",
        title: "Q&A and Office Hours",
        description:
          "Interactive session with faculty for questions and clarifications",
      },
    ],
  },
  {
    dayTitle: "Day 2 (Tue, August 12)",
    subtitle: "Qubits and Quantum Operations",
    sessions: [
      {
        time: "10:00 - 12:00",
        title: "Qubits and Quantum Operations – Theory & Concepts",
        description:
          "Basics of Qubits, Bra-ket Notation, Quantum State Representation",
      },
      {
        time: "12:00 - 14:00",
        title: "Lunch & Networking",
        description: "Collaborative learning and discussion time",
      },
      {
        time: "14:00 - 16:00",
        title:
          "Quantum Gates and Single Qubit Operation – Hands-on & Discussions",
        description:
          "Hadamard Gate, Single Qubit Matrix Multiplication, Practical Implementations",
      },
      {
        time: "16:00 - 17:00",
        title: "Q&A and Free Study Time",
        description: "Individual study time and faculty consultation",
      },
    ],
  },
];

function EventThree() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between mt-16">
        <div className="flex items-center gap-2 text-md text-gray-500">
          <Link to={"/"} className="hover:text-blue-600 transition">
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
      <ClimateForumHero />
      <AboutEvent />
      <AgendaItem />
      <FooterSection />
    </div>
  );
}

function ClimateForumHero() {
  return (
    <section className="bg-[#eef3fb] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-medium mb-4">
              <Calendar size={18} />
              <span>April 4–5, 2025</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Samarkand International <br /> Climate Forum
            </h1>

            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <MapPin size={18} />
              <span>Samarkand, Uzbekistan</span>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-xl mb-10">
              The inaugural Samarkand International Climate Forum brings
              together distinguished leaders from Central Asia, EU
              representatives, and key UN officials to tackle global climate
              challenges under the theme{" "}
              <span className="font-medium">
                “Central Asia Faces Global Climate Challenges: Uniting for
                Common Prosperity.”
              </span>
            </p>

            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-medium shadow-md">
              Register Now
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="bg-[#f3f7ff] rounded-2xl p-10 flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-green-500 via-red-500 to-blue-500" />

              <div className="border-l-2 border-dashed border-blue-300 pl-6">
                <h2 className="text-3xl font-extrabold text-green-700 leading-tight">
                  SAMARKAND <br /> CLIMATE FORUM
                </h2>
                <p className="text-xl font-semibold text-green-700 mt-2">
                  4–5 APRIL 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutEvent() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About This Event
          </h2>

          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
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

function AgendaItem() {
  return (
    <section className="w-full bg-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {agendaData.map((day, idx) => (
            <div
              key={idx}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
                {day.dayTitle}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                {day.subtitle}
              </p>

              <div className="space-y-6">
                {day.sessions.map((session, sIdx) => (
                  <div key={sIdx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-blue-500 mt-1" />
                      {sIdx !== day.sessions.length - 1 && (
                        <div className="flex-1 w-px bg-blue-200 mt-1" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-blue-600 text-sm mb-1">
                        <FiClock /> {session.time}
                      </div>
                      <h4 className="text-sm sm:text-base font-medium">
                        {session.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        {session.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventThree;
