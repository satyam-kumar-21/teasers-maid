import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { useSelector } from "react-redux"; // Redux state hook
// import { RootState } from "../store/store"; // Assuming you have the correct path for the Redux store
import { generateNavItems } from "@/config/site"; // Import the function to generate nav items
import { ThemeSwitch } from "@/components/theme-switch";
import logo from "../../public/logo-png.png"; // Import the logo image
import { Button, Link } from "@heroui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

type RootState = {
  about: any;
  branch: any;
  gallery: any;
  newupdate: any;
  rating: any;
  service: {
    services: any[];
  };
  topTeaser: any;
  blogs: any;
};

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Fetch services from Redux state
  const services = useSelector((state: RootState) => state.service.services);

  // Generate the nav items dynamically
  const navItems = generateNavItems(services);

  // Handle the toggle for the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown when clicking outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeroUINavbar maxWidth="xl" className="px-6 fixed top-0 left-0">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
            <img src={logo} alt="Teasers Logo" className="h-12 w-auto sm:h-16 md:h-15 lg:h-15 xl:h-10" />
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {navItems.map((item) => (
            <NavbarItem key={item.href} className={item.dropdown ? "relative" : ""}>
              <div className="flex items-center cursor-pointer">
                <Link
                  className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium")}
                  color="foreground"
                  href={item.href}
                  onClick={item.dropdown ? toggleDropdown : undefined}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <MdKeyboardArrowDown
                    className={clsx("ml-2 transition-transform", isDropdownOpen && item.label === "Services" ? "rotate-180" : "")}
                  />
                )}
              </div>
              {item.dropdown && isDropdownOpen && (
                <div ref={dropdownRef} className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <ul className="flex flex-col">
                    {item.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.href}>
                        <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href={dropdownItem.href}>
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button as={Link} className="text-sm font-normal text-white bg-black dark:bg-white dark:text-black" href={"/"} variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item) => (
            <NavbarItem key={item.href} className={item.dropdown ? "relative" : ""}>
              <div className="flex items-center cursor-pointer">
                <Link
                  className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium")}
                  color="foreground"
                  href={item.href}
                  onClick={item.dropdown ? toggleDropdown : undefined}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <MdKeyboardArrowDown
                    className={clsx("ml-2 transition-transform", isDropdownOpen && item.label === "Services" ? "rotate-180" : "")}
                  />
                )}
              </div>
              {item.dropdown && isDropdownOpen && (
                <div ref={dropdownRef} className="mt-2 w-full bg-transparent z-10">
                  <ul className="flex flex-col">
                    {item.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.href}>
                        <Link className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100" href={dropdownItem.href}>
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </NavbarItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
