import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [{
  name: "Home",
  href: "/"
}, {
  name: "About",
  href: "/about"
}, {
  name: "Products",
  href: "/products"
}, {
  name: "Quality",
  href: "/quality"
}, {
  name: "Safety",
  href: "/safety"
}, {
  name: "Industries",
  href: "/industries"
}, {
  name: "Blog",
  href: "/blog"
}, {
  name: "Contact",
  href: "/contact"
}];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  return <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      {/* Main Navigation - White Pill Shape */}
      <div className="bg-white rounded-full py-3 px-6 shadow-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img alt="Meltech" className="h-14 w-auto" src="https://krina.in/clients/meltech-04/assets/images/logo-2.png" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => {
              const isActive = link.href === "/" 
                ? location.pathname === "/" 
                : location.pathname === link.href || (link.href.startsWith("/#") && location.pathname === "/");
              
              return link.href.startsWith("/#") ? (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`hover:text-primary transition-colors font-medium text-sm ${isActive ? 'text-primary' : 'text-card'}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`hover:text-primary transition-colors font-medium text-sm ${isActive ? 'text-primary' : 'text-card'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-0">
            <Link to="/live-brochure">
              <Button variant="industrial" size="lg" className="gap-2 pr-2">
                LIVE BROCHURE
                <span className="w-8 h-8 rounded-full bg-card flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-card-foreground" />
                </span>
              </Button>
            </Link>
            <button className="w-12 h-12 rounded-full bg-card flex items-center justify-center ml-2 hover:bg-card/90 transition-colors">
              <div className="flex flex-col gap-1.5">
                <span className="w-5 h-0.5 bg-card-foreground rounded-full" />
                <span className="w-5 h-0.5 bg-card-foreground rounded-full" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-card p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="lg:hidden mt-4 pb-4 border-t border-border/10 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => 
                link.href.startsWith("/#") ? (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-card hover:text-primary transition-colors font-medium" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-card hover:text-primary transition-colors font-medium" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Link to="/live-brochure">
                <Button variant="industrial" className="mt-4 gap-2">
                  LIVE BROCHURE
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;