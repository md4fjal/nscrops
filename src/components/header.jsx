import { useState, useEffect } from "react";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { WiTime9 } from "react-icons/wi";
import { FiMenu, FiX } from "react-icons/fi";
import { IMG } from "../assets/img";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#journey", label: "Journey" },
    { href: "#products", label: "Products" },
    { href: "#clients", label: "Clients" },
  ];

  const contactInfo = [
    {
      icon: <IoIosCall size={18} className="text-sgreen" />,
      content: "7489655017",
      href: "tel:7489655017",
    },
    {
      icon: <WiTime9 size={18} className="text-sgreen" />,
      content: "Mon-Fri: 9:00 18:00",
      href: "#",
    },
    {
      icon: <IoMdMail size={18} className="text-sgreen" />,
      content: "nscropscience2@gmail.com",
      href: "mailto:nscropscience2@gmail.com",
    },
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);

    if (location.pathname !== "/") {
      window.location.href = `/${href}`;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getLinkHref = (href) => {
    if (location.pathname !== "/") {
      return `/${href}`;
    }
    return href;
  };

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const hash = window.location.hash || "#home";
    setActiveLink(hash);
  }, [location]);

  return (
    <header
      className={`w-full transition-transform duration-300 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 py-3">
            <p className="text-sgreen font-semibold text-sm text-center lg:text-left">
              <span className="text-slime">Note:</span> Growing Your
              Relationship, While maintaining your landscape!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  {item.icon}
                  <a
                    href={item.href}
                    className="text-sgray font-medium transition-colors duration-300 group-hover:text-sgreen"
                  >
                    {item.content}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white sticky top-0 z-50 transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={IMG.headerLogo}
                  alt="Company Logo"
                  loading="lazy"
                  className="h-12 w-auto sm:h-16 md:h-20"
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={getLinkHref(link.href)}
                  onClick={() => handleLinkClick(link.href)}
                  className={`font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    activeLink === link.href
                      ? "text-slime"
                      : "text-sgreen hover:text-slime"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={getLinkHref("#contact-us")}
              onClick={() => handleLinkClick("#contact-us")}
              className="hidden sm:inline-block bg-sgreen text-white font-semibold text-lg px-6 py-2.5 rounded-3xl hover:bg-slime hover:scale-105 transform transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex items-center justify-center bg-sgreen text-white font-semibold text-sm px-4 py-2 rounded-3xl hover:bg-slime hover:scale-105 transform transition-all duration-300"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="border-t border-gray-100 py-4 animate-fadeIn">
              <div className="flex flex-col gap-4 items-center">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={getLinkHref(link.href)}
                    onClick={() => handleLinkClick(link.href)}
                    className={`font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                      activeLink === link.href
                        ? "text-slime"
                        : "text-sgreen hover:text-slime"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href={getLinkHref("#contact-us")}
                  onClick={() => {
                    handleLinkClick("#contact-us");
                    setMenuOpen(false);
                  }}
                  className="bg-sgreen text-white font-semibold text-lg px-6 py-2.5 rounded-3xl hover:bg-slime hover:scale-105 transform transition-all duration-300 text-center mt-2 shadow-md hover:shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
