import React, { useState } from "react";

const ClubSection = () => {
  const [activeTab, setActiveTab] = useState("courses");

  const features = [
    {
      id: "courses",
      title: "Professional Courses",
      description: "Expert-led training programs for all skill levels",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      image: "https://sporto-theme.myshopify.com/cdn/shop/files/block1-img.png?v=1637382888"
    },
    {
      id: "tournaments",
      title: "Competitive Tournaments",
      description: "Regular competitions for all ages and skill levels",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
        </svg>
      ),
      image: "https://sporto-theme.myshopify.com/cdn/shop/files/block2-img.png?v=1637383445"
    },
    {
      id: "community",
      title: "Athlete Community",
      description: "Connect with like-minded sports enthusiasts",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      image: "https://sporto-theme.myshopify.com/cdn/shop/files/block3-img.png?v=1637383479"
    }
  ];

  return (
    <section className="bg-linear-to-b from-gray-50 to-white text-black md:py-20 py-4 px-6 md:px-16" aria-labelledby="club-heading">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase font-semibold tracking-widest text-red-600 mb-2">
          Real Athletes Run Miles
        </p>
        <h2 id="club-heading" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Our Club Organizes <span className="text-red-700">Courses & Tournaments</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          Placerat in egestasolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
          accumsan lacus vel facilisis.
        </p>
      </div>

      {/* Tab Navigation - Mobile & Desktop */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex flex-col sm:flex-row p-1 md:bg-gray-100 rounded-full w-full sm:w-auto">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === feature.id
                  ? "bg-red-700 text-white shadow-lg"
                  : "text-gray-700 hover:text-red-700"
              }`}
              aria-label={`View ${feature.title}`}
            >
              {feature.icon}
              <span className="text-sm sm:text-base">{feature.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid md:grid-cols-2 items-center gap-12 mb-3 md:mb-20">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {features.find(f => f.id === activeTab).title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            {features.find(f => f.id === activeTab).description}
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Placerat in egestasolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="bg-red-700 text-white py-3 px-8 rounded-full font-semibold hover:bg-red-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 shadow-lg"
              aria-label="Shop for sports products"
            >
              Shop Now
            </button>
            <button 
              className="border-2 border-gray-300 text-gray-700 py-3 px-8 rounded-full font-semibold hover:border-red-700 hover:text-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
              aria-label="Learn more about our club"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 relative overflow-hidden rounded-2xl shadow-xl">
          <img
            src={features.find(f => f.id === activeTab).image}
            alt={features.find(f => f.id === activeTab).title}
            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            New Season
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Best Quality Products */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Best Quality Products
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Premium sports equipment designed for performance and durability.
          </p>
          <div className="relative overflow-hidden rounded-xl h-48">
            <img
              src="https://sporto-theme.myshopify.com/cdn/shop/files/bloc2-img.png?v=1637383445"
              alt="High-quality running shoes"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Handcrafted by Professionals */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Handcrafted by Professionals
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Expertly crafted gear by athletes who understand the sport's demands.
          </p>
          <div className="relative overflow-hidden rounded-xl h-48">
            <img
              src="https://sporto-theme.myshopify.com/cdn/shop/files/block3-img.png?v=1637383479"
              alt="Professional football player"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-linear-to-r from-red-700 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Join Our Community?
        </h3>
        <p className="text-red-100 mb-8 max-w-2xl mx-auto">
          Become a member today and get access to exclusive courses, tournaments, and a community of passionate athletes.
        </p>
        <button 
          className="bg-white text-red-700 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-700 shadow-lg"
          aria-label="Join our club now"
        >
          Join Club Now
        </button>
      </div>
    </section>
  );
};

export default ClubSection;