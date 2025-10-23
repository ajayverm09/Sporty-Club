// SingleBlog.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../Components/BlogData';

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogData.find(item => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#A70500] mb-4">Blog Not Found</h1>
          <p className="text-xl text-gray-700 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blogs" 
            className="inline-block px-6 py-3 bg-[#A70500] text-white font-medium rounded-md hover:bg-red-800 transition-colors duration-200"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${blog.image})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{blog.title}</h1>
          
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 font-semibold text-lg text-white">
            <Link to="/" className="hover:text-[#A70500] transition-colors duration-200">
              Home
            </Link>
            <span className="text-white">/</span>
            <Link to="/blogs" className="hover:text-[#A70500] transition-colors duration-200">
              Blog
            </Link>
            <span className="text-white">/</span>
            <span className="text-[#A70500]">{blog.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-[#A70500] hover:underline mb-6"
          >
            <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blogs
          </Link>
          
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="text-sm font-semibold text-[#A70500] uppercase tracking-wide mr-3">
                {blog.category}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-500 ml-3">{blog.date}</span>
            </div>
            <p className="text-lg text-gray-600">By {blog.author}</p>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-[#A70500] transition-colors duration-200"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-[#A70500] transition-colors duration-200"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-[#A70500] transition-colors duration-200"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <Link 
              to="/blogs" 
              className="inline-block px-6 py-3 bg-[#A70500] text-white font-medium rounded-md hover:bg-red-800 transition-colors duration-200"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;