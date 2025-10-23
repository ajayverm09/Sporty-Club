// Blogs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../Components/BlogData';

const Blogs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group_Asset-Blog-Members_Walking_On_Treadmills?fmt=auto&h=364&w=630&sm=c&qlt=default&$qlt$&$poi$')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sports Blog</h1>
          
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 font-semibold text-lg text-white">
            <Link to="/" className="hover:text-[#A70500] transition-colors duration-200">
              Home
            </Link>
            <span className="text-white">/</span>
            <span className="text-[#A70500]">Blog</span>
          </nav>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Insights, tips, and stories from the world of sports. Explore our collection of articles covering training, nutrition, psychology, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div key={blog.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm font-semibold text-[#A70500] uppercase tracking-wide">
                    {blog.category}
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#A70500] transition-colors duration-200">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">By {blog.author}</p>
                  <Link 
                    to={`/blog/${blog.id}`}
                    className="text-[#A70500] font-medium hover:underline flex items-center"
                  >
                    Read More
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;