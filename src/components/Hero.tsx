import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Form,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";

const teaserTypes = [
  { key: "Dinner", label: "Dinner" },
  { key: "Coffee", label: "Coffee" },
  { key: "Party", label: "Party" },
  { key: "Event", label: "Event" },
  { key: "Meeting", label: "Meeting" },
  { key: "Others", label: "Others" },
];

const timeSlots = [
  { key: "morning", label: "Morning" },
  { key: "afternoon", label: "Afternoon" },
  { key: "evening", label: "Evening" },
];

const SelectorIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M8 9l4 -4l4 4" />
      <path d="M16 15l-4 4l-4 -4" />
    </svg>
  );
};

export const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [submitted, setSubmitted] = React.useState<{
    [k: string]: FormDataEntryValue;
  } | null>(null);

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

  console.log(submitted);

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
              <Button
                className="bg-[#ffceb2] dark:bg-[#FACC15] text-black"
                size="lg"
                radius="full"
                onPress={onOpen}
              >
                Book a Teaser <FaArrowRight className="h-4 w-4 text-black" />
              </Button>

              <Button
                size="lg"
                radius="full"
                variant="bordered"
                className="border-[#ffceb2] dark:border-[#FACC15] text-[#f07e3c] dark:text-[#FACC15]"
              >
                Become a Partner
                <FaArrowRight className="h-4 w-4 text-[#f07e3c] dark:text-[#FACC15]" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Modal
        isOpen={isOpen}
        placement="center"
        size="xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Book Your Teaser</h2>
                <p className="text-base font-light">
                  Choose your perfect teaser for any occasion.
                </p>
              </ModalHeader>
              <ModalBody>
                <Form
                  className="w-full max-w-xl"
                  onReset={() => setSubmitted(null)}
                  onSubmit={(e) => {
                    e.preventDefault();
                    let data = Object.fromEntries(new FormData(e.currentTarget));
                    console.log(data);
                    setSubmitted(data);
                  }}
                >
                  <Input
                    isRequired
                    label="City/Location"
                    labelPlacement="outside"
                    name="city"
                    placeholder="Enter city or location"
                    type="text"
                    errorMessage="City/Location is required"
                  />

                  <Select
                    isRequired
                    disableSelectorIconRotation
                    className="max-w-xl"
                    label="Teaser Type"
                    labelPlacement="outside"
                    name="teaserType"
                    placeholder="Select a teaser type"
                    selectorIcon={<SelectorIcon />}
                  >
                    {teaserTypes.map((teaserType) => (
                      <SelectItem key={teaserType.key}>
                        {teaserType.label}
                      </SelectItem>
                    ))}
                  </Select>

                  <Select
                    isRequired
                    disableSelectorIconRotation
                    className="max-w-xl"
                    name="timeSlot"
                    label="Preferred Time Slot"
                    labelPlacement="outside"
                    placeholder="Select a time slot"
                    selectorIcon={<SelectorIcon />}
                  >
                    {timeSlots.map((timeSlot) => (
                      <SelectItem key={timeSlot.key}>
                        {timeSlot.label}
                      </SelectItem>
                    ))}
                  </Select>

                  <Button
                    type="submit"
                    className="mt-4 w-full bg-black text-white dark:bg-white dark:text-black"
                  >
                    Book Teaser
                  </Button>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
