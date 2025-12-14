import { Globe } from "lucide-react";
const collaborations = [
  {
    code: "IT",
    country: "Italy",
    university: "University of Milan",
    description:
      "Leading European research institution contributing cutting-edge quantum computing research and methodologies.",
    bg: "bg-blue-50",
    circle: "bg-blue-100",
  },
  {
    code: "IN",
    country: "India",
    university: "Vellore Institute of Technology",
    description:
      "Premier Indian technical university bringing expertise in quantum algorithms and computational applications.",
    bg: "bg-purple-50",
    circle: "bg-purple-100",
  },
  {
    code: "UZ",
    country: "Uzbekistan",
    university: "Samarkand State University",
    description:
      "Historic center of learning on the Silk Road, hosting this international collaboration in quantum education.",
    bg: "bg-green-50",
    circle: "bg-green-100",
  },
];

function InternationalCollaboration() {
  return (
    <section className="w-full bg-linear-to-b from-slate-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Globe className="text-blue-600" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold">
            International <span className="text-blue-600">Collaboration</span>
          </h2>
        </div>
        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg mb-12">
          This unique summer school brings together expertise from three
          prestigious institutions across three continents, offering
          participants a truly global perspective on quantum computing
          education.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborations.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${item.bg} p-8 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div
                className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${item.circle}`}
              >
                <span className="text-xl font-semibold tracking-wide">
                  {item.code}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{item.university}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.country}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <div className="rounded-full border bg-white px-6 py-3 text-sm shadow-sm">
            <span className="font-medium">Registration Fee:</span>{" "}
            <span className="text-blue-600 font-semibold">USD 150</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-600">Certificate Included</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternationalCollaboration;
