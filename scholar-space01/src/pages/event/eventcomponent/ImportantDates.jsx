import { FaRegCalendarAlt } from "react-icons/fa";
const ImportantDates = () => {
  const dates = [
    {
      title: "Paper Submission Deadline",
      date: "August 25, 2025",
    },
    {
      title: "Acceptance Notification",
      date: "September 10, 2025",
    },
    {
      title: "Camera Ready Submission",
      date: "September 25, 2025",
    },
    {
      title: "Registration Period",
      date: "September 25, 2025",
    },
    {
      title: "Conference Dates",
      date: "November 7-8, 2025",
    },
  ];
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold">
            <span className="text-black">Important</span>
            <span className="text-[#e11d48]">Dates</span>
          </h2>
          <div className="w-24 h-1 bg-[#e11d48] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {dates.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-md border-[#fca5a5] rounded-2xl bg-white px-10 py-12 text-center shadow-sm transition-all duration-300 ease-in-out hover:border-[#e11d48] hover:shadow-[0_0_25px_rgba(225,29,72,0.25)] "
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#fee2e2] flex items-center justify-center">
                  <FaRegCalendarAlt className="text-[#e11d48] text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-[#e11d48] text-lg font-medium">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
