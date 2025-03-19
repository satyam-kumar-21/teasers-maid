import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Use `useNavigate` from React Router v6
import { useSelector } from "react-redux"; // Assuming you're using Redux
import slugify from "slugify"; // Import the slugify package

// Define Service interface for type safety
interface Service {
  _id: string; // Assuming the services have an ID
  title: string;
  image: string;
  heading: string;
  description: string;
  whatsappLink: string;
}

// Assuming the Redux state has a 'services' slice
interface RootState {
  service: {
    services: Service[];
  };
}

const Services = () => {
  const navigate = useNavigate(); // Use `useNavigate` from React Router v6

  // Accessing services from Redux store
  const services = useSelector((state: RootState) => state.service.services);

  // Function to handle navigation and slugify the heading
  const navigateToDetailPage = (serviceTitle: string) => {
    const slug = slugify(serviceTitle, { lower: true, replacement: "-" }); // Convert title to slug
    navigate(`/service/${slug}`); // Navigate using the slugified version of the title
  };

  return (
    <section className="dark:text-white bg-white dark:bg-gray-900 py-16 px-4 text-center">
      <motion.div className="max-w-6xl mx-auto mb-12">
        <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-yellow-400 mb-6">
          Our Services
        </motion.h2>
        <motion.p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-8">
          Explore our wide range of exciting teaser services designed to elevate your events, parties, and experiences.
          Whether it's for a party, a brand promotion, or a gathering with friends, we have the perfect teaser performance to bring joy and excitement.
        </motion.p>
      </motion.div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {services.map((item: Service, index: number) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="cursor-pointer"
            onClick={() => navigateToDetailPage(item.heading)} // Use item.heading for the URL
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={item.image} alt={item.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.heading}</div>
                {/* <p className="text-gray-700 text-base">{item.description}</p> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
