import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Work from "./components/Work";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import SectionTitle from "./components/SectionTitle";

import { teamData, cards, works } from "./assets/assets";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen dark:bg-black transition-colors duration-300">

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Toast Notifications */}
      <Toaster />

      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Hero */}
      <div id="home">
        <Hero />
      </div>

      {/* Services */}
      <div
        id="services"
        className="flex justify-center mb-30"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-24 md:mx-40">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <Card {...card} />
            </motion.div>
          ))}

        </div>
      </div>

      {/* Work Section */}
      <div id="work">
        <SectionTitle
          title="Our latest work"
          description="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </div>

      {/* Work Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-20 w-11/12 lg:w-6/7 mx-auto">
        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <Work {...work} />
          </motion.div>
        ))}
      </div>

    {/* Team Section */}
        <SectionTitle
          title="Meet the team"
          description="A passionate team of digital experts dedicated to your brand's success."
        />

        {/* Team Cards */}
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-11/12 max-w-7xl mx-auto py-10">

          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Team {...member} />
            </motion.div>
          ))}

        </motion.div>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer theme={theme} />

    </div>
  );
}

export default App;