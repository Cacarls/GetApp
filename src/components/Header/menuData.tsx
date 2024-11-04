import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "#home",  // Updated for scrolling
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "#about",  // Updated for scrolling
    newTab: false,
  },
  {
    id: 3,
    title: "Pricing",
    path: "#pricing",  // Updated for scrolling
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    path: "#services",  // If you have a services section, ensure it has an id
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "#contact",  // Updated for scrolling
    newTab: false,
  },
];

export default menuData;
