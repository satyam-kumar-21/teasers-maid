import DefaultLayout from "@/layouts/default";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Achievements } from "@/components/Achievements";
import { TeaserHosts } from "@/components/TeaserHosts";

const about = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

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
    <DefaultLayout>
      <section
        ref={ref}
        className="dark:text-white h-auto pt-10 flex items-center justify-center relative overflow-hidden"
      >
        <motion.div
          className="flex flex-col items-center justify-center text-center px-4 py-12 relative z-10"
          initial="hidden"
          animate={mainControls}
          variants={textVariants}
        >
          <div className="max-w-[1320px] mx-auto">
            <motion.h2
              className="text-2xl md:text-4xl lg:text-6xl font-bold dark:text-yellow-400 mb-6"
              initial="hidden"
              animate={mainControls}
              variants={headingVariants}
            >
              {[  
                "Exclusive", 
                "Teasers", 
                "for", 
                "You", 
                "\n", 
                "Be", 
                "the", 
                "first", 
                "to", 
                "know!"
              ].map((word, index) =>
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
              className="mb-12 max-w-2xl mx-auto dark:text-white font-light text-sm md:text-base lg:text-lg"
              initial="hidden"
              animate={paragraphControls}
              variants={textVariants}
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              Stay ahead of the curve and catch a sneak peek of our upcoming
              products, services, or properties. We're bringing exclusive
              teasers to our community, allowing you to be the first to access
              what’s coming next. Don't miss out — sign up for early access and
              be part of the excitement!
            </motion.p>
          </div>
        </motion.div>
      </section>

      <div className="mb-12">
        <h3 className="text-2xl text-center font-semibold mb-8">Explore Upcoming Teasers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-16 px-4">
          <div className="col-span-1 md:col-span-2 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1615332859295-aa9dc9f01fbc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvdXAlMjBvZiUyMGdpcmxzfGVufDB8fDB8fHww" alt="img1" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src="https://i.pinimg.com/736x/84/47/33/844733cab99f05a30622584e0801a8a0.jpg" alt="img2" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-1 rounded-xl overflow-hidden">
            <img src="https://thumbs.dreamstime.com/b/group-smiling-girls-cafe-beach-summer-holidays-vacation-concept-36732874.jpg" alt="img1" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-xl col-span-1 md:col-span-2 overflow-hidden">
            <img src="https://st4.depositphotos.com/10614052/31358/i/450/depositphotos_313583302-stock-photo-beautiful-young-women-at-hen.jpg" alt="img2" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <Achievements />
      <TeaserHosts />
    </DefaultLayout>
  );
};

export default about;
