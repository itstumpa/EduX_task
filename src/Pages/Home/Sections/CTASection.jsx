import React from 'react';
import { BiBookContent } from 'react-icons/bi';
import { FcManager } from 'react-icons/fc';
import { PiStudent } from 'react-icons/pi';

const CTASection = () => {
  return (
    <div className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Main CTA Banner */}
        <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Learning Journey Today
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Join our learning management system and unlock your potential. Whether you want to learn new skills or share your expertise, we've got you covered.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
                  <span className="text-xl"><PiStudent/></span>
                  I'm a Student
                </button>
                <button className="bg-indigo-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-900 transition border-2 border-white/20 flex items-center justify-center gap-2">
                  <span className="text-xl"><FcManager/></span>
                  Become an Instructor
                </button>
              </div>
            </div>
            
            {/* Right  */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-9xl text-white"><BiBookContent /></span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default CTASection;