import { Button, Card, CardBody, CardFooter, Image, Link } from "@heroui/react";

// List of teaser-related services
const servicesList = [
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

export const Services: React.FC = () => {
  return (
    <section className="h-auto mt-16 md:px-16 px-4 w-full">
      <h1 className="font-semibold text-3xl dark:text-white">
        Featured Services
      </h1>

      <div className="gap-6 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {servicesList.map((item, index) => (
          <DynamicCard item={item} index={index} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          as={Link}
          href="/services"
          data-aos="fade-up"
          size="lg"
          className="text-black font-semibold bg-[#FFCEB2] dark:bg-[#FACC15]"
        >
          View More
        </Button>
      </div>
    </section>
  );
};

export const DynamicCard: React.FC<{ item: any; index: number }> = ({
  item,
  index,
}) => (
  <Card key={index} isPressable shadow="sm">
    <CardBody className="overflow-visible p-0">
      <Image
        alt={item.title}
        className="w-full object-cover h-[190px]"
        radius="lg"
        shadow="sm"
        src={item.img}
        width="100%"
      />
    </CardBody>
    <CardFooter className="flex flex-col justify-start items-start px-4 py-6">
      <div className="mt-3">
        <p className="text-lg text-gray-700 font-semibold dark:text-gray-400">
          {item.title}
        </p>
      </div>
      <div className="flex items-center gap-8 mt-5">
        <Button
          as={Link}
          href={`/services/${index}`} // Updated to dynamically route to the service details page
          className="bg-black text-white dark:bg-white dark:text-black"
        >
          See Details
        </Button>
        <Button
          onClick={() => window.location.href = item.whatsappLink} // Book Now button will redirect to WhatsApp
          className="bg-[#25D366] text-white dark:bg-[#128C7E] dark:text-white"
        >
          Book Now
        </Button>
      </div>
    </CardFooter>
  </Card>
);
