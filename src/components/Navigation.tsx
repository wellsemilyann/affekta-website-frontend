import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { motion, useScroll } from 'motion/react';
import { Logo } from './Logo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/technology' },
    { label: 'Industries', href: '/industries' },
    { label: 'I-Corps', href: '/icorps' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Check if current page is home page
  const isHomePage = location.pathname === '/';

  // Determine background color based on page and scroll state
  const getBackgroundColor = () => {
    if (!isHomePage) {
      // Sub pages: solid black background
      return 'rgba(0, 0, 0, 1)';
    }
    // Home page: semi-transparent based on scroll
    return scrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)';
  };

  return (
    <motion.nav 
      style={{ 
        backgroundColor: getBackgroundColor(),
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex justify-between items-center"
          animate={{ height: scrolled ? '56px' : '64px' }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div 
            className="flex-shrink-0"
            animate={{ scale: scrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link 
              to="/"
              className="hover:opacity-80 transition-opacity flex items-center"
            >
              <Logo className="h-10 sm:h-12" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `transition-all duration-200 text-sm ${
                    isActive
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-card/95 backdrop-blur-md border-t border-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `block w-full text-left px-3 py-2 transition-colors rounded-md ${
                    isActive
                      ? 'text-primary bg-accent'
                      : 'hover:text-primary hover:bg-accent'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
