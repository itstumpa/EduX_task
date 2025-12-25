import { Link } from "react-router";
import student from "../../../assets/student.jpg";
import { BadgeTurkishLiraIcon, Book, BookOpen, LucideWatch, Watch, WatchIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="pt-20 lg:pt-34">
        <div className="w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* left  */}
          <div className="space-y-6">
            <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-medium px-4 py-1 rounded-full">
              Learn Smarter
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Skills <br />
              <span className="text-indigo-600">At Your Own Pace</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
              Personalized courses, real-world projects, and flexible schedules
              designed to help you grow confidently in your career.
            </p>

            <div className="flex gap-4 pt-2">
              <Link to="/all-courses">
                <button className="primary-btn px-6 py-3 text-sm sm:text-base">
                  Get Started
                </button>
              </Link>

              <Link to="/about">
                <button className="border border-gray-300 px-6 py-3 rounded-md text-sm sm:text-base hover:bg-gray-100 transition">
                  Learn More
                </button>
              </Link>
            </div>
             {/* Trust Indicators */}
        <div
          className="flex flex-wrap  gap-8 sm:gap-12 mt-5 text-black/80"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600">
              500+
            </div>
            <div className="text-sm sm:text-base  mt-1">
              Expert Courses
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600">
              50K+
            </div>
            <div className="text-sm sm:text-base mt-1">
              Active Students
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600">
              4.9/5
            </div>
            <div className="text-sm sm:text-base mt-1">
              Average Rating
            </div>
          </div>
        </div>
          </div>

          {/* right  */}

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={student}
                alt="Student learning"
                className="w-full h-[400px] sm:h-[450px] object-cover"
              />

              {/* Floating card */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md">
                <p className="text-sm font-semibold text-gray-800">
                  📚 12+ Courses
                </p>
                <p className="text-xs text-gray-600">
                  Learn from industry experts
                </p>
              </div>
            </div>
          </div>
        </div>
       {/* Feature Cards */}
      <div className=" py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 transform hover:rotate-6 transition-transform">
                  <BookOpen className="text-white"/>
                </div>
                <h3 className="card-title text-xl text-slate-800">Expert-Led Courses</h3>
                <p className="text-slate-600">Learn from industry professionals with real-world experience</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 transform hover:rotate-6 transition-transform">
                  <LucideWatch className="text-white"/>
                </div>
                <h3 className="card-title text-xl text-slate-800">Learn at Your Pace</h3>
                <p className="text-slate-600">Flexible schedules that fit your lifestyle and commitments</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-4 transform hover:rotate-6 transition-transform">
                 <BadgeTurkishLiraIcon className="text-white"/>
                </div>
                <h3 className="card-title text-xl text-slate-800">Certified Programs</h3>
                <p className="text-slate-600">Earn recognized certificates to boost your career prospects</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
