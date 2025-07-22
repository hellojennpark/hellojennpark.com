import { FaBloggerB, FaLinkedinIn, FaGithub, FaList } from "react-icons/fa";

export const socialMediaIcons = [
  {
    id: "list",
    component: FaList,
    href: "#",
    ariaLabel: "List",
    bgColor: "bg-blue-500 hover:bg-blue-600",
    isDrawer: true,
  },
  {
    id: "blog",
    component: FaBloggerB,
    href: "/blog",
    ariaLabel: "Blog",
    bgColor: "bg-orange-500 hover:bg-orange-600",
  },
  {
    id: "linkedin",
    component: FaLinkedinIn,
    href: "https://www.linkedin.com/in/hellojennpark",
    ariaLabel: "LinkedIn",
    bgColor: "bg-blue-700 hover:bg-blue-800",
    external: true,
  },
  {
    id: "github",
    component: FaGithub,
    href: "https://github.com/hellojennpark",
    ariaLabel: "GitHub",
    bgColor: "bg-black hover:bg-gray-900",
    external: true,
  },
];
