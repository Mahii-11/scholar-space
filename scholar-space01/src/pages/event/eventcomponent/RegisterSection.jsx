import { FiMail, FiPhone, FiGlobe, FiArrowUpRight } from "react-icons/fi";

export default function RegisterSection() {
  return (
    <section className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Register for the Summer School
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Apply to the 2025 International Summer School at Samarkand State
            University. Limited spots available!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border  p-8 shadow-sm bg-white">
            <h3 className="text-lg sm:text-xl font-semibold mb-6">
              Registration Details
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium">
                    Registration Fee
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    USD 150 (includes course materials, certificate, and
                    cultural activities)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium">
                    Application Deadline
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    May 1, 2025
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium">
                    Eligibility
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Open to international students and professionals interested
                    in quantum computing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-8 shadow-sm flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 flex-1">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <FiMail />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium">Email</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    irossu1420@gmail.com
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    sazzad69@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium">Phone</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    +998 90 446 99 77
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <FiGlobe />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium">
                    University Website
                  </h4>
                  <a
                    href="https://www.samdu.uz/en"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm text-blue-600 hover:underline"
                  >
                    https://www.samdu.uz/en
                  </a>
                </div>
              </div>
            </div>

            <button className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm sm:text-base font-medium text-white hover:bg-blue-700 transition cursor-pointer">
              Register Your Interest <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
