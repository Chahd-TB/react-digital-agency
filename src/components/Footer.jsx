import assets from "../assets/assets"
import { motion } from "motion/react"

function Footer({theme}) {
  return (
    <motion.div
      initial={{opacity: 0,y: 50}}
      whileInView={{opacity: 1,y: 0 }}
      transition={{duration: 0.8}}
      viewport={{once: true}}
    >
      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 md:px-30">
        <div className="flex flex-col lg:flex-row justify-between gap-12 px-6 lg:px-20 pt-20 pb-10">
          {/* Left */}
          <motion.div
        initial={{opacity: 0,x: -30}}
        whileInView={{opacity: 1,x: 0 }}
        transition={{duration: 0.6, delay: 0.2}}
        viewport={{once: true}}
          className="flex flex-col max-w-md">
            <img
              src={theme === "light" ? assets.logo : assets.logo_dark}
              alt="Footer Logo"
              className="w-48 md:w-60"
            />

            <p className="text-gray-500 mt-5">
              From strategy to execution, we craft digital solutions that move
              your business forward.
            </p>

            <ul className="flex flex-wrap gap-5 mt-6 text-lg">
              <li>
                <a
                  href="#home"
                  className="text-gray-500 hover:text-primary"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-gray-500 hover:text-primary"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#work"
                  className="text-gray-500 hover:text-primary"
                >
                  Our Work
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-500 hover:text-primary"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{opacity: 0,x: 30}}
            whileInView={{opacity: 1,x: 0 }}
            transition={{duration: 0.6, delay: 0.3}}
            viewport={{once: true}}

          className="flex flex-col gap-4 max-w-lg">
            <h3 className="text-gray-500 text-xl font-semibold">
              Subscribe to our newsletter
            </h3>

            <p className="text-gray-500">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg py-4 px-4 dark:text-white focus:outline-none"
              />

              <button className="bg-primary text-white py-4 px-8 rounded-lg hover:scale-105 transition-transform duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <hr className="border-gray-300 dark:border-gray-700 mx-6 lg:mx-20" />

        <motion.div
         initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{once: true}}
        
        className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 lg:px-20 py-10">
          <p className="text-gray-400 text-center md:text-left">
            © 2023 Your Company. All rights reserved.
          </p>

          <div className="flex gap-5">
            <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6 cursor-pointer" />
            <img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6 cursor-pointer" />
            <img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6 cursor-pointer" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
          </div>
        </motion.div>
      </footer>
    </motion.div>
  )
}

export default Footer
