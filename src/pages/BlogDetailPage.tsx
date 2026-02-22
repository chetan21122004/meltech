import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import SEO from "@/components/SEO";

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const blog = blogs.find(b => b.id === blogId) || blogs[0];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${blog.title} - Blog`}
        description={blog.heroDescription}
        keywords={`${blog.category.toLowerCase()}, precision manufacturing blog, ${blog.title.toLowerCase()}, CNC machining, brass components`}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16">
        <div className="absolute inset-0 bg-card">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${blog.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                {blog.title}
              </h1>

              <div className="flex items-center gap-3 text-sm">
                <Link to="/blog" className="text-white/70 hover:text-primary transition-colors">Blog</Link>
                <span className="text-white/30">--</span>
                <span className="text-white/90 font-medium">{blog.title}</span>
              </div>
            </div>

            <div className="lg:max-w-md">
              <p className="text-white/80 text-base leading-relaxed font-medium">
                {blog.heroDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl group">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 right-0 bg-background p-6 rounded-tl-[2.5rem] hidden md:block">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/20" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
              </div>

              {/* Title & Intro */}
              <h2 className="text-4xl font-black text-[#1a1a1a] mb-8 leading-tight">{blog.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-medium">
                {blog.content.intro}
              </p>

              {/* Bullet Points */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {blog.content.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground font-bold">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(234,88,12,0.5)]" />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {blog.content.body}
              </p>

              {/* Sections */}
              {blog.content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}

              {/* Quote */}
              <div className="bg-slate-50/80 rounded-[2rem] p-10 mb-12 border border-slate-100/50">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 transform -rotate-3">
                    <span className="text-white text-4xl font-black rotate-3">"</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#1a1a1a] mb-6 italic leading-relaxed">
                      {blog.content.quote.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-px w-8 bg-primary/30" />
                      <p className="text-primary font-black uppercase text-sm tracking-wider">--- {blog.content.quote.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:block">
              <div className="sticky top-32 self-start">
                <h4 className="text-xl font-black text-[#1a1a1a] mb-8 relative inline-block">
                  All Posts
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full transition-all duration-300" />
                </h4>

                <div className="space-y-8">
                  {blogs.map((item) => (
                    <Link
                      key={item.id}
                      to={`/blog/${item.id}`}
                      className={`flex gap-6 group items-center ${blog.id === item.id ? 'opacity-50 pointer-events-none' : ''}`}
                    >
                      <div className="relative shrink-0 overflow-hidden rounded-2xl shadow-md bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-20 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h5 className="font-black text-[#1a1a1a] text-[15px] leading-tight group-hover:text-primary transition-colors">
                          {item.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
