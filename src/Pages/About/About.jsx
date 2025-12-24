import { Link } from 'react-router';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About EduX
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-100">
            Empowering learners worldwide with quality education
          </p>
        </div>
      </section>

      {/* Main*/}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              EduX is an online learning platform dedicated to making quality education accessible to everyone. 
              Whether you're looking to advance your career, learn a new skill, or explore a hobby, we provide 
              the courses and resources you need to succeed.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
              <div className="text-slate-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-slate-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
              <div className="text-slate-600">Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">4.9/5</div>
              <div className="text-slate-600">Rating</div>
            </div>
          </div>

          {/* button*/}
          <div className="text-center mt-12">
            <Link to="/all-courses">
              <button className="btn primary-btn btn-lg">
                Explore Courses
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;