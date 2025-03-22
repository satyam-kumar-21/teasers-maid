import slugify from "slugify";

// Define Service interface to match your state
interface Service {
  _id: string;
  title: string;
  heading: string;
  href: string; // You can also generate this dynamically using the `slugify`
}

// Dynamically generate navigation items based on services
export const generateNavItems = (services: Service[]) => {
  return [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      dropdown: services.map((service) => ({
        label: service.heading,
        href: `/service/${slugify(service.heading, { lower: true, replacement: "-" })}`,
      })),
    },
    { label: "New Updates", href: "/new-updates" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];
};
