import clsx from "clsx";
import { ReactNode } from "react";

type ThemedLinkProps = {
  href: string;
  themeTime: "morning" | "day" | "evening" | "night";
  children: ReactNode;
  className?: string;
};

export const ThemedLink = ({
  href,
  themeTime,
  children,
  className,
}: ThemedLinkProps) => {
  return (
    <a
      href={href}
      className={clsx(
        "transition",
        themeTime === "night"
          ? "text-gray-500 hover:text-white"
          : "text-gray-700 hover:text-black",
        className
      )}
    >
      {children}
    </a>
  );
};
