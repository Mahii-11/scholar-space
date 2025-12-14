export default function ConferenceHero() {
  return (
    <section className="w-full bg-[#f3f6fb] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#f0f4fb] rounded-2xl p-6 md:p-10 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                <span className="text-blue-600">TEHI 2025</span>
                <br />
                <span className="text-gray-900">
                  5th International Conference on
                </span>
                <br />
                <span className="text-purple-600">Trends in Electronics</span>
                <br />
                <span className="text-gray-900">and </span>
                <span className="text-green-600">Health Informatics</span>
              </h1>

              <div className="flex items-center gap-2 text-gray-600 mt-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                <p className="text-sm md:text-base">
                  Samarkand State University, Uzbekistan
                </p>
              </div>

              <p className="text-gray-600 mt-6 max-w-xl text-sm md:text-base">
                Join researchers, scholars, and professionals from academia and
                industry for knowledge exchange, collaboration, and sharing of
                groundbreaking research findings across Electronics and Health
                Informatics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Visit Conference Website
                <span className="text-lg">↗</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition"
              >
                Submit Paper
                <span className="text-lg">↗</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative">
              <img
                src="/scholar-images/tehi2025.png"
                alt="Conference Venue"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
