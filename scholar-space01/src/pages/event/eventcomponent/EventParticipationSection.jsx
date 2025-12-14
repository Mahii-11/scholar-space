import { Users } from "lucide-react";
function EventParticipationSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Event <span className="text-blue-600">Participation</span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            Interested in having Dr. Sazzad Hossain speak at your event or
            conference? Get in touch to discuss potential engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-8">Speaking Topics</h3>

            <ul className="space-y-6">
              {[
                {
                  title: "Quantum Computing Applications",
                  desc: "Practical implementations and future possibilities",
                },
                {
                  title: "AI in Environmental Monitoring",
                  desc: "Leveraging artificial intelligence for climate action",
                },
                {
                  title: "Digital Transformation in Higher Education",
                  desc: "Innovative approaches to academic excellence",
                },
                {
                  title: "Sustainable Development in Central Asia",
                  desc: "Regional approaches to environmental challenges",
                },
              ].map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 lg:pt-12">
            <h3 className="text-2xl font-semibold mb-4">
              Request Participation
            </h3>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Dr. Sazzad Hossain is available for speaking engagements, panel
              discussions, and academic collaborations. Please get in touch to
              discuss potential opportunities.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all">
              <Users className="w-5 h-5" />
              Contact for Speaking Engagements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventParticipationSection;
