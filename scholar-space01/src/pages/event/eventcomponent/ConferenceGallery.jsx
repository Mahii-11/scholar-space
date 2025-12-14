/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    image: "scholar-images/image1.jpg",
    title: "Academic Conference",
    category: "Events",
  },
  {
    id: 2,
    image: "scholar-images/image2.jpg",
    title: "Research Meeting",
    category: "Research",
  },
  {
    id: 3,
    image: "scholar-images/image3.jpg",
    title: "Workshop Session",
    category: "Workshop",
  },
  {
    id: 4,
    image: "scholar-images/image4.jpg",
    title: "Team Collaboration",
    category: "Team",
  },
  {
    id: 5,
    image: "scholar-images/image5.jpg",
    title: "Professional Discussion",
    category: "Meeting",
  },
  {
    id: 6,
    image: "scholar-images/image6.jpg",
    title: "Office Portrait",
    category: "Professional",
  },
  {
    id: 7,
    image: "scholar-images/image7.jpg",
    title: "Certificate Presentation",
    category: "Achievement",
  },
  {
    id: 8,
    image: "scholar-images/image8.jpg",
    title: "Academic Document",
    category: "Document",
  },
  {
    id: 9,
    image: "scholar-images/image9.jpg",
    title: "International Visit",
    category: "Travel",
  },
  {
    id: 10,
    image: "scholar-images/image10.jpg",
    title: "Landmark Photo",
    category: "International",
  },
  {
    id: 11,
    image: "scholar-images/image11.jpg",
    title: "Cultural Site Visit",
    category: "Cultural",
  },
  {
    id: 12,
    image: "scholar-images/image12.jpg",
    title: "Global Conference",
    category: "International",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

function ConferenceGallery() {
  return (
    <div>
      <GallerySection />
    </div>
  );
}

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Conference <span className="text-red-600">Gallery</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Explore moments from TEHI 2025 - keynote speeches, technical
            sessions, networking events, and more
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {galleryImages.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-64 sm:h-56 md:h-64"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-blue-300">{item.category}</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute top-3 right-3 w-10 h-10 bg-blue-600/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="text-white text-xl">+</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 md:mt-16 text-center"
        ></motion.div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery view"
              className="w-full h-auto rounded-lg"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-black" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default ConferenceGallery;
