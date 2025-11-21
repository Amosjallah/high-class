import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-school-blue shadow-lg py-2' : 'bg-school-blue/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white p-2 rounded-full group-hover:bg-school-gold transition-colors">
              <GraduationCap className="h-6 w-6 text-school-blue" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg md:text-xl tracking-wide uppercase">
                {SCHOOL_INFO.name}
              </span>
              <span className="text-school-gold text-xs uppercase tracking-wider hidden sm:block">
                Excellence & Discipline
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-school-gold text-school-blue'
                    : 'text-white hover:bg-white/10 hover:text-school-gold'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="ml-4 bg-white text-school-blue px-4 py-2 rounded-md text-sm font-bold hover:bg-school-gold transition-colors"
            >
              Portal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-school-gold p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden bg-school-blue border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'bg-school-gold text-school-blue'
                  : 'text-white hover:bg-white/10 hover:text-school-gold'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-white/10">
            <Link
              to="/admissions"
              className="block w-full text-center bg-white text-school-blue px-4 py-3 rounded-md font-bold hover:bg-school-gold transition-colors"
            >
              Parent/Student Portal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;