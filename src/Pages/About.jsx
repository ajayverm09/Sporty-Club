import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import FitnessVideo from "../Components/HomeVideo";
import SportsGallery from "../Components/HomeGallery";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
    bio: "Former Olympic athlete with 15+ years in sports retail"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Sports equipment expert and product innovator"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Brand strategist passionate about sports community"
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Logistics expert ensuring quality delivery"
  }
];

// Statistics data
const stats = [
  { number: "500K+", label: "Happy Customers" },
  { number: "10K+", label: "Products" },
  { number: "50+", label: "Brands" },
  { number: "15+", label: "Years Experience" }
];

// Values data
const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "Quality First",
    description: "We only offer products that meet our rigorous quality standards"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
    title: "Community Driven",
    description: "Building a community of sports enthusiasts and athletes"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    title: "Performance Focus",
    description: "Enhancing athletic performance through innovative gear"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
    title: "Passion for Sports",
    description: "Founded by athletes, for athletes who love the game"
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    sport: "Professional Runner",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    testimonial: "The running shoes I purchased from this store completely transformed my training. The quality is exceptional, and the staff helped me find the perfect fit for my running style. I've improved my personal best by 15 seconds!",
    featured: true
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    sport: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    testimonial: "As a yoga instructor, I need reliable equipment that can withstand daily use. The yoga mat and props I bought here have exceeded my expectations. My students keep asking where I got them!",
    featured: false
  },
  {
    id: 3,
    name: "James Wilson",
    sport: "Basketball Player",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    testimonial: "I've been shopping here for all my basketball gear for the past three years. The quality is unmatched, and their customer service is exceptional. They truly understand what athletes need.",
    featured: false
  },
  {
    id: 4,
    name: "Sophia Chen",
    sport: "Swimmer",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    testimonial: "The swimwear and training equipment I purchased have helped me prepare for competitions. The staff's knowledge about swimming gear is impressive, and they recommended products that perfectly match my needs.",
    featured: false
  },
  {
    id: 5,
    name: "Ethan Miller",
    sport: "Gym Enthusiast",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    testimonial: "From weights to workout clothes, this store has everything I need for my fitness journey. The quality is outstanding, and I love that they carry brands I can't find elsewhere.",
    featured: false
  },
  {
    id: 6,
    name: "Olivia Taylor",
    sport: "Tennis Player",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    testimonial: "The tennis racket I bought here has improved my game significantly. The staff took time to understand my playing style and recommended the perfect equipment. I couldn't be happier!",
    featured: false
  }
];

export default function AboutUs() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section 
          id="hero" 
          ref={addToRefs}
          className={`relative h-[600px] bg-linear-to-r from-gray-900 to-gray-700 overflow-hidden transition-all duration-1000 ${
            visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0">
            <img 
              src="https://sporto-theme.myshopify.com/cdn/shop/files/abo01.jpg?v=1640324156"
              alt="Sports equipment"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="bg-black/50 inset-0 absolute"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Athletes Since 2008
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                We're more than just a sports store - we're a community dedicated to helping you achieve your athletic goals with the best gear and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/shop"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
                  aria-label="Shop for sports equipment"
                >
                  Shop Now
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                  aria-label="Contact us for more information"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section 
          id="stats" 
          ref={addToRefs}
          className={`md:py-16 py-5 bg-gray-50 transition-all duration-1000 ${
            visibleSections.has("stats") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 uppercase tracking-wide text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section 
          id="about" 
          ref={addToRefs}
          className={`md:py-20 py-5 transition-all duration-1000 ${
            visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  What started as a passion project by former Olympic athletes has grown into one of the most trusted names in sports retail. We understand what athletes need because we've been there - on the field, in the gym, and at the starting line.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Today, we're proud to serve over 500,000 customers worldwide, offering everything from professional-grade equipment to everyday athletic wear. Our commitment to quality, innovation, and community remains at the heart of everything we do.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're a professional athlete or just starting your fitness journey, we're here to support you every step of the way with expert advice, top-quality products, and a community that shares your passion.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://sporto-theme.myshopify.com/cdn/shop/files/abo02.jpg?v=1640326568"
                  alt="Our store interior with sports equipment"
                  className="rounded-2xl shadow-2xl md:h-screen w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section 
          id="values" 
          ref={addToRefs}
          className={`md:py-20 py-5 bg-gray-50 transition-all duration-1000 ${
            visibleSections.has("values") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do, from product selection to customer service
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section 
          id="video" 
          ref={addToRefs}
          className={`md:py-20 py-5 transition-all duration-1000 ${
            visibleSections.has("video") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                See Us In Action
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Take a behind-the-scenes look at our commitment to quality and innovation
              </p>
            </div>
            <div className="relative">
              <FitnessVideo />
            </div>
          </div>
        </section>

        {/* Testimonials Section - Replaced Timeline */}
        <section 
          id="testimonials" 
          ref={addToRefs}
          className={`md:py-20 py-5 bg-gray-50 transition-all duration-1000 ${
            visibleSections.has("testimonials") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Athletes Say About Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real stories from real athletes who trust our products for their performance
              </p>
            </div>
            
            {/* Featured Testimonial */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-full -mr-16 -mt-16 opacity-10"></div>
                <div className="relative z-10">
                  <div className="flex mb-2 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="md:w-6 md:h-6 w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-md md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                    "{testimonials[activeTestimonial].testimonial}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-red-600">{testimonials[activeTestimonial].sport}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'bg-red-600 w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Grid of Other Testimonials */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.filter((_, index) => index !== activeTestimonial).map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-red-600 text-xs">{testimonial.sport}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section 
          id="team" 
          ref={addToRefs}
          className={`md:py-20 py-5 transition-all duration-1000 ${
            visibleSections.has("team") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The passionate individuals behind our mission to empower athletes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className="text-center group transition-all duration-700"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img 
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="cta" 
          ref={addToRefs}
          className={`md:py-20 py-5 bg-linear-to-r from-red-600 to-red-700 transition-all duration-1000 ${
            visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Game?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join thousands of athletes who trust us for their sports equipment needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/shop"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                aria-label="Start shopping for sports equipment"
              >
                Start Shopping
              </Link>
              <Link 
                to="/newsletter"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                aria-label="Subscribe to our newsletter for deals"
              >
                Subscribe for Deals
              </Link>
            </div>
          </div>
        </section>
      </div>
      <SportsGallery />
    </div>
  );
}