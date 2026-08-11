import { motion } from "motion/react"

function SectionTitle({ title, description }) {
  return (
    <div className="w-full text-center dark:bg-black px-6">
      <motion.h2
      initial={{opacity: 0,y: 30}}
      whileInView={{opacity: 1,y: 0 }}
      transition={{duration: 0.6}}
      viewport={{once: true}}
      
      className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 md:mb-10">
        {title}
      </motion.h2>

      <motion.p
      initial={{opacity: 0,y: 20}}
      whileInView={{opacity: 1,y: 0 }}
      transition={{duration: 0.5,delay: 0.2}}
      viewport={{once: true}}
      
      className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {description}
      </motion.p>
    </div>
  );
}

export default SectionTitle;