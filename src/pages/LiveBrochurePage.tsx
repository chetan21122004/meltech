import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const LiveBrochurePage = () => {
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
            {/* Decorative Icon */}
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-card-foreground mb-6">
              Live Brochure
            </h1>

            <div className="flex items-center gap-3 text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>-</span>
              <span className="text-primary">Live Brochure</span>
            </div>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 max-w-sm hidden lg:block">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Explore Meltech Melting Technology's live brochure showcasing our precision-engineered CNC turned parts, brass fittings, stamping, molding, and assembly solutions—accessible anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Under Construction Content */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yRcqbU4Iy4k?si=XHdOfV1T5A9wo8_P"
                title="Meltech Live Brochure"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-12 text-center">
              <Link to="/contact">
                <Button variant="industrial" size="lg" className="gap-2 pr-2">
                  GET A QUOTE
                  <span className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-card-foreground" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LiveBrochurePage;
