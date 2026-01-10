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
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const getLinkHref = (href) => {
    if (location.pathname !== "/") {
      return `/${href}`;
    }
    return href;
  };

  const handleHashLinkClick = (href) => {
    if (location.pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#0c3b32] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Link to="/">
              <img
                src={IMG.footerLogo}
                alt="footerLogo"
                className="h-12 w-auto sm:h-16 md:h-20"
                loading="lazy"
              />
            </Link>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Boost your crop yield with our premium fertilizers. Eco-friendly,
            nutrient rich solutions designed for healthy plants.
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
              <a
                href={getLinkHref("#about-us")}
                onClick={() => handleHashLinkClick("#about-us")}
                className="hover:text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href={getLinkHref("#journey")}
                onClick={() => handleHashLinkClick("#journey")}
                className="hover:text-white"
              >
                Journey
              </a>
            </li>
            <li>
              <a
                href={getLinkHref("#products")}
                onClick={() => handleHashLinkClick("#products")}
                className="hover:text-white"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href={getLinkHref("#clients")}
                onClick={() => handleHashLinkClick("#clients")}
                className="hover:text-white"
              >
                Clients
              </a>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Us</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <FaLocationDot className="mt-1 text-white" />
              <span>
                130 SR COMPOUND, LASUDIYA MORI, DEWAS NAKA INDORE 452010
              </span>
            </li>
            <li className="flex items-center gap-3">
              <IoCall className="text-white" />
              <a href="tel:7489655017">7489655017</a>
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-white" />
              <a href="mailto:nscropscience2@gmail.com">
                nscropscience2@gmail.com
              </a>
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
        <p className="text-center">
          © 2025 All rights reserved. Designed and developed by{" "}
          <a
            href="https://www.zectagon.com/"
            className="hover:underline"
            target="_blank"
          >
            Zectagon Technologies
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
