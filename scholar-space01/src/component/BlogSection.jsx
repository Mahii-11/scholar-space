/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "বিশ্ববিদ্যালয়ে শৌখিক রার্কিকিয়ে বিভ্রান্ত হত: ডঃ সাজ্জাদ",
      excerpt:
        "একঃ বিশ্ববিদ্যালয় প্রতিষ্ঠানের শিক্ষার্থীদের বিভিন্ন সমস্যা এবং সমাধান নিয়ে গবেষণা করা হচ্ছে। আমাদের বিশ্ববিদ্যালয়ে শিক্ষার্থীদের জন্য উন্নত সুবিধা প্রদান করা হয়েছে। আধুনিক মেধা উন্নয়নের জন্য আমরা প্রতিশ্রুতিবদ্ধ।",
      date: "24 Jan",
      year: "2024",
      time: "10:00 AM - 2:00 PM",
      location: "135 W, 46th Street, Bangladesh",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Academic",
    },
    {
      id: 2,
      title: "আসুপা শক্তি গ্রাউড করতে প্রধানজন সেবেয়া ও আত্মিক প্রযুক্তি",
      excerpt:
        "আমাদের গবেষণা দল নতুন শক্তি সমাধান নিয়ে কাজ করছে যা পরিবেশ বান্ধব এবং টেকসই। এই উদ্যোগ বিশ্বব্যাপী স্বীকৃতি পেয়েছে এবং আন্তর্জাতিক সম্মেলনে উপস্থাপন করা হয়েছে।",
      date: "24 Jan",
      year: "2024",
      time: "",
      location: "",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Research",
    },
    {
      id: 3,
      title: "করণাভাইরাস সূত্যমীর সামাচ দরিয়ত বিশ্ববিদ্যালয় পর্যায়ে",
      excerpt:
        "বৈশ্বিক মহামারী পরিস্থিতিতে আমাদের বিশ্ববিদ্যালয় শিক্ষার্থীদের জন্য বিশেষ সহায়তা প্রদান করেছে। ডিজিটাল শিক্ষা ব্যবস্থা এবং অনলাইন পরীক্ষা সফলভাবে পরিচালিত হয়েছে। আমরা শিক্ষার্থীদের মানসিক সুস্থতার জন্য পরামর্শ সেবা প্রদান করছি।",
      date: "24 Jan",
      year: "2024",
      time: "",
      location: "",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "News",
    },
    {
      id: 4,
      title: "আত্মিকতার সূত্রা পাশে বার্ণাদেশ",
      excerpt:
        "আমাদের দেশের উন্নয়নে প্রযুক্তি এবং উদ্ভাবনের ভূমিকা অপরিসীম। বিশ্ববিদ্যালয়ের গবেষণা কেন্দ্র থেকে বিভিন্ন উদ্ভাবনী প্রকল্প বাস্তবায়িত হচ্ছে যা জাতীয় উন্নয়নে অবদান রাখছে।",
      date: "24 Jan",
      year: "2024",
      time: "",
      location: "",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Innovation",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-20 md:py-28 px-3 md:px-4 bg-linear-to-br from-white via-blue-50/10 to-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/8 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Latest <span className="text-blue-600">Blog</span> Posts
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with Dr. Sazzad Hossain's latest thoughts, research
            insights, and academic contributions.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12"
        >
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100"
            >
              {/* Featured Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-48 md:h-56 overflow-hidden bg-linear-to-br from-blue-100 to-slate-100"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Content */}
              <div className="p-6 md:p-7">
                {/* Meta Information */}
                {post.time && post.location ? (
                  <div className="flex flex-col gap-2 text-xs md:text-sm text-neutral-600 mb-4 pb-4 border-b border-neutral-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-semibold">
                        {post.date} - {post.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{post.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{post.location}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-600 mb-4 pb-4 border-b border-neutral-100">
                    <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-semibold">
                      {post.date} - {post.year}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3 line-clamp-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm md:text-base text-neutral-700 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <motion.a
                  href="/blog"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold rounded-full transition-all shadow-sm"
          >
            View All Blog Posts
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};
