import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react"

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "091eaab2-d8b1-469f-80eb-9d607eeb7df9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!")
      event.target.reset();
    } else {
      toast.error(data.message)
    }
  };

  return (
    <>
      {/* Contact */}
      <motion.section

        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{ staggerChildren: 0.2}}
        id="contact"
        className="w-full dark:bg-black mt-16 md:mt-24 px-6"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 md:mb-10">
            Reach out to us
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>
        </div>

        <motion.form
        initial={{opacity: 0,y: 30}}
        whileInView={{opacity: 1,y: 0 }}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{once: true}}

          onSubmit={onSubmit}
          className="flex flex-col items-center py-10 md:py-16"
        >
          {/* Name + Email */}
          <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl">
            <div className="flex-1 flex flex-col gap-3">
              <label className="text-gray-500 dark:text-white">
                Name
              </label>

              <div className="relative">
                <img
                  src={assets.person_icon}
                  alt=""
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                />

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-4 pl-12 pr-4 dark:text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-3">
              <label className="text-gray-500 dark:text-white">
                Email
              </label>

              <div className="relative">
                <img
                  src={assets.email_icon}
                  alt=""
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-4 pl-12 pr-4 dark:text-white focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-3 mt-8 w-full max-w-5xl">
            <label className="text-gray-500 dark:text-white">
              Message
            </label>

            <textarea
              name="message"
              required
              rows="6"
              placeholder="Enter your message"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-4 resize-none dark:text-white focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="w-full max-w-5xl mt-10">
            <button
              type="submit"
              className="bg-primary text-white py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              Submit
              <img
                src={assets.arrow_icon}
                alt=""
                className="w-5 h-5"
              />
            </button>
          </div>

         
        </motion.form>
      </motion.section>

    </>
  );
}

export default Contact;