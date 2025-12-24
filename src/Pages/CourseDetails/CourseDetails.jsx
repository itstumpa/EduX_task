import { useParams } from "react-router";
import coursesData from "../../../public/coursesData.json";
import { Star, Clock, Users, PlayCircle, Globe } from "lucide-react";
import { useState } from "react";

const CourseDetails = () => {
  const { id } = useParams();
  const { featuredCourses } = coursesData;

  const course = featuredCourses.find((c) => c.id === parseInt(id));
  const [activeModule, setActiveModule] = useState(0);

  const formatStudentCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  };
  const curriculum = [
    {
      title: "Module 1: Introduction",
      lessons: ["Welcome", "Course Overview", "Setup"],
    },
    {
      title: "Module 2: Core Concepts",
      lessons: ["Basics", "Components", "State & Props"],
    },
    {
      title: "Module 3: Advanced Topics",
      lessons: ["Optimization", "Best Practices"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-22  bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-16">
        {/* Tabs */}
        <div className="border-b border-indigo-400 mb-8">
          <div className="flex gap-6 justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button className="pb-3 underline font-semibold">Curriculum</button>
            <button disabled className="text-gray-500 pb-3">
              Overview
            </button>
            <button disabled className="text-gray-500 pb-3">
              Instructor
            </button>
            <button disabled className="text-gray-500 pb-3">
              FAQ
            </button>
            <button disabled className="text-gray-500 pb-3">
              Reviews
            </button>
          </div>
        </div>

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
              <p className="text-xl text-gray-200 mb-6">{course.description}</p>

              <div className="flex justify-between items-center">
                {/* Instructor */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full ring ring-white ring-offset-2 ring-offset-transparent">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Created by</p>
                    <p className="font-semibold text-lg">
                      {course.instructor.name}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-amber-500 font-bold text-sm">
                    {course.rating}
                  </span>
                  <div className="rating rating-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <input
                        key={star}
                        type="radio"
                        name={`rating-${course.id}`}
                        className="mask mask-star-2 bg-amber-400 "
                        checked={star === Math.floor(course.rating)}
                        disabled
                      />
                    ))}
                  </div>
                  <span className="text-xs text-white">
                    ({course.reviews.toLocaleString()})
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-300" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-300" />
                  <span>
                    {formatStudentCount(course.students)} students enrolled
                  </span>
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
                      <div className="text-4xl font-bold text-emerald-600">
                        Free
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-bold text-slate-900">
                          ${course.price}
                        </span>
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
                  <button className="btn  btn-lg w-full mb-3">Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* main */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              {/* curriculum */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Curriculum</h2>

                <div className="space-y-4 ">
                  {curriculum.map((module, index) => (
                    <div key={index} className="border rounded-lg">
                      {/* top */}
                      <button
                        onClick={() => setActiveModule(index)}
                        className="w-full flex justify-between items-center p-4 font-semibold"
                      >
                        {module.title}
                        <span>{activeModule === index ? "-" : "+"}</span>
                      </button>

                      {/* content */}
                      {activeModule === index && (
                        <div className="px-6 pb-4 text-gray-700 ">
                          <ul className="list-disc pl-5 space-y-2">
                            {module.lessons.map((lesson, i) => (
                              <li key={i}>{lesson}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Description
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p>
                    This comprehensive course is designed to take you from
                    beginner to advanced level. You'll learn through a
                    combination of video lectures, hands-on projects, and
                    quizzes that reinforce your understanding.
                  </p>
                  <p>
                    Our instructor, {course.instructor.name}, brings years of
                    industry experience and has taught thousands of students
                    worldwide. The curriculum is regularly updated to reflect
                    the latest industry trends and best practices.
                  </p>
                  <p>
                    By the end of this course, you'll have a solid foundation
                    and the confidence to apply your new skills in real-world
                    scenarios.
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
