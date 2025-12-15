import {
  FaGlobe,
  FaFileAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCircle,
} from "react-icons/fa";

const ContactAndPartners = () => {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ================= Contact Information ================= */}
        <div className="text-center mb-14 relative">
          <h2 className="text-4xl font-extrabold">
            <span className="text-black">Contact </span>
            <span className="text-[#16a34a]">Information</span>
          </h2>

          <div className="w-24 h-1 bg-[#16a34a] mx-auto mt-4"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-24">
          {/* Conference Details */}
          <div className="border border-[#bbf7d0] rounded-xl p-8">
            <h3 className="font-bold text-lg mb-6">Conference Details</h3>

            <div className="flex items-start gap-4 mb-5">
              <FaGlobe className="text-[#16a34a] mt-1" />
              <div>
                <p className="font-medium">Website</p>
                <p className="text-[#16a34a] text-lg">TEHI2025.UZ</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaFileAlt className="text-[#16a34a] mt-1" />
              <div>
                <p className="font-medium">Paper Submission</p>
                <p className="text-[#16a34a] text-lg">
                  https://bit.ly/tehi-2025
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="border border-[#bbf7d0] rounded-xl p-8">
            <h3 className="font-bold text-lg mb-6">Contact Details</h3>

            <div className="flex items-start gap-4 mb-5">
              <FaPhoneAlt className="text-[#16a34a] mt-1" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-lg">+99893-999-51-49</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-[#16a34a] mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-lg">mehriddinur@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Conference Partners ================= */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">
            <span className="text-black">Conference </span>
            <span className="text-[#2563eb]">Partners</span>
          </h2>

          <div className="w-24 h-1 bg-[#2563eb] mx-auto mt-4"></div>
        </div>

        <p className="text-center text-[#64748b] mb-14 text-lg">
          TEHI 2025 is organized in collaboration with prestigious international
          institutions
        </p>

        {/* Partners List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "Springer (Publication Partner)",
            "Washington University in St. Louis",
            "University of Georgia",
            "Amity University",
            "Washington University of Science and Technology",
            "International Institute Of Invincible Rhythms (IIOR), Shimla, India",
            "Amity Cognitive Computing and Brain Informatics Centre (ACCBI), Amity University Rajasthan, India",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#eff6ff] border border-[#dbeafe] px-6 py-4 rounded-lg"
            >
              <FaCircle className="text-[#2563eb] text-xs" />
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactAndPartners;
