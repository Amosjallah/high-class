import React from 'react';
import { Calendar, Bell } from 'lucide-react';

const EVENTS = [
  { id: 1, title: "New Academic Year Orientation", date: "September 10, 2024", desc: "Welcoming all new and continuing students." },
  { id: 2, title: "Spelling Bee Competition", date: "October 15, 2024", desc: "Inter-class competition to boost literacy." },
  { id: 3, title: "Cultural Exhibition", date: "November 05, 2024", desc: "Celebrating our rich heritage through dress and food." },
  { id: 4, title: "Inter-Class Sports Games", date: "December 01, 2024", desc: "Fitness, discipline, and team spirit activities." },
];

const News: React.FC = () => {
  return (
    <div className="pt-20">
       <div className="bg-school-blue text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">News & Announcements</h1>
        <p className="max-w-2xl mx-auto text-blue-200">Stay updated with academic news and upcoming events.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {EVENTS.map((evt) => (
            <div key={evt.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-md transition-shadow">
               <div className="bg-school-light p-4 rounded-lg flex-shrink-0 text-center min-w-[100px]">
                  <Calendar className="h-6 w-6 text-school-gold mx-auto mb-1" />
                  <span className="text-sm font-bold text-gray-700 block">{evt.date}</span>
               </div>
               <div className="flex-1">
                  <h3 className="text-xl font-bold text-school-dark mb-2">{evt.title}</h3>
                  <p className="text-gray-600">{evt.desc}</p>
               </div>
               <button className="text-school-blue font-bold text-sm hover:text-school-gold whitespace-nowrap">
                 View Details &rarr;
               </button>
            </div>
          ))}
        </div>

        {/* Notice Board */}
        <div className="mt-16 bg-yellow-50 p-8 rounded-xl border border-yellow-100">
           <div className="flex items-center mb-6">
             <Bell className="h-6 w-6 text-yellow-600 mr-3" />
             <h2 className="text-2xl font-bold text-yellow-800">Important Notices</h2>
           </div>
           <ul className="list-disc list-inside space-y-3 text-gray-700">
             <li>Mid-term break starts next Friday. Please pick up wards by 2pm.</li>
             <li>Examination timetable for JHS 3 is now available on the portal.</li>
             <li>PTA meeting scheduled for next month first Saturday.</li>
           </ul>
        </div>
      </div>
    </div>
  );
};

export default News;