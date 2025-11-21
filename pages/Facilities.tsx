import React from 'react';
import { Monitor, Book, Coffee, Bus, Lock, Activity } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    { title: 'Modern Classrooms', desc: 'Bright, spacious, and comfortable rooms designed for effective learning.', img: 'classroom', icon: Book },
    { title: 'Computer Laboratory', desc: 'Updated computers, stable power, and practical ICT training.', img: 'computer_lab', icon: Monitor },
    { title: 'Science Laboratory', desc: 'Hands-on experiments to strengthen understanding in Science.', img: 'science_lab', icon: Activity },
    { title: 'Library', desc: 'Quiet reading space with textbooks, storybooks, and research materials.', img: 'library', icon: Book },
    { title: 'School Bus', desc: 'Reliable transportation for students across Kasoa.', img: 'bus', icon: Bus },
    { title: 'Security', desc: '24/7 monitoring and well-trained guards ensuring safety.', img: 'security', icon: Lock },
  ];

  return (
    <div className="pt-20">
      <div className="bg-school-dark text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Facilities</h1>
        <p className="max-w-2xl mx-auto text-gray-400 px-4">
          High Class College provides a world-class learning environment equipped with modern tools.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                 <img 
                    src={`https://picsum.photos/seed/${item.img}/600/400`} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                 />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-3">
                  <item.icon className="h-5 w-5 text-school-gold mr-2" />
                  <h3 className="text-lg font-bold text-school-dark">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm flex-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;