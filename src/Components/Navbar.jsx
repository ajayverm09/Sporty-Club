import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-10 py-4 shadow-md bg-white z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to='/'>
            <img
              src="https://sporto-theme.myshopify.com/cdn/shop/files/Header_logo_1264f8ba-794b-4b2d-bf54-825d0a0f7c1f.png?v=1640326371"
              alt="logo"
              className="w-24 h-9 sm:w-32 sm:h-12"
            />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black my-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Menu for Desktop */}
        <ul className="hidden sm:flex items-center space-x-8">
          {[
            { path: "/", label: "HOME" },
            { path: "/about", label: "ABOUT" },
            { path: "/blogs", label: "BLOGS" },
            { path: "/contact", label: "CONTACT" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-semibold transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-[#A70500] border-b-2 border-[#A70500]"
                    : "text-black hover:text-[#A70500]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button for Desktop */}
        <div className="hidden sm:flex items-center space-x-6 text-xl text-black">
          <div className="relative">
            <Link
              to="/contact"
              className="px-4 py-2 bg-white text-[#A70500] border-2 border-[#A70500] rounded-3xl hover:text-white hover:bg-[#A70500] transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 sm:hidden">
          <ul className="flex flex-col py-4">
            {[
              { path: "/", label: "HOME" },
              { path: "/about", label: "ABOUT" },
              { path: "/blogs", label: "BLOGS" },
              { path: "/contact", label: "CONTACT" },
            ].map((item) => (
              <li key={item.path} className="px-4 py-2">
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-semibold transition-colors duration-200 block ${
                    isActive(item.path)
                      ? "text-[#A70500] border-b-2 border-[#A70500]"
                      : "text-black hover:text-[#A70500]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-4 py-2 mt-2">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 bg-white text-[#A70500] border-2 border-[#A70500] rounded-3xl hover:text-white hover:bg-[#A70500] transition-all block text-center"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
      
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;