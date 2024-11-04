"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const usePathName = usePathname();

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="w-60">
          <Link href="/" className={`block ${sticky ? "py-5 lg:py-2" : "py-8"}`}>
            <Image
              src="/images/logo/logo-2.svg"
              alt="logo"
              width={140}
              height={30}
              className="w-full dark:hidden"
            />
            <Image
              src="/images/logo/logo.svg"
              alt="logo"
              width={140}
              height={30}
              className="hidden w-full dark:block"
            />
          </Link>
        </div>

        {/* Centered Navigation */}
        <div className="flex-grow flex justify-center">
          <nav
            id="navbarCollapse"
            className={`navbar lg:flex lg:space-x-12 ${
              navbarOpen ? "block" : "hidden"
            } lg:block`}
          >
            <ul className="flex space-x-16">
              {menuData.map((menuItem, index) => (
                <li key={index} className="group relative">
                  <Link
                    href={menuItem.path}
                    className={`text-2xl ${
                      usePathName === menuItem.path
                        ? "text-primary dark:text-white"
                        : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ThemeToggler on the right */}
        <div className="flex items-center">
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
