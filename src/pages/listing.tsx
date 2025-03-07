import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/react";
import { useState } from "react";
import Img from "/img_image_260x384.png"; // Placeholder image (use the image for your teaser services)
import { DynamicCard } from "@/components/Services"; // Update this component name to match the correct one

const teaserServices = [
  {
    title: "Teasers in Parties",
    img: "https://media.istockphoto.com/id/1441421094/photo/group-of-young-people-boys-and-girls-attending-party-dancing-having-fun-over-dark-background.jpg?s=612x612&w=0&k=20&c=dnRsSPyG5ordgnYYmp8Kpj-3kLVtPbZYLhwfqQy-jiU=",
    description: "Exciting teaser shows for parties and events.",
    whatsappLink: "https://wa.me/916203176139", // Replace with your actual WhatsApp link
  },
  {
    title: "Coffee with Teasers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wRDp2TiJDziw9rbT_0nIZy099uX3JnND-w&s",
    description: "Enjoy a cup of coffee with live teaser performances.",
    whatsappLink: "https://wa.me/916203176139",
  },
  {
    title: "Teasers for Cheers",
    img: "https://img.freepik.com/premium-photo/young-couple-enjoying-romantic-dinner-together_650366-2149.jpg",
    description: "Teaser performances to keep the energy high at your celebrations.",
    whatsappLink: "https://wa.me/916203176139",
  },
  {
    title: "Teasers for Advertising",
    img: "https://www.shutterstock.com/shutterstock/photos/2080552369/display_1500/stock-photo-portrait-of-attractive-cheerful-girl-holding-on-palm-copy-space-choosing-idea-isolated-over-bright-2080552369.jpg",
    description: "Specialized teaser performances for marketing and brand promotions.",
    whatsappLink: "https://wa.me/916203176139",
  },
  {
    title: "Teasers for Models",
    img: "https://live.staticflickr.com/1817/44017758412_e0e9d33efc_c.jpg",
    description: "Teaser performances to showcase models and fashion events.",
    whatsappLink: "https://wa.me/916203176139",
  },
  {
    title: "Outgoing with Teasers",
    img: "https://img.freepik.com/premium-photo/sensual-couple-love-satisfied-enjoying-romantic-moment-sexy-girl-fit-muscular-boyfriend-w_265223-44728.jpg",
    description: "Teaser performances for outdoor events and gatherings.",
    whatsappLink: "https://wa.me/916203176139",
  },
  {
    title: "Teasers for Friendship",
    img: "https://m.media-amazon.com/images/I/715bc6KOR2L._UF1000,1000_QL80_.jpg",
    description: "A fun and interactive teaser performance for friends and groups.",
    whatsappLink: "https://wa.me/916203176139",
  },
];



export default function TeaserPage() {
  const [selectedService, setSelectedService] = useState<string>("");

  return (
    <DefaultLayout>
      <section className="dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white h-auto py-16 md:px-12 px-4">
        <div className="text-center mb-10">
          <h1 className="font-semibold text-4xl dark:text-white">Our Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Explore our wide range of exciting teaser services designed to elevate your events, parties, and experiences. 
            Whether it's for a party, a brand promotion, or a gathering with friends, we have the perfect teaser performance to bring joy and excitement.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center">
          {teaserServices.map((item, index) => (
            <DynamicCard item={item} index={index} />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
