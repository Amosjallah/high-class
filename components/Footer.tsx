import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Clock } from 'lucide-react';
import { SCHOOL_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-school-dark text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{SCHOOL_INFO.name}</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Providing a safe, supportive, and stimulating learning environment that helps every child reach their full potential. Located at {SCHOOL_INFO.address}.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-school-gold transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-school-gold transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-school-gold transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm hover:text-school-gold transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-school-gold rounded-full mr-2"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-school-gold mr-3 mt-0.5 shrink-0" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-school-gold mr-3 shrink-0" />
                <span>{SCHOOL_INFO.phone1}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-school-gold mr-3 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-school-gold mr-3 mt-0.5 shrink-0" />
                <div>
                  <p>Mon-Fri: {SCHOOL_INFO.hours.weekday}</p>
                  <p>Sat: {SCHOOL_INFO.hours.saturday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to get updates on admissions and events.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-school-gold text-sm"
              />
              <button className="bg-school-gold text-school-dark font-bold px-4 py-2 rounded hover:bg-yellow-500 transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;