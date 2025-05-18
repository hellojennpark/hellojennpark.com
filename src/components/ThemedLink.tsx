"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type ThemedLinkProps = {
  href: string;
  children: ReactNode;
};

export const ThemedLink = ({ href, children }: ThemedLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <a
      href={href}
      className={clsx(
        "transition text-lg flex items-center gap-2",
        isActive ? "text-black" : "text-gray-500 hover:text-black"
      )}
    >
      {children}
      {isActive && (
        <span className="bg-black text-white text-xs px-2 py-0.5 rounded-md">
          current
        </span>
      )}
    </a>
  );
};
