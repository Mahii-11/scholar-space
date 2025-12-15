import { FaPlay } from "react-icons/fa";

const ConferenceVideos = () => {
  const videos = [
    {
      tag: "OPENING",
      title:
        "Opening of the 5th International Conference on Trends in Electronics and...",
      author: "",
      thumbnail: "https://www.youtube.com/watch?v=2AiPruYzpP4&t=3s",
    },
    {
      tag: "KEYNOTE",
      title: "Keynote Speech - Professor Dr. Tyler S. Wallace",
      author: "Professor Dr. Tyler S. Wallace",
      thumbnail: "https://www.youtube.com/watch?v=Fl47MNlJ1JA",
    },
    {
      tag: "KEYNOTE",
      title: "Keynote Speech - Professor Zhuo (Adam) Chen",
      author: "Professor Zhuo (Adam) Chen",
      thumbnail: "https://www.youtube.com/watch?v=wmCNnz2TXfU",
    },
    {
      tag: "KEYNOTE",
      title: "Keynote Speech - Professor Anirban Bandyopadhyay",
      author: "Professor Anirban Bandyopadhyay",
      thumbnail: "https://www.youtube.com/watch?v=wG-VWDEYOIs",
    },
    {
      tag: "TECHNICAL",
      title: "November 8 - Technical Session 1",
      author: "",
      thumbnail: "https://www.youtube.com/watch?v=bdjKeGAaVA0&t=2s",
    },
    {
      tag: "TECHNICAL",
      title: "November 8 - Technical Session 2",
      author: "",
      thumbnail: "https://www.youtube.com/watch?v=lmSrJ3zUyRc",
    },
    {
      tag: "INTERVIEW",
      title: "Interview - Professor Adam Chen",
      author: "Professor Adam Chen",
      thumbnail: "https://www.youtube.com/watch?v=-BugdeVl3Bg",
    },
    {
      tag: "INTERVIEW",
      title: "Professor Sazzad Hossain's Thoughts on TEHI 2025",
      author: "",
      thumbnail: "https://www.youtube.com/watch?v=RAujR7Ro2xw",
    },
  ];

  const getYoutubeId = (url) => {
    if (!url) return null;
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
  };

  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 relative">
          <h2 className="text-4xl font-extrabold">
            <span className="text-black">Conference </span>
            <span className="text-[#dc2626]">Videos</span>
          </h2>
          <div className="w-28 h-1 bg-[#dc2626] mx-auto mt-4"></div>
        </div>

        {/* subtitle */}
        <p className="text-center text-lg text-[#64748b] mb-16">
          Watch keynote speeches, technical sessions, and interviews from TEHI
          2025
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => {
            const videoId = getYoutubeId(video.thumbnail);

            return (
              <div
                key={index}
                className="
                  bg-white rounded-xl overflow-hidden
                  shadow-md border
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_20px_40px_rgba(220,38,38,0.25)]
                "
              >
                {/* Thumbnail */}
                <div className="relative group">
                  <img
                    src={
                      videoId
                        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                        : "https://via.placeholder.com/640x360?text=No+Video"
                    }
                    alt={video.title}
                    className="w-full h-56 object-cover"
                  />

                  {/* overlay */}
                  {videoId && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <button
                        onClick={() => window.open(video.thumbnail, "_blank")}
                        className="w-16 h-16 rounded-full bg-[#dc2626] flex items-center justify-center"
                      >
                        <FaPlay className="text-white text-xl ml-1" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full bg-[#fee2e2] text-[#dc2626]">
                    {video.tag}
                  </span>

                  <h3 className="font-semibold text-lg leading-snug mb-2">
                    {video.title}
                  </h3>

                  {video.author && (
                    <p className="text-sm text-[#64748b]">{video.author}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConferenceVideos;
