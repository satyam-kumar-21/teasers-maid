import DefaultLayout from "@/layouts/default";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Achievements } from "@/components/Achievements";
import { TeaserHosts } from "@/components/TeaserHosts";
import VissionMission from "@/components/VissionMission";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const sectionRef = useRef<HTMLElement>(null);  // <-- Define sectionRef here
  const isInView = useInView(sectionRef, { once: false });

  const mainControls = useAnimation();
  const paragraphControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
      paragraphControls.start("hidden");
    }
  }, [isInView, mainControls, paragraphControls]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        onComplete: () => paragraphControls.start("visible"),
      },
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

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DefaultLayout>
      <section
        ref={sectionRef}  // <-- Use sectionRef here
        className="dark:text-white bg-white dark:bg-gray-900 py-16 px-4 text-center"
      >
        {/* Hero Section with Message */}
        <motion.div
          className="max-w-6xl mx-auto mb-12"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-yellow-400 mb-6"
            variants={wordVariants}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-8"
            variants={wordVariants}
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            Hello, and welcome to our platform! As the owner, I wanted to take a moment to personally thank you for being part of our community. We're committed to providing you with the best possible experiences, whether you're booking for a dinner date, a coffee hangout, or a private party. Your satisfaction and enjoyment are our top priority!
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-8"
            variants={wordVariants}
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            We are continuously working to improve and expand our offerings, ensuring that you always have access to exciting new teasers and experiences. Stay tuned for upcoming updates, special offers, and unique content tailored to your needs!
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-8"
            variants={wordVariants}
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            Thank you for your continued support. We're thrilled to have you on this journey with us, and we look forward to delivering even more unforgettable moments to you soon!
          </motion.p>
        </motion.div>
      </section>

      <div className="mb-12">
        <h3 className="text-2xl text-center font-semibold mb-8">Explore Upcoming Teasers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-16 px-4">
          <div className="col-span-1 md:col-span-2 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1615332859295-aa9dc9f01fbc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvdXAlMjBvZiUyMGdpcmxzfGVufDB8fDB8fHww"
              alt="img1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/84/47/33/844733cab99f05a30622584e0801a8a0.jpg"
              alt="img2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 rounded-xl overflow-hidden">
            <img
              src="https://thumbs.dreamstime.com/b/group-smiling-girls-cafe-beach-summer-holidays-vacation-concept-36732874.jpg"
              alt="img1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-xl col-span-1 md:col-span-2 overflow-hidden">
            <img
              src="https://st4.depositphotos.com/10614052/31358/i/450/depositphotos_313583302-stock-photo-beautiful-young-women-at-hen.jpg"
              alt="img2"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>




      <Achievements />

      <VissionMission />
      <TeaserHosts />
    </DefaultLayout>
  );
};

export default About;
