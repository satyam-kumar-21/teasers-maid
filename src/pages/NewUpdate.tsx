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
        {/* Hero Section */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6"
            variants={wordVariants}
          >
            Book Your Perfect Teaser.
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light mb-12"
            variants={wordVariants}
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            Discover a variety of teasers for dinner dates, coffee hangouts, private parties, and more.
            Book your perfect teaser today and experience exciting moments with friends and family!
          </motion.p>
        </motion.div>

        {/* Service Overview */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {/* Service 1: Dinners */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521715541422-b7b52f5d2e0f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxkaW5uZXIlMjBkYXRlJTIwY29mZmVlfGVufDB8fHx8fDE2MjYzNzQwMTk&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Dinner"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Teasers for Dinners</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Add a touch of excitement to your dinner dates with exclusive teaser performances. Whether it's a romantic setting or a fun get-together, we've got you covered.
              </p>
            </div>
          </div>

          {/* Service 2: Coffee Hangouts */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1528825871115-c10bd84dbd19?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvcnR1b3VzfGVufDB8fHx8fDE2MjYzNzQwMTk&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Coffee"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Teasers for Coffee Hangouts</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Enjoy a fun and light-hearted coffee session with teaser performances that add energy to your day!
              </p>
            </div>
          </div>

          {/* Service 3: Private Parties */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1502867461731-91d28ab89f9d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fHBhdGllZXxlbnwwfDB8fHx8fDE2MjYzNzQwMTk&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Private Party"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Teasers for Private Parties</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Plan your private events with unique teaser shows tailored for your special occasion. Let's create unforgettable memories!
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
            className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Book Your Teaser Now
          </a>
        </motion.div>
      </section>
    </DefaultLayout>
  );
};

export default NewUpdate;
