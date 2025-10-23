import React, { useState } from "react";

export default function FitnessVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-[40vh] md:h-[80vh] overflow-hidden">
      {/* Background image */}
      <img
        src="https://sporto-theme.myshopify.com/cdn/shop/files/video-img.png?v=1637385274"
        alt="People exercising outdoors"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Play button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 flex items-center justify-center group"
        aria-label="Play Video"
      >
        <div className="bg-red-600 rounded-full md:p-5 transition transform group-hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="40"
            height="40"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="relative w-[90%] max-w-3xl aspect-video bg-black rounded-lg shadow-lg">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-red-500"
              aria-label="Close"
            >
              &times;
            </button>

            {/* YouTube iframe */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Workout Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
