import { ArrowDownRight, BookA, BookAIcon, BriefcaseBusiness } from 'lucide-react';
import { BiRightArrow } from 'react-icons/bi';
import { CgDesignmodo } from 'react-icons/cg';
import { DiHtml5 } from 'react-icons/di';
import { FcNext } from 'react-icons/fc';
import { Link } from 'react-router';

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Art & Design',
       icon: (
        <CgDesignmodo className="h-8 w-8" / >
      ),
      courseCount: 38,
      textColor: 'text-pink-600'
    },
    {
      id: 2,
      name: 'Development',
       icon: (
        <DiHtml5 className="h-8 w-8" / >
      ),
      courseCount: 125,
      textColor: 'text-blue-600'
    },
    {
      id: 3,
      name: 'Business',
       icon: (
        <BriefcaseBusiness className="h-8 w-8" / >
      ),
      courseCount: 87,
      textColor: 'text-emerald-600'
    },
    {
      id: 4,
      name: 'Marketing',
      icon: (
        <BookA className="h-8 w-8" / >
      ),
      courseCount: 64,
      textColor: 'text-purple-600'
    },
    {
      id: 4,
      name: 'Computer',
      icon: (
        <BookA className="h-8 w-8" / >
      ),
      courseCount: 164,
      textColor: 'text-purple-600'
    },
    {
      id: 4,
      name: 'Guiter',
      icon: (
        <BookA className="h-8 w-8" / >
      ),
      courseCount: 74,
      textColor: 'text-purple-600'
    },
   
  ];

  return (
    <section className="pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
              Top Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Explore our most popular course categories and start your learning journey today
            </p>
          </div>
          <Link to="/categories">
            <button className="btn btn-outline btn-primary gap-2 group hover:scale-105 transition-transform">
              View All Categories
              <ArrowDownRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={null}
              className="group"
            >
              <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full group-hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="card-body p-6">

                  {/* Category Name */}
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {category.name}
                  </h3>

                  {/* Course Count */}
                  <div className="flex items-center gap-2 text-slate-600">
                   <BookAIcon/>
                    <span className="text-sm font-medium">{category.courseCount} Courses</span>
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Explore</span>
                   <FcNext/>
                    
                  </div>
                </div>                
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile  */}
        <div className="mt-8 text-center sm:hidden">
          <p className="text-sm text-slate-500">Swipe to see more categories →</p>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;