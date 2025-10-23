import React from "react";

export default function HomeHero() {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[90vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://sporto-theme.myshopify.com/cdn/shop/files/slider-1.jpg?v=1640329743')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-left text-white px-8 md:px-20 max-w-3xl">
        <p className="text-sm tracking-widest mb-4 font-semibold text-gray-200">
          ELEGANT LOOK
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-red-700">
          REAL ATHLETES <br /> RUN MILES
        </h1>

        <button className="mt-8 bg-white text-red-700 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-red-700 hover:text-white transition-all duration-300">
          EXPLORE NOW
        </button>
      </div>
    </section>
  );
}
