import { Link } from "react-router";
import ConferenceHero from "./eventcomponent/ConferenceHero";
import Header from "./eventcomponent/Header";
import { Globe } from "lucide-react";
import AboutTEHI from "./eventcomponent/AboutTEHI";
import ConferenceGallery from "./eventcomponent/ConferenceGallery";
import { FooterSection } from "../../component/FooterSection";
import ImportantDates from "./eventcomponent/ImportantDates";
import FeaturedInMedia from "./eventcomponent/FeaturedInMedia";
import ContactAndPartners from "./eventcomponent/ContactAndPartners";
import ConferenceVideos from "./eventcomponent/ConferenceVideos";

function Eventtwo() {
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
      <ConferenceHero />
      <AboutTEHI />
      <ImportantDates />
      <ContactAndPartners />
      <ConferenceGallery />
      <ConferenceVideos />
      <FeaturedInMedia />
      <FooterSection />
    </div>
  );
}

export default Eventtwo;
