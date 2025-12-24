import { BookA, BriefcaseBusiness } from 'lucide-react';
import { CgDesignmodo } from 'react-icons/cg';
import { DiHtml5 } from 'react-icons/di';
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
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
    },
    {
      id: 2,
      name: 'Development',
       icon: (
        <DiHtml5 className="h-8 w-8" / >
      ),
      courseCount: 125,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 3,
      name: 'Business',
       icon: (
        <BriefcaseBusiness className="h-8 w-8" / >
      ),
      courseCount: 87,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      id: 4,
      name: 'Marketing',
      icon: (
        <BookA className="h-8 w-8" / >
      ),
      courseCount: 64,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
   
  ];

  return (
    <section className="pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              className="group"
            >
              <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full group-hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="card-body p-6">
                  {/* Icon Container with Gradient */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>

                  {/* Category Name */}
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {category.name}
                  </h3>

                  {/* Course Count */}
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm font-medium">{category.courseCount} Courses</span>
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Decorative gradient bar */}
                <div className={`h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
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