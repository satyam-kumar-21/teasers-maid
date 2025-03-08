export const siteConfig = {
  name: "Teasers maid",
  description: "A modern UI kit for React developers.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { 
      label: "Services", 
      // href: "/services", 
      dropdown: [
        { label: "All Services", href: "/listing" },
        { label: "Teasers in Parties", href: "/services/parties" },
        { label: "Coffee with Teasers", href: "/services/coffee" },
        { label: "Teasers for Cheers", href: "/services/cheers" },
        { label: "Teasers for Advertising", href: "/services/advertising" },
        { label: "Teasers for Models", href: "/services/models" },
        { label: "Outgoing with Teasers", href: "/services/outgoing" },
        { label: "Teasers for Friendship", href: "/services/friendship" }
      ]
    },
    { label: "New Updates", href: "/new-updates" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" }
  ],
  navMenuItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { 
      label: "Services", 
      // href: "/services", 
      dropdown: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "App Development", href: "/services/app-development" },
        { label: "SEO Optimization", href: "/services/seo-optimization" }
      ]
    },
    { label: "New Updates", href: "/new-updates" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/" }
  ]
};
