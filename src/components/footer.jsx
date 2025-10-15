import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IMG } from "../assets/img";

const Footer = () => {
  return (
    <footer className="bg-[#0c3b32] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={IMG.footerLogo}
              alt="footerLogo"
              className="h-12 w-auto sm:h-16 md:h-20"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Et netus et malesuada fames ac turpis egestas integer. Id neque
            aliquam vestibulum morbi. Volutpat est velit egestas dui id ornare.
            Turpis massa.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Information</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Delivery Choices
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Us</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <FaLocationDot className="mt-1 text-white" />
              <span>
                No: 58 A, East Madison Street, Baltimore, MD, USA 4508
              </span>
            </li>
            <li className="flex items-center gap-3">
              <IoCall className="text-white" />
              <span>(000) 123 - 456789</span>
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-white" />
              <span>info@example.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Subscribe Us</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe us to get latest news & useful tips.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 rounded-md bg-transparent border border-gray-400 text-white placeholder-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-[#0c3b32] font-semibold py-3 rounded-md hover:bg-[#d9d9d9] transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col justify-between items-center text-gray-400 text-sm gap-3">
        <p className="text-center">© 2025 Gordon-theme. Design Themes</p>
      </div>
    </footer>
  );
};

export default Footer;
