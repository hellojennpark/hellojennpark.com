import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";

type Props = {
  toc: { id: string; text: string; level: number }[];
};

export function TOC({ toc }: Props) {
  const [open, setOpen] = useState(false);
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night";

  return (
    <nav
      className={clsx(
        "border rounded-md p-4 space-y-2",
        isNight
          ? "border-white hover:bg-black active:bg-black"
          : "border-black hover:bg-white active:bg-white"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full font-semibold"
        aria-label="Toggle Table of Contents"
      >
        <span>Table of Contents</span>
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>

      {open && (
        <ul className="space-y-2">
          {toc.map((item) => (
            <li
              key={item.id}
              className={clsx(
                item.level === 2 && "ml-0",
                item.level === 3 && "ml-4"
              )}
            >
              <Link href={`#${item.id}`} className="hover:underline block">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
