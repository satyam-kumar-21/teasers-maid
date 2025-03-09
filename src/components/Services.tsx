
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Use `useNavigate` from React Router v6

// Teaser service data
export const teaserServices = [
  {
    title: "Teasers in Parties",
    img: "https://media.istockphoto.com/id/1441421094/photo/group-of-young-people-boys-and-girls-attending-party-dancing-having-fun-over-dark-background.jpg?s=612x612&w=0&k=20&c=dnRsSPyG5ordgnYYmp8Kpj-3kLVtPbZYLhwfqQy-jiU=",
    description: "Exciting teaser shows for parties and events.",
    whatsappLink: "https://wa.me/916203176139",
    additionalImages: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    detailedDescription: "We provide high-energy teaser performances tailored for parties. Whether it's a birthday party, corporate event, or a social gathering, we ensure that everyone has a memorable time.",
  },
  {
    title: "Coffee with Teasers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wRDp2TiJDziw9rbT_0nIZy099uX3JnND-w&s",
    description: "Enjoy a cup of coffee with live teaser performances.",
    whatsappLink: "https://wa.me/916203176139",
    additionalImages: [
      "https://example.com/coffee1.jpg",
      "https://example.com/coffee2.jpg",
    ],
    detailedDescription: "Relax and enjoy a hot cup of coffee while being entertained by amazing teaser performances. A perfect combination for a cozy yet exciting experience.",
  },
  {
    title: "Teasers for Cheers",
    img: "https://img.freepik.com/premium-photo/young-couple-enjoying-romantic-dinner-together_650366-2149.jpg",
    description: "Teaser performances to keep the energy high at your celebrations.",
    whatsappLink: "https://wa.me/916203176139",
    additionalImages: [
      "https://example.com/cheers1.jpg",
      "https://example.com/cheers2.jpg",
    ],
    detailedDescription: "We provide dynamic and exciting teaser performances to bring energy and fun to your celebrations, whether it's a wedding, a birthday, or any special occasion.",
  },
  {
    title: "Teasers for Advertising",
    img: "https://www.shutterstock.com/shutterstock/photos/2080552369/display_1500/stock-photo-portrait-of-attractive-cheerful-girl-holding-on-palm-copy-space-choosing-idea-isolated-over-bright-2080552369.jpg",
    description: "Specialized teaser performances for marketing and brand promotions.",
    whatsappLink: "https://wa.me/916203176139",
    additionalImages: [
      "https://example.com/ad1.jpg",
      "https://example.com/ad2.jpg",
    ],
    detailedDescription: "Create a lasting impression with specialized teaser performances designed to promote your brand, attract attention, and create memorable experiences at marketing events.",
  },
  {
    title: "Teasers for Models",
    img: "https://live.staticflickr.com/1817/44017758412_e0e9d33efc_c.jpg",
    description: "Teaser performances to showcase models and fashion events.",
    whatsappLink: "https://wa.me/916203176139",
    additionalImages: [
      "https://example.com/models1.jpg",
      "https://example.com/models2.jpg",
    ],
    detailedDescription: "Our teaser performances are designed to complement and enhance fashion shows, highlighting models and bringing energy to every aspect of the event.",
  },
];

const Services = () => {
  const navigate = useNavigate(); // Use `useNavigate` from React Router v6

  const navigateToDetailPage = (serviceId: number) => {
    navigate(`/service/${serviceId}`); // Use `navigate` for navigation
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
          {teaserServices.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              className="cursor-pointer"
              onClick={() => navigateToDetailPage(index)}
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={item.img} alt={item.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a href={item.whatsappLink} target="_blank" className="text-blue-500 text-sm">
                    Contact us on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  );
};

export default Services;
