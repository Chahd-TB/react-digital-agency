import assets, { company_logos } from "../assets/assets";
import { motion } from "motion/react"

function Hero() {
  return (
    <div
      id="home"
      className=" dark:bg-black w-full pt-20 overflow-hidden"
    >
      {/* Hero + Companies Wrapper */}
      <motion.div 
      initial={{opacity: 0,y: 20}}
      whileInView={{opacity: 1,y: 0 }}
      transition={{duration: 0.5,delay: 0.7}}
      viewport={{once: true}}
  
      className="relative overflow-visible">
        {/* Background Image 2 */}
        <img
          src={assets.bgImage2}
          alt=""
          className="absolute -bottom-32 lg:-bottom-90 -left-24 lg:-left-50 w-[140%] lg:w-5/6 pointer-events-none dark:hidden"
        />

        {/* Trusted By */}
        <div className="flex items-center justify-center border-2 border-gray-200 dark:border-gray-600 rounded-full w-fit px-4 py-2 mt-16 lg:mt-25 mx-auto">
          <img
            src={assets.group_profile}
            alt="profile"
            className="w-16 sm:w-20 lg:w-25 h-auto"
          />

          <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-white px-3">
            Trusted by 10k+ people
          </p>
        </div>

        {/* Hero */}
        <div
  className="
    relative flex flex-col items-center justify-center w-full px-6
    bg-no-repeat
    bg-position-[300%_50px]
    md:bg-position-[300%_-40px]
    bg-size-[90%]
  "
  style={{
    backgroundImage: `url(${assets.bgImage1})`,
  }}
>
          {/* Hide bg in dark mode */}
          <div className="absolute inset-0 bg-black hidden dark:block"></div>

          <motion.h1
            initial={{opacity: 0,y: 40}}
            whileInView={{opacity: 1,y: 0 }}
            transition={{duration: 0.6,delay: 0.8}}
            viewport={{once: true}}
          className="relative z-10 text-center text-gray-800 dark:text-white font-bold leading-tight mt-10 w-full lg:w-4/6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            Turning imagination into{" "}
            <span className="bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              digital
            </span>{" "}
            impact.
          </motion.h1>

          <motion.p
          initial={{opacity: 0,y: 30}}
          whileInView={{opacity: 1,y: 0 }}
          transition={{duration: 0.5,delay: 1}}
          viewport={{once: true}}

          className="relative z-10 text-center text-gray-600 dark:text-gray-400 mt-6 mb-10 w-full sm:w-4/5 lg:w-3/6 text-base sm:text-lg lg:text-2xl">
            Creating meaningful connections and turning big ideas into
            interactive experiences.
          </motion.p>

          <motion.img 
            initial={{opacity: 0,scale: 0.9}}
            whileInView={{opacity: 1,scale: 1 }}
            transition={{duration: 0.6,delay: 2}}
            viewport={{once: true}}

            src={assets.hero_img}
            alt="hero"
            className="relative z-10 w-full sm:w-5/6 lg:w-3/4 h-auto"
          />
        </div>

        {/* Companies */}
        <motion.div 
        initial={{opacity: 0,y: 30}}
        whileInView={{opacity: 1,y: 0 }}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        
        className="relative z-10 flex flex-col items-center justify-center w-full py-16 lg:py-24 px-6">
          <motion.p
 
          initial={{opacity: 0,y: 20}}
          whileInView={{opacity: 1,y: 0 }}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          className="text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-8 lg:mb-10 text-center">
            Trusted by Leading Companies
          </motion.p>

          <motion.div 
          initial="hidden"
          whileInView="visible"
          transition={{staggerChildren: 0.1}}
          viewport={{once: true}}
       className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-10 flex-wrap">
            {company_logos.map((logo, index) => (
              <motion.img

              variants={{
                hidden: { opacity: 0,y: 10},
                visible: { opacity: 1,y: 0}
              }}
              transition={{ duration: 0.4}}

                key={index}
                src={logo}
                alt={`Company ${index + 1}`}
                className="w-20 sm:w-24 lg:w-30 h-auto"
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Next Section */}
      <div
        id="services"
        className="w-full text-center py-16 lg:py-24 relative z-20  dark:bg-black px-6"
      >
        <h2 className="text-gray-800 dark:text-white font-bold mb-6 lg:mb-10 text-4xl sm:text-5xl lg:text-6xl">
          How can we help?
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg lg:text-lg">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
      </div>
    </div>
  );
}

export default Hero;