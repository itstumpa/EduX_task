import { useParams, Link, useNavigate } from 'react-router';
import coursesData from '../../../public/coursesData.json';
import { 
  Star, 
  Clock, 
  Users, 
  PlayCircle, 
  Globe,
} from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { featuredCourses } = coursesData;

  const course = featuredCourses.find(c => c.id === parseInt(id));

  const formatStudentCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  };

  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section */}
      <section className="md:pt-32 pt-22 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="badge badge-warning gap-1">
                  {course.category}
                </span>
                {course.isBestseller && (
                  <span className="badge badge-error gap-1">
                    <Star className="w-3 h-3" />
                    Bestseller
                  </span>
                )}
                <span className="badge badge-info">{course.level}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-200 mb-6">
                {course.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-amber-400">{course.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(course.rating) 
                            ? 'fill-amber-400 text-amber-400' 
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300">({course.reviews.toLocaleString()} reviews)</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3 mb-6">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full ring ring-white ring-offset-2 ring-offset-transparent">
                    <img src={course.instructor.avatar} alt={course.instructor.name} />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Created by</p>
                  <p className="font-semibold text-lg">{course.instructor.name}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-300" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-300" />
                  <span>{formatStudentCount(course.students)} students enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-indigo-300" />
                  <span>English</span>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="card bg-white text-slate-900 shadow-2xl">
                <figure className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                </figure>
                <div className="card-body p-6">
                  {/* Price */}
                  <div className="mb-4">
                    {course.price === 0 ? (
                      <div className="text-4xl font-bold text-emerald-600">Free</div>
                    ) : (
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-bold text-slate-900">${course.price}</span>
                        {course.originalPrice && (
                          <span className="text-xl text-slate-400 line-through">
                            ${course.originalPrice}
                          </span>
                        )}

                      </div>
                    )}
                  </div>

                  {/* Button */}
                  <button className="btn primary-btn btn-lg w-full mb-3">
                    Enroll Now
                  </button>
                  <button className="btn  btn-lg w-full mb-3">
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Description</h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p>
                    This comprehensive course is designed to take you from beginner to advanced level. 
                    You'll learn through a combination of video lectures, hands-on projects, and quizzes 
                    that reinforce your understanding.
                  </p>
                  <p>
                    Our instructor, {course.instructor.name}, brings years of industry experience and 
                    has taught thousands of students worldwide. The curriculum is regularly updated to 
                    reflect the latest industry trends and best practices.
                  </p>
                  <p>
                    By the end of this course, you'll have a solid foundation and the confidence to 
                    apply your new skills in real-world scenarios.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CourseDetails;