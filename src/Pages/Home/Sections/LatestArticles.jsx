import { Link } from 'react-router';
import articlesData from '../../../../public/articlesData.json';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const LatestArticles = () => {
  const { articles } = articlesData;


  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* --------------------------------------- */}
        <div className="text-center mb-12">
         
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
           Latest Articles
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and trends in education and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group overflow-hidden"
            >
              {/* Image */}
              <figure className="relative overflow-hidden h-56">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className= "badge-lg font-semibold">
                    {article.category}
                  </span>
                </div>
              </figure>

              <div className="card-body p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                </div>

                {/* Title */}
                <h3 className="card-title text-xl font-bold text-slate-900 line-clamp-2 leading-snug mb-3 group-hover:text-indigo-600 transition-colors">
                  <Link to={`/article/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="w-8 h-8 rounded-full ring ring-slate-200 ring-offset-1">
                        <img src={article.author.avatar} alt={article.author.name} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{article.author.name}</p>
                    </div>
                  </div>
                  <Link to={`/article/${article.slug}`}>
                    <button className="btn btn-ghost btn-sm gap-1 group/btn text-indigo-600 hover:text-indigo-700">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/*button */}
        <div className="text-center mt-12">
          <Link to="/articles">
            <button className="btn btn-outline btn-primary btn-lg gap-2 group">
              View All Articles
              
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;