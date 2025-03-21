import { useEffect } from "react";
import Img1 from "/img_frame.svg"; // You can replace these with teaser-related images
import Img2 from "/img_settings_orange_a700_60x60.svg"; // Or use new images for teasers
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    img: Img1,
    title: "10K+",
    desc: "Teasers Booked Successfully",
  },
  {
    img: Img1,
    title: "500+",
    desc: "Happy Customers",
  },
  {
    img: Img1,
    title: "200+",
    desc: "Teasers Available for Booking",
  },
  {
    img: Img2,
    title: "95%",
    desc: "Customer Satisfaction Rate",
  },
];

export const Achievements: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="h-auto text-pink-600 py-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white md:px-16 px-4">
      {cards.map((card, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200}
          className="flex flex-col md:mt-0 mt-5 items-center justify-center"
        >
          <div className="h-14 cursor-pointer mb-6 w-14 p-2 bg-white rounded-full flex items-center justify-center">
            <img src={card.img} alt="icon" />
          </div>
          <h1 className="font-bold text-2xl sm:text-3xl">{card.title}</h1>
          <p className="mt-4 text-base sm:text-lg font-semibold text-pink-600 text-center">
            {card.desc}
          </p>
        </div>
      ))}
    </section>
  );
};
