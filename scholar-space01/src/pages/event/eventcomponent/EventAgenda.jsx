import { FiClock, FiGlobe } from "react-icons/fi";

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

function EventAgenda() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Event Agenda
        </h2>
      </div>
      <AgendaItem />
      <AgendaItem />
      <AgendaItem />
    </div>
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

export default EventAgenda;
