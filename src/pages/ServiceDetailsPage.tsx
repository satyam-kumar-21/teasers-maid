import { useParams } from "react-router-dom";
import { teaserServices } from "@/components/Services"; // Ensure this import points to the correct file where `teaserServices` is stored.
import { motion } from "framer-motion";
import DefaultLayout from "@/layouts/default";
import { TeaserHosts } from "@/components/TeaserHosts";

const ServiceDetailsPage = () => {
  const { serviceId } = useParams(); // Get serviceId from URL
  const serviceIndex = parseInt(serviceId || "0", 10); // Convert the serviceId to an integer
  const service = teaserServices[serviceIndex]; // Get the service from the teaserServices array

  // If the service is not found, display an error message
  if (!service) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl text-red-500">Service not found!</h2>
      </div>
    );
  }

  return (
    <DefaultLayout >
    <section className="dark:text-white bg-white dark:bg-gray-900 py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-yellow-400 mb-6"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {service.title}
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {service.description}
        </motion.p>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img className="w-full rounded-lg" src={service.img} alt={service.title} />
        </motion.div>

        {/* Detailed Description */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {service.detailedDescription}
        </motion.p>

        {/* Additional Images */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {service.additionalImages.map((image, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-md"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img className="w-full h-full object-cover" src={image} alt={`Additional ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>

        {/* WhatsApp Contact */}
        <div className="text-center mt-8">
          <a
            href={service.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          >
            Contact us on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
    <TeaserHosts />
    </DefaultLayout>

    
  );
};

export default ServiceDetailsPage;
