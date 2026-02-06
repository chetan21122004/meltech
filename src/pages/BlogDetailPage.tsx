import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-image.jpg";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";

const blogs = [
  {
    id: "precision-engineering-trends-2025",
    title: "Precision Engineering Trends Shaping 2025",
    category: "Manufacturing",
    heroDescription: "Discover the latest innovations redefining precision engineering in 2025—from CNC automation and digital manufacturing to smarter, more efficient processes.",
    image: aboutImage,
    content: {
      intro: "As industries evolve, precision engineering continues to redefine global manufacturing standards. In 2025, new technologies and practices are accelerating innovation and efficiency.",
      bulletPoints: [
        "Adoption of AI-powered CNC machining",
        "Automation and robotics in production",
        "Integration of IIoT for real-time monitoring"
      ],
      body: "With demand for tighter tolerances and faster production, companies are adopting hybrid machining, additive manufacturing, and automated inspection systems. These ensure accuracy while reducing time-to-market.",
      sections: [
        {
          title: "1. Smart Factories & Digital Twins",
          content: "Digital twin technology is transforming the way manufacturers design and monitor components. Virtual simulations allow predictive maintenance and better product lifecycle management."
        },
        {
          title: "2. Sustainable Materials & Eco-Processes",
          content: "Manufacturers are shifting towards recyclable alloys, energy-efficient machining, and waste-reduction practices. Green engineering is no longer optional—it's a global mandate."
        },
        {
          title: "3. Human-Machine Collaboration",
          content: "Skilled engineers working alongside advanced machines create faster, more precise, and cost-effective outcomes. This synergy is driving next-gen product innovation."
        }
      ],
      quote: {
        text: "The future of precision lies in data-driven engineering and adaptive automation.",
        author: "Industry Expert"
      }
    }
  },
  {
    id: "sustainability-modern-manufacturing",
    title: "Sustainability In Modern Manufacturing",
    category: "Sustainability",
    heroDescription: "Exploring how modern manufacturers are embracing sustainable practices to reduce environmental impact while maintaining quality.",
    image: process1,
    content: {
      intro: "Sustainability is no longer a buzzword—it's a business imperative. Modern manufacturing facilities are implementing green initiatives across every stage of production.",
      bulletPoints: [
        "Energy-efficient machinery and processes",
        "Waste reduction and recycling programs",
        "Sustainable material sourcing"
      ],
      body: "From solar-powered facilities to closed-loop water systems, manufacturers are finding innovative ways to reduce their carbon footprint without compromising on quality or efficiency.",
      sections: [
        {
          title: "1. Green Manufacturing Practices",
          content: "Implementing ISO 14001 environmental management systems helps organizations systematically improve their environmental performance."
        },
        {
          title: "2. Circular Economy Integration",
          content: "Moving from a linear to circular model means designing products for longevity, repairability, and eventual recycling."
        },
        {
          title: "3. Supply Chain Sustainability",
          content: "Working with suppliers who share sustainability goals creates a comprehensive approach to environmental responsibility."
        }
      ],
      quote: {
        text: "Sustainability is not just good for the planet—it's good for business.",
        author: "Manufacturing Leader"
      }
    }
  },
  {
    id: "industries-we-serve-globally",
    title: "Industries We Serve Across The Globe",
    category: "Industry News",
    heroDescription: "A look at the diverse industries we serve and how precision manufacturing enables innovation across sectors worldwide.",
    image: process2,
    content: {
      intro: "Our precision-engineered components find applications across a wide spectrum of industries, from automotive to aerospace, medical to consumer electronics.",
      bulletPoints: [
        "Automotive and electric vehicles",
        "Aerospace and defense",
        "Medical devices and equipment"
      ],
      body: "Each industry has unique requirements for precision, durability, and performance. Our expertise allows us to meet these diverse needs with customized solutions.",
      sections: [
        {
          title: "1. Automotive Excellence",
          content: "From fuel injection systems to electric vehicle components, our parts meet the demanding standards of the automotive industry."
        },
        {
          title: "2. Aerospace Precision",
          content: "When failure is not an option, aerospace manufacturers trust our certified components for critical applications."
        },
        {
          title: "3. Medical Innovation",
          content: "Biocompatible materials and micro-precision enable life-saving medical devices and instruments."
        }
      ],
      quote: {
        text: "Quality knows no borders—our components serve industries worldwide.",
        author: "Global Operations Director"
      }
    }
  }
];

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const blog = blogs.find(b => b.id === blogId) || blogs[0];

  return (
    <div className="min-h-screen bg-background">
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
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
              {blog.title}
            </h1>
            
            <div className="flex items-center gap-3 text-muted-foreground mb-8">
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>-</span>
              <span className="text-primary">{blog.title}</span>
            </div>
          </div>
          
          <div className="absolute right-8 top-1/2 -translate-y-1/2 max-w-sm hidden lg:block">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {blog.heroDescription}
            </p>
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
              <div className="rounded-3xl overflow-hidden mb-8">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Title & Intro */}
              <h2 className="text-3xl font-bold text-foreground mb-6">{blog.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {blog.content.intro}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-8">
                {blog.content.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
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
              <div className="bg-secondary rounded-2xl p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl text-primary font-serif">"</div>
                  <div>
                    <p className="text-foreground font-medium mb-2">
                      {blog.content.quote.text}
                    </p>
                    <p className="text-primary text-sm">— {blog.content.quote.author}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">All Posts</h4>
              <div className="space-y-4">
                {blogs.map((item) => (
                  <Link 
                    key={item.id}
                    to={`/blog/${item.id}`}
                    className={`flex gap-4 group ${blog.id === item.id ? 'opacity-50' : ''}`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-20 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h5 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                        {item.title}
                      </h5>
                    </div>
                  </Link>
                ))}
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
