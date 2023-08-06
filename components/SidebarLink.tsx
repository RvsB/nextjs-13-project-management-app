"use client";

import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather"; //its an icon library
import { usePathname } from "next/navigation";
import clsx from "clsx";

const icons = { Settings, User, Grid, Calendar }; //a map of icons, we need this because a server component will be passing down the props to this client component and when passing down the props they will come through a network layer, and only serializable things are able to pass through it, and since functions arent serializable (nor date and time types), components are also functions, hence we cant send them as props, so we pass a string instead, so when this client components gets rendered, we check the Icons object for the string we got, and get the icon component

interface Props {
  link: {
    icon: "Settings" | "User" | "Grid" | "Calendar";
    [key: string]: any;
  };
}

const SidebarLink = ({ link }: Props) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  const Icon = icons[link.icon];

  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
