import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, User } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";

const blogs = [
  {
    category: "Manufacturing",
    date: "Jan 15, 2024",
    author: "Admin",
    title: "Precision Engineering Tips For Better Component Quality",
    image: aboutImage,
  },
  {
    category: "Industry News",
    date: "Jan 10, 2024",
    author: "Admin",
    title: "Latest Trends in CNC Machining Technology",
    image: process1,
  },
  {
    category: "Quality Control",
    date: "Jan 05, 2024",
    author: "Admin",
    title: "How We Ensure 100% Quality in Every Batch",
    image: process2,
  },
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Latest Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground">
            And Industry Updates
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-secondary rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blog.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
