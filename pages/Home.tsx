import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Monitor, Users, Star } from 'lucide-react';
import { Feature, Testimonial } from '../types';

const FEATURES: Feature[] = [
  {
    title: 'Qualified Teachers',
    description: 'Experienced educators trained to deliver personalized, high-quality teaching.',
    icon: Users,
  },
  {
    title: 'Safe Environment',
    description: 'A peaceful campus with CCTV monitoring and disciplined culture.',
    icon: ShieldCheck,
  },
  {
    title: 'Modern Facilities',
    description: 'From computer labs to serene classrooms, we offer the tools needed for success.',
    icon: Monitor,
  },
  {
    title: 'Affordable Fees',
    description: 'Quality education made accessible to every family in Kasoa.',
    icon: Star,
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "High Class College has shaped my child into a confident and brilliant student. Their teachers are amazing.",
    author: "Mrs. Osei",
    role: "Parent"
  },
  {
    id: 2,
    text: "The learning environment is excellent. I love this school and the computer labs.",
    author: "Samuel K.",
    role: "JHS Student"
  },
  {
    id: 3,
    text: "Discipline and academic excellence are truly the hallmarks here. Best choice for my kids.",
    author: "Mr. Mensah",
    role: "Parent"
  }
];

const Home: React.FC = () => {
  // State to hold the hero image source
  // Default to the static file, but can be overridden by gallery content
  const [heroImage, setHeroImage] = useState("high_class_college_exterior.jpg");

  // Check local storage for gallery images on component mount
  useEffect(() => {
    try {
      const savedImages = localStorage.getItem('hcc_gallery_images');
      if (savedImages) {
        const parsedImages = JSON.parse(savedImages);
        // If gallery has images, use the most recently added one (first in list)
        if (parsedImages && parsedImages.length > 0) {
          setHeroImage(parsedImages[0].url);
        }
      }
    } catch (e) {
      console.error("Failed to load hero image from gallery storage", e);
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            onError={(e) => {
              // Fallback to placeholder if the image (static or base64) fails to load
              if (e.currentTarget.src !== "https://picsum.photos/seed/school_hero/1920/1080") {
                e.currentTarget.src = "https://picsum.photos/seed/school_hero/1920/1080";
              }
            }}
            alt="High Class College Campus"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-school-blue/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-school-dark/90 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            High Class College
            <span className="block text-school-gold text-2xl md:text-4xl mt-2 font-light">
              Building Great Minds for the Future
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Empowering students through excellence, discipline, creativity, and modern education in the heart of Kasoa Iron City.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/admissions"
              className="w-full sm:w-auto px-8 py-4 bg-school-gold text-school-dark font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-school-blue hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Visit Campus
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://picsum.photos/seed/students_learning/800/600"
                alt="Students Learning"
                className="rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-school-gold uppercase tracking-widest mb-2">Welcome</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-school-dark mb-6">
                Nurturing Confident, Intelligent & Disciplined Leaders
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                High Class College is a leading educational institution located at Office Road, Kasoa Iron City. We provide a safe, supportive, and stimulating learning environment that helps every child reach their full potential.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our curriculum blends strong academics, technology, moral training, and extracurricular activities to shape well-rounded students ready for the future.
              </p>
              <Link to="/about" className="text-school-blue font-bold hover:text-school-gold transition-colors inline-flex items-center">
                Read More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-school-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-school-dark mb-4">Why Choose Us?</h2>
            <div className="h-1 w-20 bg-school-gold mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-school-gold group">
                <div className="w-14 h-14 bg-school-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-school-blue transition-colors">
                  <feature.icon className="h-7 w-7 text-school-blue group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-school-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-school-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Departments</h2>
            <p className="max-w-2xl mx-auto text-blue-100">Comprehensive education stages tailored for every age group.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Creche', 'Nursery', 'Kindergarten', 'Primary', 'JHS', 'SHS'].map((dept, idx) => (
              <Link key={idx} to="/academics" className="block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:bg-school-gold hover:text-school-dark hover:border-school-gold transition-all duration-300">
                <span className="font-bold block">{dept}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-school-dark mb-4">What Parents Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-gray-50 p-8 rounded-xl relative">
                <div className="text-school-gold text-6xl absolute top-4 left-4 opacity-20">"</div>
                <p className="text-gray-700 mb-6 relative z-10 italic">{t.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-school-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-school-dark text-sm">{t.author}</h4>
                    <span className="text-xs text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Map */}
      <section className="bg-school-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Visit Us Today</h2>
            <p className="text-gray-400">Located at Office Road, Kasoa Iron City. Easily accessible and safe.</p>
          </div>
          <Link to="/contact" className="px-8 py-3 bg-school-gold text-school-dark font-bold rounded hover:bg-white transition-colors">
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;