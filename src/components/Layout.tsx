import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-widest uppercase text-white">
              Hydroshine
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-metallic">
              Mobile Detailing
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  location.pathname === link.path
                    ? 'text-white font-medium'
                    : 'text-brand-metallic hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm text-brand-metallic hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
            <Link
              to="/contact"
              className="border border-white/30 rounded-full px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-xl pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-display uppercase tracking-wider ${
                    location.pathname === link.path ? 'text-white' : 'text-brand-metallic'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto mb-12 flex flex-col space-y-4">
              <a href="tel:+1234567890" className="flex items-center justify-center space-x-2 py-4 border border-white/20 rounded-full text-white">
                <Phone className="w-5 h-5" />
                <span className="uppercase tracking-widest text-sm">Call Us</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center space-x-2 py-4 bg-white text-black rounded-full"
              >
                <Calendar className="w-5 h-5" />
                <span className="uppercase tracking-widest text-sm font-medium">Book Detail</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-gray border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex flex-col mb-6">
              <span className="font-display text-2xl font-bold tracking-widest uppercase text-white">
                Hydroshine
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-metallic">
                Premium Mobile Detailing
              </span>
            </Link>
            <p className="text-brand-metallic text-sm leading-relaxed max-w-md">
              Showroom results delivered to your doorstep. We provide premium mobile detailing services focused on delivering high-quality results with convenience and care.
            </p>
          </div>
          <div>
            <h4 className="text-white font-display uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-brand-metallic hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-metallic">
              <li>Mobile Service Area</li>
              <li>Los Angeles & Surrounding</li>
              <li className="pt-2">
                <a href="tel:+1234567890" className="hover:text-white transition-colors">(555) 123-4567</a>
              </li>
              <li>
                <a href="mailto:hello@hydroshinedetailing.com" className="hover:text-white transition-colors">hello@hydroshinedetailing.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-brand-metallic">
          <p>&copy; {new Date().getFullYear()} Hydroshine Detailing. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
