"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Muftlo: Your Creative Digital Growth Partner",
    desc: "Muftlo blends creativity with smart digital strategies to boost your brand online. Reach the right audience, grow faster, and turn ideas into measurable success.",
    img: "/muftloBlog.jpg",
    slug: "muftlo-digital-growth",
  },
  {
    title: "Top Digital Marketing Services That Boost Leads & Sales",
    desc: "In today’s competitive digital world, having an online presence is not enough. What you need is a marketing system that consistently generates quality leads, improves brand visibility, and turns visitors into paying customers.",
    img: "/Anton Tkachev.jpg",
    slug: "top-digital-marketing-services",
  },
  {
    title: "Why Every Industry Needs Professional Digital Marketing",
    desc: "No matter what business you run real estate, e-commerce, healthcare, finance, education, hospitality, or retail your audience lives online. This makes digital marketing not just an option, but a business necessity.",
    img: "/Best Digital Marketing.jpg",
    slug: "importance-of-digital-marketing",
  },
];

export default function RecentBlogs() {
  return (
    <section className="text-white py-20 px-6 md:px-16 bg-gradient-to-b">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Our Recent <span className="text-white">Blogs</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Stay ahead with insights and trends shaping the digital future.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="
              h-[500px]
              rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm
              hover:bg-white/10 hover:border-white/20
              transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.05)]
            "
          >
            <div className="relative w-full h-[220px] overflow-hidden group">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80"></div>
            </div>

            <div className="p-6 flex flex-col justify-between h-[280px]">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-100 leading-snug group-hover:text-white transition">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {blog.desc}
                </p>
              </div>

              <Link
                href={`/blog/${blog.slug}`}
                className="inline-block self-start border border-gray-500 text-gray-200 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
