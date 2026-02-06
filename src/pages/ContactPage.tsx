import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const ContactPage = () => {
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
            {/* Form */}
            <div>
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
                    className="w-full px-6 py-4 bg-secondary rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-6 py-4 bg-secondary rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-secondary rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Service / Inquiry"
                    className="w-full px-6 py-4 bg-secondary rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-6 py-4 bg-secondary rounded-3xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <Button variant="industrial" size="lg" className="gap-2 pr-2">
                  SUBMIT NOW
                  <span className="w-8 h-8 rounded-full bg-card flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-card-foreground" />
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
                    Meltech Melting Technology Pvt. Ltd.<br />
                    GIDC Industrial Estate, Jamnagar, Gujarat, India
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Contact</h4>
                  <p className="text-muted-foreground">
                    +91 98765 43210, +91 98765 43211<br />
                    info@meltech.co.in, sales@meltech.co.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="container">
          <div className="w-full h-80 bg-secondary rounded-3xl" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
