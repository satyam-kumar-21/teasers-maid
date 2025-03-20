import DefaultLayout from "@/layouts/default";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state

// Define Update interface for type safety
interface Update {
  image: string;
  heading: string;
  description: string;
}

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

  // Accessing the new updates data from Redux store
  const newUpdates = useSelector((state: { newupdate: { newUpdates: Update[] } }) => state.newupdate.newUpdates);

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

        {/* Dynamic Updates Card Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {/* Dynamically render each update from Redux store */}
          {newUpdates.map((update: Update, index: number) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group transform transition duration-300 hover:scale-105">
              <img
                src={update.image} // Dynamic image from Redux state
                alt={update.heading} // Use the heading as alt text
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {update.heading} {/* Dynamic heading from Redux state */}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {update.description} {/* Dynamic description from Redux state */}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          
        </motion.div>
      </section>
    </DefaultLayout>
  );
};

export default NewUpdate;
