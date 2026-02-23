import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us - Get a Quote for Precision Components"
        description="Contact Meltech Melting Technology for inquiries, quotes, and collaborations. Located at GIDC Phase 3 Dared, Jamnagar 361006, Gujarat, India. Call +91 83205 18221."
        keywords="contact Meltech, brass components quote, CNC parts inquiry, Jamnagar manufacturer contact, precision components supplier India, get a quote brass parts"
      />
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
              Contact Us
            </h1>

            <div className="flex items-center gap-3 text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>-</span>
              <span className="text-primary">Contact</span>
            </div>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 max-w-sm hidden lg:block">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Connect with Meltech Melting Technology for inquiries, collaborations, or precision solutions. Our team is ready to support your CNC, stamping, molding, and assembly requirements worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form - Embedded Google Form */}
            <div className="bg-white rounded-4xl p-0 shadow-xl border border-border/50 overflow-hidden min-h-[1000px] flex flex-col">
              <div className="p-8 pb-4 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-primary" />
                  <span className="text-primary font-medium text-sm">KEEP IN TOUCH</span>
                  <span className="w-8 h-[2px] bg-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Get In Touch With Our Support Team
                </h2>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Please fill out the form below. Our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="flex-grow w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeyDe9-xYt6sH_2SXjTmr5TeDX2yhMazscLkDaeJJtYuG4wLw/viewform?embedded=true"
                  className="w-full h-[1000px]"
                  title="Contact Form"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Reach out to Meltech Melting Technology for inquiries, collaborations, or product information. Our team is available to provide timely assistance for your requirements.
              </p>

              <div className="space-y-8">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">
                    Meltech Melting Technology<br />
                    GIDC Phase 3 Dared, Jamnagar - 361006, Gujarat, India
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Contact</h4>
                  <p className="text-muted-foreground">
                    +91 83205 18221<br />
                    +91 84879 75290<br />
                    +91 89808 65290<br />
                    info@meltechmeltingtechnology.in, sales@meltechmeltingtechnology.in
                  </p>
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

export default ContactPage;
