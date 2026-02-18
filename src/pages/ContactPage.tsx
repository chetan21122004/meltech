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
            {/* Form - Light theme */}
            <div className="bg-white rounded-4xl p-8 shadow-xl border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary font-medium text-sm">KEEP IN TOUCH</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Get In Touch With Our Support Team
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-6 py-4 bg-muted rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary/30"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-6 py-4 bg-muted rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary/30"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-muted rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary/30"
                  />
                  <input
                    type="text"
                    placeholder="Service / Inquiry"
                    className="w-full px-6 py-4 bg-muted rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary/30"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-6 py-4 bg-muted rounded-3xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none border border-transparent focus:border-primary/30"
                />
                <Button variant="industrial" size="lg" className="gap-2 pr-2">
                  SUBMIT NOW
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </span>
                </Button>
              </form>
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

      {/* Map - Jamnagar, Gujarat */}
      <section className="py-16">
        <div className="container">
          <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-border/50">
            <iframe
              title="Meltech Location - Jamnagar, Gujarat"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6067.9637298981015!2d70.057158!3d22.471743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957154934c04597%3A0xe8b7dd81a49b75ca!2sJamnagar%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1770451800603!5m2!1sen!2sin"
              className="w-full h-[450px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            GIDC Industrial Estate, Jamnagar, Gujarat
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
