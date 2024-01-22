"use client";

import { SidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex bottom-0 z-20 w-full bg-dark-1 px-6 py-3 items-center justify-between md:hidden">
      {SidebarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            href={link.route}
            key={link.label}
            className={`flex gap-2 items-center rounded-lg py-2 px-4 text-small-bold text-white mnubot ${
              isActive && "bg-gray-400 icon-active"
            }`}
          >
            {link.icon}
            <p className="text-small-medium  max-sm:hidden">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
