import React, { useState } from "react";
import { Link } from "react-router-dom";

// Simplified product data
const products = [
  {
    id: 1,
    category: "Balls",
    brand: "Sega",
    title: "Baseball Gloves",
    price: 550,
    originalPrice: 650,
    discount: 15,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1622453546792-f3e5e1b7cfdd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    category: "Balls",
    brand: "Deuter",
    title: "American Football",
    price: 500,
    originalPrice: 600,
    discount: 17,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1602524816313-6a9b9b1dbd2a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    category: "Mens",
    brand: "Konex",
    title: "Body Building Equipment",
    price: 370,
    originalPrice: 450,
    discount: 18,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1605296867424-35fc25c9212e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    category: "Balls",
    brand: "Colbian",
    title: "Baseball Bat",
    price: 265,
    originalPrice: 300,
    discount: 12,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1621786030543-c9e2bfae521a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    category: "Womens",
    brand: "Nike",
    title: "Running Shoes",
    price: 420,
    originalPrice: 520,
    discount: 19,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    category: "Mens",
    brand: "Adidas",
    title: "Training Jacket",
    price: 380,
    originalPrice: 450,
    discount: 16,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80",
  },
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-gray-500 ml-1">({rating})</span>
    </div>
  );
};

// Component
export default function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = ["All", "Balls", "Mens", "Womens"];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 uppercase tracking-wide relative z-10">
              New Arrivals
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-red-200 opacity-50 z-0 transform -translate-y-2"></div>
          </div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Discover our latest and trending sports products with exclusive discounts
          </p>
          
          {/* Category Filter */}
          <div className="flex justify-center mt-8 gap-2 md:gap-2 md:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`md:px-6 py-3 px-4 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat
                    ? "bg-linear-to-r from-red-600 to-red-700 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                -{product.discount}%
              </div>
              
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-red-50 hover:text-red-600 transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
              
              {/* Product Image */}
              <div className="relative overflow-hidden h-64 bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Product Details */}
              <div className="p-5">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.brand}</p>
                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">
                  <Link
                    to={`/product/${product.id}`}
                    className="hover:text-red-700 transition-colors duration-300"
                  >
                    {product.title}
                  </Link>
                </h3>
                
                {/* Rating */}
                <div className="mb-3">
                  <StarRating rating={product.rating} />
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-red-700 font-bold text-xl">
                    Rs. {product.price.toFixed(2)}
                  </p>
                  <p className="text-gray-400 line-through text-sm">
                    Rs. {product.originalPrice.toFixed(2)}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-linear-to-r from-red-600 to-red-700 text-white text-sm font-semibold py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-md">
                    Add to Cart
                  </button>
                  <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}