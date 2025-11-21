import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20">
       <div className="bg-gray-50 py-12 text-center">
        <h1 className="text-4xl font-bold text-school-dark mb-4">Contact Us</h1>
        <p className="text-gray-600">We’re here to assist you. Get in touch.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-school-dark mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Your message has been sent. We will contact you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-blue focus:border-school-blue" placeholder="Your Name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-blue focus:border-school-blue" placeholder="020 ..." />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-blue focus:border-school-blue" placeholder="email@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-blue focus:border-school-blue" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="bg-school-blue text-white font-bold py-3 px-8 rounded-md hover:bg-school-dark transition-colors flex items-center">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info & Map */}
          <div>
             <div className="bg-school-blue text-white p-8 rounded-2xl shadow-xl mb-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 text-school-gold mr-4" />
                    <span>{SCHOOL_INFO.address}</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-6 w-6 text-school-gold mr-4" />
                    <span>{SCHOOL_INFO.phone1}{SCHOOL_INFO.phone2 ? ` / ${SCHOOL_INFO.phone2}` : ''}</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-6 w-6 text-school-gold mr-4" />
                    <span>{SCHOOL_INFO.email}</span>
                  </li>
                </ul>
             </div>

             {/* Fake Map Placeholder */}
             <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/map/800/600" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-50 grayscale" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-3 rounded shadow-lg flex items-center">
                    <MapPin className="h-5 w-5 text-red-600 mr-2" />
                    <span className="font-bold text-gray-800">Kasoa Iron City</span>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;