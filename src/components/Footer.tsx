import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground">
      {/* Marquee Section */}
      <div className="py-8 bg-primary overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-2xl md:text-4xl font-raleway font-bold uppercase text-primary-foreground">
                Precision Engineering
              </span>
              <span className="text-2xl md:text-4xl text-primary-foreground/50">★</span>
              <span className="text-2xl md:text-4xl font-raleway font-bold uppercase text-primary-foreground">
                Custom Manufacturing
              </span>
              <span className="text-2xl md:text-4xl text-primary-foreground/50">★</span>
              <span className="text-2xl md:text-4xl font-raleway font-bold uppercase text-primary-foreground">
                Brass & Metal Parts
              </span>
              <span className="text-2xl md:text-4xl text-primary-foreground/50">★</span>
              <span className="text-2xl md:text-4xl font-raleway font-bold uppercase text-primary-foreground">
                Stamping & Moulding
              </span>
              <span className="text-2xl md:text-4xl text-primary-foreground/50">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Meltech" className="h-12 w-auto mb-6" />
            <p className="text-muted-foreground mb-6">
              Precision manufacturing solutions from prototype to production. 
              Trusted by industry-leading OEMs for over 25 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Services", "Quality", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {[
                "Brass Inserts",
                "Stamping Components",
                "CNC Machined Parts",
                "Sliding Head Parts",
                "Plastic Moulding",
                "Custom Components"
              ].map((product) => (
                <li key={product}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and industry insights.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-secondary rounded-full text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="industrial" className="rounded-full">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/10 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Meltech Melting Technology. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
