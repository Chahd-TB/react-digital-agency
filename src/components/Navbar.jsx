import { useState } from "react";
import assets from "../assets/assets";
import { motion } from "motion/react"

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
    initial={{opacity: 0,y: -50}}
    animate={{opacity: 1,y: 0}}
    transition={{duration:0.6,ease:"easeOut"}}
  
    className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <img
          src={theme === "light" ? assets.logo : assets.logo_dark}
          alt="Logo"
          className="h-7 md:h-10 w-auto"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <a
              href="#home"
              className="text-gray-800 dark:text-white border-b border-transparent hover:border-current duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="text-gray-800 dark:text-white border-b border-transparent hover:border-current duration-300"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#work"
              className="text-gray-800 dark:text-white border-b border-transparent hover:border-current duration-300"
            >
              Our Work
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-gray-800 dark:text-white border-b border-transparent hover:border-current duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            className="bg-white dark:bg-gray-800 border dark:border-white rounded-full p-2"
          >
            <img
              src={theme === "light" ? assets.moon_icon : assets.sun_icon}
              alt="Theme"
            />
          </button>

          <a href="#contact">
            <button className="bg-primary text-white px-6 py-2 rounded-full flex items-center gap-2 hover:scale-105 duration-300">
              Connect
              <img src={assets.arrow_icon} alt="" className="w-5" />
            </button>
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            className="bg-white dark:bg-gray-800 border dark:border-white rounded-full p-2"
          >
            <img
              src={theme === "light" ? assets.moon_icon : assets.sun_icon}
              alt="Theme"
            />
          </button>

          <button onClick={() => setMenuOpen(true)}>
            <img
              src={
                theme === "light"
                  ? assets.menu_icon
                  : assets.menu_icon_dark
              }
              alt="Menu"
              className="w-8"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-primary text-white z-50 transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6"
        >
          <img
            src={assets.close_icon}
            alt="Close"
            className="w-6"
          />
        </button>

        <ul className="flex flex-col mt-24 px-10 gap-8 text-lg font-semibold">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>

          <li>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Our Work
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
          </li>

          
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;