import { FiGrid, FiAward, FiUsers } from "react-icons/fi";
import {
  FaBrain,
  FaHeartbeat,
  FaNetworkWired,
  FaMicrochip,
  FaShieldAlt,
} from "react-icons/fa";

export function AboutTEHI() {
  return (
    <>
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              About <span className="text-blue-600">TEHI 2025</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
              The International Conference on Trends in Electronics and Health
              Informatics (TEHI-2025) focuses on experimental, theoretical, and
              practical aspects of innovations in Healthcare, Biomedical
              Engineering, Artificial Intelligence, Cybersecurity, Information
              Management, Remote Sensing, and Electronics.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative rounded-2xl border border-blue-200 bg-white p-8 text-center transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 transition-colors duration-300 group-hover:bg-blue-50">
                <FiGrid className="text-3xl text-blue-600 transition-colors duration-300 group-hover:text-blue-700" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Hybrid Mode
              </h3>
              <p className="mt-3 text-gray-600">
                Participate both in-person and online for maximum accessibility
                and global reach
              </p>
              {/* hover line */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-blue-400" />
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl border border-purple-200 bg-white p-8 text-center transition-all duration-300 hover:border-purple-500 hover:shadow-lg">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 transition-colors duration-300 group-hover:bg-purple-50">
                <FiAward className="text-3xl text-purple-600 transition-colors duration-300 group-hover:text-purple-700" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Springer Publication
              </h3>
              <p className="mt-3 text-gray-600">
                Selected papers will be published in prestigious Springer
                proceedings
              </p>
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-purple-400" />
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl border border-green-200 bg-white p-8 text-center transition-all duration-300 hover:border-green-500 hover:shadow-lg">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 transition-colors duration-300 group-hover:bg-green-50">
                <FiUsers className="text-3xl text-green-600 transition-colors duration-300 group-hover:text-green-700" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Global Network
              </h3>
              <p className="mt-3 text-gray-600">
                Connect with international researchers and industry
                professionals
              </p>
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-green-400" />
            </div>
          </div>
        </div>
      </section>
      <ConferenceTracks />
    </>
  );
}

export default AboutTEHI;

function ConferenceTracks() {
  const tracks = [
    {
      id: 1,
      title: "Artificial Intelligence and Soft Computing",
      desc: "Latest developments in AI algorithms, machine learning, and soft computing techniques",
      icon: <FaBrain />,
    },
    {
      id: 2,
      title: "Healthcare Informatics",
      desc: "Digital health solutions, medical informatics, and healthcare technology innovations",
      icon: <FaHeartbeat />,
    },
    {
      id: 3,
      title: "IoT and Data Analytics",
      desc: "Internet of Things applications, big data analytics, and smart systems",
      icon: <FaNetworkWired />,
    },
    {
      id: 4,
      title: "Electronics",
      desc: "Electronic systems, embedded technologies, and hardware innovations",
      icon: <FaMicrochip />,
    },
    {
      id: 5,
      title: "Cybersecurity",
      desc: "Information security, cyber threats, and protection mechanisms",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Conference <span className="text-purple-600">Tracks</span>
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4" />
          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Five specialized tracks covering the latest developments in
            electronics and health informatics
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white font-bold text-lg">
                  {track.id}
                </div>
                <div>
                  <p className="text-sm text-gray-500">Track {track.id}</p>
                  <h3 className="text-lg font-bold text-gray-900">
                    {track.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-gray-600">{track.desc}</p>

              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-purple-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
