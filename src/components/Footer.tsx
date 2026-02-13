import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-2.png";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground">
      {/* Marquee Section */}
      <div className="py-8 bg-primary overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-xl md:text-4xl font-raleway font-bold uppercase text-primary-foreground">
                Precision Engineering
              </span>
              <span className="text-xl md:text-4xl text-primary-foreground/50">★</span>
              <span className="text-xl md:text-4xl font-raleway font-bold uppercase text-primary-foreground">
                Custom Manufacturing
              </span>
              <span className="text-xl md:text-4xl text-primary-foreground/50">★</span>
              <span className="text-xl md:text-4xl font-raleway font-bold uppercase text-primary-foreground">
                Brass & Metal Parts
              </span>
              <span className="text-xl md:text-4xl text-primary-foreground/50">★</span>
              <span className="text-xl md:text-4xl font-raleway font-bold uppercase text-primary-foreground">
                Stamping & Moulding
              </span>
              <span className="text-xl md:text-4xl text-primary-foreground/50">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Meltech" className="h-12 w-auto mb-6" />
            <p className="text-muted-foreground mb-6">
              Meltech Melting Technology delivers precision-engineered parts through advanced machining, stamping, molding, and assembly—ensuring consistent quality and on-time delivery worldwide.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground">FOLLOW US:</span>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Quality", href: "/quality" },
                { name: "Safety", href: "/safety" },
                { name: "Industries", href: "/industries" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xl font-bold mb-6 uppercase tracking-wide">Capabilities</h4>
            <ul className="space-y-3">
              {[
                { name: "Brass C-PVC & U-PVC Inserts", href: "/products/brass-cpvc-upvc-inserts" },
                { name: "Micro Turning Components", href: "/products/micro-turning-components" },
                { name: "Turning Components", href: "/products/turning-components" },
                { name: "Brass CNC Parts", href: "/products/brass-cnc-parts" },
                { name: "Stamping & Sheet Cutting", href: "/products" },
                { name: "Brass Gas Parts", href: "/products" },
                { name: "Sliding Head Components", href: "/products" },
                { name: "Turn-Mill Parts", href: "/products" },
                { name: "Brass Electrical Parts", href: "/products" },
                { name: "Hydraulic & Pneumatic Parts", href: "/products" }
              ].map((product) => (
                <li key={product.name}>
                  <Link to={product.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6 uppercase tracking-wide">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Stay updated with the latest news, product launches, and industry insights from Meltech Melting Technology.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="px-4 py-3 bg-secondary rounded-lg text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="industrial" className="rounded-full gap-2 pr-2 w-fit">
                SUBSCRIBE
                <span className="w-8 h-8 rounded-full bg-card flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-card-foreground" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/10 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            Copyright © 2025 - All Rights Reserved By Meltech Melting Technology
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
