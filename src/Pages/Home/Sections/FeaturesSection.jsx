import { Link } from 'react-router';
import coursesData from '../../../../public/coursesData.json';
import { ArrowBigRight, ContactIcon, StarIcon, TimerIcon } from 'lucide-react';
import { FcNext } from 'react-icons/fc';

const FeaturesSection = () => {
  const { featuredCourses } = coursesData;

  const formatStudentCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
           Featured Courses
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our hand-picked selection of top-rated courses taught by industry experts
          </p>
        </div>

        {/* grid start*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredCourses.slice(0, 3).map((course) => (
            <div 
              key={course.id} 
              className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
            >
              {/*thumbnail */}
              <figure className="relative overflow-hidden h-48">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* bestseler */}
                {course.isBestseller && (
                  <div className="absolute top-3 left-3 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <StarIcon className="h-3 w-3 text-red-600" />
                    Bestseller
                  </div>
                )}
                {/* category */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-slate-700">
                  {course.category}
                </div>
              </figure>

              <div className="card-body p-5">
                {/* title */}
                <h3 className="card-title text-base font-bold text-slate-800 line-clamp-1 leading-snug group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h3>

                {/* description */}
                <p className="text-sm text-slate-600 line-clamp-1">
                  {course.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-1">
                  <div className="avatar">
                    <div className="w-8 h-8 rounded-full ring ring-slate-200 ring-offset-1">
                      <img src={course.instructor.avatar} alt={course.instructor.name} />
                    </div>
                  </div>
                  <span className="text-sm text-slate-700 font-medium">{course.instructor.name}</span>
                </div>

                {/* rting */}
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-1">
                    <span className="text-amber-500 font-bold text-sm">{course.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating) ? 'text-amber-400' : 'text-slate-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">({course.reviews.toLocaleString()})</span>
                </div>

                {/*Info */}
                <div className="flex items-center justify-between text-xs text-slate-600 mb-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    <TimerIcon className='w-4 h-4'/>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ContactIcon className='w-4 h-4'/>
                    <span>{formatStudentCount(course.students)} students</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    {course.price === 0 ? (
                      <span className="text-2xl font-bold text-emerald-600">Free</span>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-slate-900">${course.price}</span>
                        {course.originalPrice && (
                          <span className="text-sm text-slate-400 line-through">${course.originalPrice}</span>
                        )}
                      </div>
                    )}
                  </div>
                  <Link to={`/course/${course.id}`}>
                    <button className="btn btn-primary btn-sm gap-1 group/btn">
                      View More
                      <FcNext />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  Button */}
        <div className="text-center mt-12">
          <Link to="/all-courses">
            <button className="btn btn-outline btn-primary btn-lg gap-2 group">
              Explore All Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;