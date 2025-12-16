import { Link } from "react-router";
import { Globe } from "lucide-react";
import Header from "../event/eventcomponent/Header";
import { NewsComponents } from "./NewsComponents";
import { FooterSection } from "../../component/FooterSection";

function NewsStore() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between mt-16">
        <div className="flex items-center gap-2 text-md text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-medium">News</span>
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
      <NewsComponents />
      <FooterSection />
    </div>
  );
}

export default NewsStore;
