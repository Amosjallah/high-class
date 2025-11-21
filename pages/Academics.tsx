import React from 'react';
import { BookOpen, PenTool, Calculator, Microscope, Globe, Music } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AcademicStat } from '../types';

const DATA: AcademicStat[] = [
  { year: '2019', passRate: 92 },
  { year: '2020', passRate: 94 },
  { year: '2021', passRate: 96 },
  { year: '2022', passRate: 95 },
  { year: '2023', passRate: 98 },
  { year: '2024', passRate: 99 },
];

const Academics: React.FC = () => {
  return (
    <div className="pt-20">
       <div className="bg-school-blue text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Academic Structure</h1>
        <p className="max-w-2xl mx-auto text-blue-200 px-4">
          Comprehensive and progressive learning from early childhood to senior high school.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
           <ProgramCard 
             title="Creche" 
             desc="A nurturing, caring, safe space focused on early motor skills, sensory development, and emotional bonding."
             icon={Music}
           />
           <ProgramCard 
             title="Nursery" 
             desc="A fun, interactive stage introducing literacy, numeracy, and creativity through structured play."
             icon={Globe}
           />
           <ProgramCard 
             title="Kindergarten (KG)" 
             desc="Developing problem-solving, communication, reading, and writing abilities through imaginative learning."
             icon={PenTool}
           />
           <ProgramCard 
             title="Primary" 
             desc="Building strong foundations in English, Mathematics, Science, ICT, Reading, and Creative Arts."
             icon={BookOpen}
           />
           <ProgramCard 
             title="Junior High (JHS)" 
             desc="Advanced learning, critical thinking, discipline, and BECE preparation with dedicated subject teachers."
             icon={Calculator}
           />
           <ProgramCard 
             title="Senior High (SHS)" 
             desc="Academic specialization, leadership building, and preparation for tertiary programs."
             icon={Microscope}
           />
        </div>

        {/* Statistics Section using Recharts */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-school-dark">Academic Excellence Trend</h2>
            <p className="text-gray-500">Our consistent growth in student performance pass rates over the years.</p>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#4b5563" fontSize={12} tickLine={false} axisLine={false} domain={[80, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  cursor={{ fill: '#f3f4f6' }}
                />
                <Bar dataKey="passRate" fill="#1e3a8a" radius={[4, 4, 0, 0]} name="Pass Rate (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">* Represents percentage of students passing major examinations</p>
        </div>

      </div>
    </div>
  );
};

const ProgramCard: React.FC<{title: string, desc: string, icon: any}> = ({ title, desc, icon: Icon }) => (
  <div className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-school-blue/20">
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
      <Icon className="h-6 w-6 text-school-gold" />
    </div>
    <h3 className="text-xl font-bold text-school-dark mb-2 group-hover:text-school-blue transition-colors">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default Academics;