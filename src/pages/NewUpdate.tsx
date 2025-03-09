import DefaultLayout from "@/layouts/default";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, staggerChildren: 0.2 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const NewUpdate = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DefaultLayout>
      <section
        className="dark:bg-gray-900 bg-white dark:text-white py-16 px-4 text-center"
        ref={sectionRef}
      >
        {/* Hero Section with Message */}
        <motion.div
          className="max-w-6xl mx-auto mb-12"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6"
            variants={wordVariants}
          >
            A Special Message from the Owner
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-10"
            variants={wordVariants}
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            Hello, and welcome to our platform! As the owner, I wanted to take a moment to personally thank you for being part of our community. We're committed to providing you with the best possible experiences, whether you're booking for a dinner date, a coffee hangout, or a private party. Your satisfaction and enjoyment are our top priority!
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-10"
            variants={wordVariants}
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            We are continuously working to improve and expand our offerings, ensuring that you always have access to exciting new teasers and experiences. Stay tuned for upcoming updates, special offers, and unique content tailored to your needs!
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-10"
            variants={wordVariants}
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            Thank you for your continued support. We're thrilled to have you on this journey with us, and we look forward to delivering even more unforgettable moments to you soon!
          </motion.p>
        </motion.div>

        {/* Additional Updates or Information */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {/* Update Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group transform transition duration-300 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1521715541422-b7b52f5d2e0f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxkaW5uZXIlMjBkYXRlJTIwY29mZmVlfGVufDB8fHx8fDE2MjYzNzQwMTk&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Event Update"
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Exciting New Experiences Coming Soon
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                We're working on bringing you even more exciting teasers and experiences. Keep an eye out for new options that will be available soon!
              </p>
            </div>
          </div>

          {/* Update Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group transform transition duration-300 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1528825871115-c10bd84dbd19?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvcnR1b3VzfGVufDB8fHx8fDE2MjYzNzQwMTk&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Exciting News"
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                We're Expanding Our Offerings
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Our goal is to offer a variety of fun and exciting experiences for you to enjoy with your friends and loved ones. More teaser options are on the way!
              </p>
            </div>
          </div>

          {/* Update Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group transform transition duration-300 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1502867461731-91d28ab89f9d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fHBhdGllZXxlbnwwfDB8fHx8fDE2MjYzNzQwMTk&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Special Offer"
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Stay Tuned for Special Offers
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                We're planning some special offers just for you. Stay tuned to our site and social media for the latest updates and deals!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <a
            href="/book-now"
            className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-4 px-8 rounded-lg transition duration-300 ease-in-out"
          >
            Book Your Experience Now
          </a>
        </motion.div>
      </section>
    </DefaultLayout>
  );
};

export default NewUpdate;
