import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-image.jpg";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";

const blogs = [
  {
    id: "precision-engineering-trends-2025",
    category: "Manufacturing",
    title: "Precision Engineering Trends Shaping 2025",
    image: aboutImage,
  },
  {
    id: "sustainability-modern-manufacturing",
    category: "Sustainability",
    title: "Sustainability In Modern Manufacturing",
    image: process1,
  },
  {
    id: "industries-we-serve-globally",
    category: "Industry News",
    title: "Industries We Serve Across The Globe",
    image: process2,
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16">
        <div className="absolute inset-0 bg-card">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${aboutImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-card-foreground mb-6">
              Our Blog
            </h1>
            
            <div className="flex items-center gap-3 text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>-</span>
              <span className="text-primary">Blog</span>
            </div>
          </div>
          
          <div className="absolute right-8 top-1/2 -translate-y-1/2 max-w-sm hidden lg:block">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover insights, updates, and trends from Meltech Melting Technology. Our blog covers CNC machining, brass components, stamping, molding, and assembly solutions—designed to inspire innovation and share expertise worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="group">
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <Link 
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 rounded-full text-sm font-medium hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                >
                  READ MORE
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
