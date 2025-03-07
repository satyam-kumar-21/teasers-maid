import { Hero } from "@/components/Hero";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img1 from "/img_settings_orange_a700.svg"; // Image related to searching tearsheets
import Img2 from "/img_settings_orange_a700.svg"; // Image related to scheduling a tearsheet
import Img3 from "/img_settings_orange_a700.svg"; // Image showing success after booking a tearsheet
import Img4 from "/img_settings_orange_a700.svg"; // Image showing enjoyment after the service
import { useEffect } from "react";
import { Achievements } from "@/components/Achievements";
import { Services } from "@/components/Services";
import { TeaserHosts } from "@/components/TeaserHosts";

const cards = [
  {
    img: Img1,
    title: "Search Tearsheets by Category",
    description: "Browse and find the perfect tearsheets categorized by type and interest.",
  },
  {
    img: Img2,
    title: "Schedule a Tearsheet Appointment",
    description: "Book a session with your preferred tearsheet expert and schedule your appointment.",
  },
  {
    img: Img3,
    title: "Achieve Your Goals with Tearsheets",
    description: "Unlock new insights and achieve your personal or professional goals through custom-designed tearsheets.",
  },
  {
    img: Img4,
    title: "Enjoy Personalized Sessions",
    description: "Have a tailored session designed to meet your needs and preferences with expert guidance.",
  },
];

export default function IndexPage() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <DefaultLayout>
      <Hero />
      <div className="h-auto mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16 px-4">
        <div
          data-aos="fade-up"
          className="bg-[#FFE0CE] w-full rounded-2xl px-10 py-16 dark:bg-[#1A202C]"
        >
          <h1 className="font-semibold text-3xl">
            Discover and Book Your Perfect Tearsheet Today
          </h1>
          <p className="mt-4">
            Find the perfect tearsheet session to help you gain new insights, solve challenges, and take the next step in your journey.
            <br /> Let us help you achieve your personal or professional goals with our tailored tearsheet services.
          </p>
          <Button
            className="mt-8 bg-black text-white dark:bg-white dark:text-black"
            size="lg"
          >
            Get Started
          </Button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={200}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="px-8 md:py-0 py-8 h-full flex flex-col justify-center rounded-xl bg-[#FBEEE6] dark:bg-[#2D3748]"
            >
              <img src={card.img} width={25} className="mx-auto" alt={card.title} />
              <h1 className="font-bold text-2xl mt-4 md:text-start text-center">
                {card.title}
              </h1>
              {/* <p className="text-sm mt-2 md:text-start text-center">{card.description}</p> */}
            </div>
          ))}
        </div>
      </div>

      <Achievements />
      <Services />
      <TeaserHosts />
    </DefaultLayout>
  );
}
