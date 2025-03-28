import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the id from the URL
import { useSelector } from "react-redux"; // Assuming you're using Redux
import { TeaserHosts } from "@/components/TeaserHosts";

// Service details component
const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>(); // Get the serviceId (slug) from the URL
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true); // State to handle loading
  const services = useSelector((state: any) => state.service.services); // Accessing services from Redux store

  useEffect(() => {
    console.log("Service ID from URL:", serviceId); // Debug serviceId
    console.log("Available Services:", services); // Debug services array

    if (serviceId) {
      setLoading(true); // Start loading when we begin fetching

      // Convert the slugified serviceId back to the original format (with spaces instead of hyphens)
      const formattedServiceId = serviceId.replace(/-/g, " "); // Replace hyphens with spaces

      // Check if services array is correctly populated and that each service has a 'heading' property
      const foundService = services?.find((item: { heading: string | number }) => {
        console.log("Comparing service heading:", item.heading); // Log the service heading
        return item.heading?.toString().toLowerCase() === formattedServiceId.toLowerCase(); // Case-insensitive comparison
      });

      if (!foundService) {
        console.error(`Service with heading "${formattedServiceId}" not found.`);
      }

      setService(foundService || null); // Set the found service or null
      setLoading(false); // Set loading to false once data is fetched
    }
  }, [serviceId, services]); // Re-run effect when serviceId or services change

  // Show loading or error state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-3xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!serviceId) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-3xl text-red-600">Invalid Service ID</div>
      </div>
    ); // If no serviceId is passed
  }

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-3xl text-red-600">Service not found</div>
      </div>
    ); // If no matching service is found
  }

  // Filter out the current service from the list of services to display other services
  const otherServices = services?.filter((item: { heading: string | number }) => {
    return item.heading?.toString().toLowerCase() !== service.heading?.toString().toLowerCase();
  });

  return (
    <section className="dark:text-white bg-white dark:bg-gray-900 py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-pink-600 dark:text-yellow-400 mb-6">
          {service.heading}
        </h2>

        {/* Service Image */}
        <div className="overflow-hidden rounded-lg shadow-lg mb-6">
          <img
            className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-500"
            src={service.image}
            alt={service.heading}
          />
        </div>

        {/* Service Description */}
        <div
          className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: service.description }} // Rendering rich text description
        />

        {/* Contact Button */}
        <div className="mt-8">
          <a
            href="https://wa.me/919911555433"
            target="_blank"
            className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Contact us on WhatsApp
          </a>
        </div>

        {/* Other Services Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-pink-600 dark:text-yellow-400 mb-6">
            Other Services You Might Like
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {otherServices?.map((otherService: any) => (
              <div key={otherService.id} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  className="w-full h-48 object-cover"
                  src={otherService.image}
                  alt={otherService.heading}
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-pink-600  dark:text-yellow-400 mb-2">
                    {otherService.heading}
                  </h4>
                  <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: otherService.description.slice(0, 100) + '...' }}></p>


                  <a
                    href={`/service/${otherService.heading?.toString().toLowerCase().replace(/ /g, "-")}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TeaserHosts Section */}
      <TeaserHosts />
    </section>
  );
};

export default ServiceDetails;
