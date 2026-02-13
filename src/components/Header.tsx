import { useState } from "react";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-2.png";
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
    <div className="relative z-50 bg-white rounded-full py-3 px-6 shadow-xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img alt="Meltech" className="h-14 w-auto" src={logo} />
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
        <button
          className="lg:hidden text-card p-2 hover:bg-muted rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay - Sliding Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[-1] bg-white/95 backdrop-blur-2xl flex flex-col pt-32 px-6 h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto w-full">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                >
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="flex items-center justify-between p-4 text-xl font-medium text-black hover:bg-black/5 rounded-2xl transition-all group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                      <ChevronRight className="w-5 h-5 text-black/40 group-hover:text-primary transition-colors" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="flex items-center justify-between p-4 text-xl font-medium text-black hover:bg-black/5 rounded-2xl transition-all group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                      <ChevronRight className="w-5 h-5 text-black/40 group-hover:text-primary transition-colors" />
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <Link to="/live-brochure" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="industrial" className="w-full gap-2 justify-center py-8 text-xl rounded-2xl shadow-lg shadow-primary/20">
                    LIVE BROCHURE
                    <ArrowUpRight className="w-6 h-6" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </header>;
};
export default Header;