import React from 'react';
import { Target, Eye, Heart, Award, Zap, UserCheck, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: 'Excellence', icon: Award },
    { title: 'Discipline', icon: UserCheck },
    { title: 'Innovation', icon: Zap },
    { title: 'Respect', icon: Heart },
    { title: 'Integrity', icon: ShieldCheck },
    { title: 'Hard Work', icon: Target },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-school-blue text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-blue-200 px-4">
          High Class College is an institution built on excellence, moral values, innovation, and a passion for holistic child development.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-school-dark mb-6">Shaping the Future Since Establishment</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Since our establishment, we have remained committed to shaping disciplined, well-mannered, and academically strong students. Our focus is to develop young minds who are not only educated but ready to impact society positively.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Located in the vibrant Kasoa Iron City, we blend traditional moral values with modern educational techniques to ensure every child finds their path to success.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
             <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-school-blue">
                <div className="flex items-center mb-2">
                   <Target className="h-6 w-6 text-school-blue mr-2" />
                   <h3 className="text-xl font-bold text-school-dark">Our Mission</h3>
                </div>
                <p className="text-gray-700">To provide world-class, value-driven education that nurtures discipline, character, creativity, and strong academic performance.</p>
             </div>
             <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-school-gold">
                <div className="flex items-center mb-2">
                   <Eye className="h-6 w-6 text-school-gold mr-2" />
                   <h3 className="text-xl font-bold text-school-dark">Our Vision</h3>
                </div>
                <p className="text-gray-700">To become the leading educational institution in Ghana where students develop into responsible global leaders.</p>
             </div>
          </div>
        </div>

        {/* Head of School Message */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
            <img src="https://picsum.photos/seed/headmaster/400/400" alt="Head of School" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
             <h3 className="text-2xl font-bold text-school-dark mb-2">Message from the Head of School</h3>
             <p className="text-gray-600 italic mb-4">
               “At High Class College, we believe every child is destined for greatness. With the right guidance, discipline, and teaching environment, every student can excel. Our goal is to support each learner academically, socially, and morally.”
             </p>
             <p className="font-bold text-school-blue">Headmaster Name</p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-school-dark mb-4">Our Core Values</h2>
           <div className="h-1 w-20 bg-school-gold mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
           {values.map((v, idx) => (
             <div key={idx} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
               <v.icon className="h-8 w-8 text-school-gold mb-3" />
               <span className="font-bold text-gray-800">{v.title}</span>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default About;