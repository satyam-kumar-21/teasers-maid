import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="h-auto mt-16 mb-5 w-[100%] grid grid-cols-1 gap-8 md:px-16 px-4 max-w-full">
      {/* Left side */}
      <div
        data-aos="fade-up"
        className="bg-[#FFE0CE] w-full rounded-2xl px-10 py-16 dark:bg-[#1A202C]"
      >
        <h1 className="font-semibold dark:text-yellow-400 text-pink-600 text-3xl">
          Empower Your Events with Elegance
        </h1>
        <p className="mt-4 text-gray-800 dark:text-gray-200">
          "Graceful Talent, Unforgettable Moments"
        </p>

        {/* List of points */}
        <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="mr-3 text-pink-600 dark:text-yellow-400">•</span>
            <p className="text-lg">
              <strong>Versatile Staffing</strong>: From modeling and exhibitions to weddings and corporate parties, we deliver professional female staff tailored to your needs.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-pink-600 dark:text-yellow-400">•</span>
            <p className="text-lg">
              <strong>Event Excellence</strong>: Elevate promotions, auto expos, shows, and private parties with charm and expertise.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-pink-600 dark:text-yellow-400">•</span>
            <p className="text-lg">
              <strong>Branding Boost</strong>: Make your brand stand out with our skilled team for promotions and branding events.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-pink-600 dark:text-yellow-400">•</span>
            <p className="text-lg">
              <strong>Memorable Experiences</strong>: Perfect for parties, weddings, and more—bringing poise and personality to every occasion.
            </p>
          </li>
        </ul>

        {/* Center the Button */}
        <div className="flex justify-center mt-8">
          <Button className="bg-black text-pink-600 dark:bg-white dark:text-black" size="lg">
            <Link to="/services">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
