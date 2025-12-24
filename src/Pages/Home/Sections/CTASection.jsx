import React from 'react';

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
                  <span className="text-xl">🎓</span>
                  I'm a Student
                </button>
                <button className="bg-indigo-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-900 transition border-2 border-white/20 flex items-center justify-center gap-2">
                  <span className="text-xl">👨‍🏫</span>
                  Become an Instructor
                </button>
              </div>
            </div>
            
            {/* Right  */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-9xl">📚</span>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl">
                  ⭐
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-2xl">
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Separate */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          
          {/* Student Box */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-100 hover:border-blue-300 transition">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl mb-4">
              🎓
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              For Students
            </h3>
            <p className="text-gray-600 mb-6">
              Access thousands of courses, learn at your own pace, and get certified in your favorite subjects.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Unlimited course access
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Expert instructors
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Lifetime learning
              </li>
            </ul>
            <button className="w-full primary-btn py-3 transition">
              Start Learning Now
            </button>
          </div>

          {/* Instructor Box */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-100 hover:border-indigo-300 transition">
            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center text-3xl mb-4">
              👨‍🏫
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              For Instructors
            </h3>
            <p className="text-gray-600 mb-6">
              Share your knowledge, build your brand, and earn money by teaching what you love to students worldwide.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Create unlimited courses
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Earn passive income
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Global reach
              </li>
            </ul>
            <button className="w-full primary-btn py-3 transition">
              Start Teaching Today
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CTASection;