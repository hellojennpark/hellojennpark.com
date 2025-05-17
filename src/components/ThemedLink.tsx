import clsx from "clsx";
import { ReactNode } from "react";

type ThemedLinkProps = {
  href: string;
  children: ReactNode;
};

export const ThemedLink = ({ href, children }: ThemedLinkProps) => {
  return (
    <a
      href={href}
      className={clsx("transition text-gray-500 hover:text-black text-lg")}
    >
      {children}
    </a>
  );
};
