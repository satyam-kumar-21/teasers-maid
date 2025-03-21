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

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import logo from "../../public/logo-png.png"; // Import the logo image
import { Button, Link } from "@heroui/react";
import { MdKeyboardArrowDown } from "react-icons/md"; // Dropdown icon
import { useState, useEffect, useRef } from "react"; // Import useState, useEffect, useRef for handling clicks outside

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle the dropdown
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Specify the type

  // Handle the toggle for the dropdown when clicked
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  

  // Close the dropdown when clicking anywhere outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)

        
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Adding event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeroUINavbar maxWidth="xl" className="px-6 fixed top-0 left-0">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            {/* Use the logo as an image */}
            <img
              src={logo}
              alt="Teasers Logo"
              className="h-12 w-auto sm:h-16 md:h-15 lg:h-15 xl:h-15"
            />
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className={item.dropdown ? "relative" : ""}
            >
              <div className="flex items-center cursor-pointer">
                {/* Add onClick to the link text as well */}
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                  onClick={item.dropdown ? toggleDropdown : undefined} // Toggle dropdown on label click
                >
                  {item.label}
                </Link>
                {/* Add a dropdown icon for the Services item */}
                {item.dropdown && (
                  <MdKeyboardArrowDown
                    className={clsx(
                      "ml-2 transition-transform",
                      isDropdownOpen && item.label === "Services"
                        ? "rotate-180"
                        : ""
                    )}
                  />
                )}
              </div>
              {/* Conditionally render the dropdown menu */}
              {item.dropdown && isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
                >
                  <ul className="flex flex-col">
                    {item.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.href}>
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          href={dropdownItem.href}
                        >
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

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="text-sm font-normal text-white bg-black dark:bg-white dark:text-black"
            href={"/"}
            variant="flat"
          >
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
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className={item.dropdown ? "relative" : ""}
            >
              <div className="flex items-center cursor-pointer">
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                  onClick={item.dropdown ? toggleDropdown : undefined} // Toggle dropdown on label click
                >
                  {item.label}
                </Link>
                {/* Add a dropdown icon for the Services item */}
                {item.dropdown && (
                  <MdKeyboardArrowDown
                    className={clsx(
                      "ml-2 transition-transform",
                      isDropdownOpen && item.label === "Services"
                        ? "rotate-180"
                        : ""
                    )}
                  />
                )}
              </div>
              {/* Conditionally render the dropdown menu inline in navbar */}
              {item.dropdown && isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="mt-2 w-full bg-transparent z-10" // Removed background for mobile
                > 
                  <ul className="flex flex-col" >
                    {item.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.href}>
                        <Link
                        
                          className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100"
                          href={dropdownItem.href}
                        >
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
