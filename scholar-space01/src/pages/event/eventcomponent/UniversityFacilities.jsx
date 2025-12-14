const facilities = [
  {
    title: "The main building of the university",
    img: "/scholar-images/imageNo1.jpg",
  },
  {
    title: "History of Samarkand State University",
    img: "/scholar-images/imageNo2.jpg",
  },
  {
    title: "Rectorate and International Education Center",
    img: "/scholar-images/imageNo3.jpg",
  },
  {
    title: "University Campus Building",
    img: "/scholar-images/imageNo4.jpg",
  },
  {
    title: "Academic Block",
    img: "/scholar-images/imageNo5.jpg",
  },
  {
    title: "Student Residence Building",
    img: "/scholar-images/imageNo6.jpg",
  },
];

const dormitories = [
  {
    title: "Student Dormitory Building",
    img: "/scholar-images/imageNo7.jpg",
  },
  {
    title: "Standard Twin Room",
    img: "/scholar-images/imageNo8.jpg",
  },
  {
    title: "Modern Dormitory Hallway",
    img: "/scholar-images/imageNo9.jpg",
  },
  {
    title: "Student Dining Hall",
    img: "/scholar-images/imageNo10.jpg",
  },
  {
    title: "Dormitory Room Entrance",
    img: "/scholar-images/imageNo11.jpg",
  },
  {
    title: "Reception Area",
    img: "/scholar-images/imageNo12.jpg",
  },
];

const ImageCard = ({ title, img }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
    <img
      src={img}
      alt={title}
      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
    <div className="absolute bottom-0 w-full p-4 translate-y-6 group-hover:translate-y-0 transition-all duration-300">
      <span className="inline-block bg-black/70 text-white text-sm px-3 py-1 rounded-md">
        {title}
      </span>
    </div>
  </div>
);

export default function UniversityFacilities() {
  return (
    <div className="space-y-16 py-10 px-10">
      <section>
        <h2 className="text-3xl font-bold mb-2">
          University Facilities & Accommodations
        </h2>
        <p className="text-gray-600 mb-8">
          Samarkand State University offers excellent facilities including
          modern IT Centers, libraries, and comfortable student accommodation
          options.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, i) => (
            <ImageCard key={i} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-2xl">
        <h2 className="text-3xl font-bold mb-8">Hotels and Accommodations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dormitories.map((item, i) => (
            <ImageCard key={i} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
