import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@heroui/react";







export const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });


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
    <>
      <section
        ref={ref}
        className="dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white h-auto py-10 flex items-center justify-center p-4 relative overflow-hidden"
      >
        <motion.div
          className="flex flex-col items-center justify-center text-center px-4 py-12 relative z-10"
          initial="hidden"
          animate={mainControls}
          variants={textVariants}
        >
          <div className="max-w-[1320px] mx-auto">
            <motion.h2
              className="text-4xl md:text-6xl font-bold dark:text-yellow-400 mb-6"
              initial="hidden"
              animate={mainControls}
              variants={headingVariants}
            >
              {[ "Book", "Your", "Perfect", "Teaser", ".", "\n", "Dinners", "Coffee", "Parties", "and", "More!" ].map((word, index) =>
                word === "\n" ? (
                  <br key={index} />
                ) : (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    style={{
                      display: "inline-block",
                      marginRight: "0.5rem",
                      transform: `translateY(${scrollY * 0.2}px)`,
                    }}
                  >
                    {word}
                  </motion.span>
                )
              )}
            </motion.h2>
            <motion.p
              className="mb-12 max-w-2xl mx-auto dark:text-white font-light text-base md:text-lg"
              initial="hidden"
              animate={paragraphControls}
              variants={textVariants}
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              Discover a variety of teasers for dinner dates, coffee hangouts, private parties, and more. Book your perfect teaser today!
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
              initial="hidden"
              animate={paragraphControls}
              variants={textVariants}
              style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            >
              {/* Modified the button to link to WhatsApp */}
              <Button
                className="bg-[#ffceb2] dark:bg-[#FACC15] text-black"
                size="lg"
                radius="full"
                onClick={() => window.open("https://wa.me/916203176139", "_blank")} // WhatsApp link with provided number
              >
                Book a Teaser <FaArrowRight className="h-4 w-4 text-black" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
