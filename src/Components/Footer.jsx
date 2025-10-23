import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import paymethod from "../assets/paymethod.png"; // ✅ your local image

const Footer = () => {
  return (
    <footer
      className="relative bg-[#A70500] text-white pt-10 overflow-hidden"
      style={{
        backgroundImage: `url('https://sporto-theme.myshopify.com/cdn/shop/files/gooter-bg.png?v=1637391327')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Red overlay */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-10 z-10">
        {/* Logo & Description */}
        <div>
          <img
            src="https://sporto-theme.myshopify.com/cdn/shop/files/Footer_logo_d78f320c-dd48-44db-bb58-bc0b39354f37_x50@2x.png?v=1640324079"
            alt="Sporto Logo"
            className="w-40 mb-4"
          />
          <p className="text-sm mb-6 leading-relaxed">
            Placerat in egestas erat imperdiet sed. In ante metus dictum at
            tempor commodo per a lacus.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-9 h-9 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#A70500] transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-9 h-9 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#A70500] transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-9 h-9 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#A70500] transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Service */}
        <div>
          <h3 className="font-bold text-lg mb-4 uppercase">Service</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/blogs" className="hover:underline">Blogs</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4 uppercase">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin size={18} className="mt-1" />
              <span>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} />
              <span>0000 - 123 - 456789</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <span>info@example.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4 uppercase">Newsletter</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-[#A70500] cursor-pointer border border-white hover:bg-[#A70500] hover:text-white font-semibold py-2 rounded transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-10 border-t border-red-400 py-4 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-center items-center text-sm text-gray-200">
          <p>© 2025 Sporto-theme Design Themes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
