import React from 'react';
import { CheckCircle, FileText, DollarSign, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admissions: React.FC = () => {
  return (
    <div className="pt-20">
       {/* Header */}
       <div className="bg-school-dark text-white py-16 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/school.png')]"></div>
        <h1 className="text-4xl font-bold mb-4 relative z-10">Join the High Class Family</h1>
        <p className="max-w-2xl mx-auto text-gray-300 px-4 relative z-10">
          We welcome new students into a community that values excellence, discipline, and growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <div>
            <h2 className="text-2xl font-bold text-school-dark mb-6 border-b-2 border-school-gold inline-block pb-2">Admission Requirements</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold text-school-blue mb-4">Creche / Nursery / Kindergarten</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> Birth certificate
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> Two passport-sized photos
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> Parent/guardian contact details
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-school-blue mb-4">Primary / JHS / SHS</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> Previous school report
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> Transfer letter (if necessary)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> Completed admission form
                </li>
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="bg-school-light p-8 rounded-2xl">
             <h2 className="text-2xl font-bold text-school-dark mb-6">How to Apply</h2>
             <div className="space-y-6">
               <div className="flex">
                 <div className="flex-shrink-0 h-10 w-10 rounded-full bg-school-blue text-white flex items-center justify-center font-bold mr-4">1</div>
                 <div>
                   <h4 className="font-bold text-lg">Visit Campus</h4>
                   <p className="text-gray-600 text-sm">Visit us at Office Road, Kasoa Iron City to see our facilities.</p>
                 </div>
               </div>
               <div className="flex">
                 <div className="flex-shrink-0 h-10 w-10 rounded-full bg-school-blue text-white flex items-center justify-center font-bold mr-4">2</div>
                 <div>
                   <h4 className="font-bold text-lg">Get the Form</h4>
                   <p className="text-gray-600 text-sm">Pick up an admission form from the admin office or download it online.</p>
                 </div>
               </div>
               <div className="flex">
                 <div className="flex-shrink-0 h-10 w-10 rounded-full bg-school-blue text-white flex items-center justify-center font-bold mr-4">3</div>
                 <div>
                   <h4 className="font-bold text-lg">Submit & Pay</h4>
                   <p className="text-gray-600 text-sm">Submit documents and pay the processing fee.</p>
                 </div>
               </div>
               <div className="flex">
                 <div className="flex-shrink-0 h-10 w-10 rounded-full bg-school-blue text-white flex items-center justify-center font-bold mr-4">4</div>
                 <div>
                   <h4 className="font-bold text-lg">Confirmation</h4>
                   <p className="text-gray-600 text-sm">Await admission letter and orientation date.</p>
                 </div>
               </div>
             </div>

             <div className="mt-8">
               <Link to="/contact" className="block w-full py-3 bg-school-gold text-center font-bold text-school-dark rounded hover:bg-yellow-500 transition-colors">
                 Contact Admission Office
               </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;