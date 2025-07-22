"use client";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { timeIcon } from "@/constants/timeTheme";
import clsx from "clsx";
import Link from "next/link";
import { MenuDrawer } from "@/components/MenuDrawer";
import { socialMediaIcons } from "@/constants/socialMediaIcons";

const times = ["morning", "day", "evening", "night"] as const;

export default function HeroSocialMediaCard() {
  const { timeOfDay, setTimeOfDay, primaryColor, backgroundColor } =
    useTimeThemeStore();

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-4 rounded-xl p-6"
      )}
      style={{ color: backgroundColor }}
    >
      <div className="flex gap-4">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => setTimeOfDay(time)}
            className={clsx(
              "p-2 rounded-full shadow-sm hover:scale-[110%] active:scale-[110%]",
              timeOfDay == "night"
                ? timeOfDay == time
                  ? "text-white"
                  : "text-black"
                : timeOfDay == time
                ? "text-black"
                : "text-white"
            )}
            style={{
              backgroundColor:
                timeOfDay == time
                  ? primaryColor
                  : timeOfDay == "night"
                  ? "white"
                  : "black",
            }}
          >
            {timeIcon(time, "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8")}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 text-2xl">
        {socialMediaIcons.map((icon) => {
          const IconComponent = icon.component;
          const iconClasses =
            "flex items-center justify-center p-2 rounded-xl shadow-sm text-white transition-colors hover:scale-[110%] active:scale-[110%] " +
            icon.bgColor;
          const iconSizeClasses = "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8";

          if (icon.isDrawer) {
            return (
              <MenuDrawer key={icon.id}>
                <p className={iconClasses} aria-label={icon.ariaLabel}>
                  <IconComponent className={iconSizeClasses} />
                </p>
              </MenuDrawer>
            );
          }

          if (icon.external) {
            return (
              <a
                key={icon.id}
                href={icon.href}
                className={iconClasses}
                aria-label={icon.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent className={iconSizeClasses} />
              </a>
            );
          }

          return (
            <Link
              key={icon.id}
              href={icon.href}
              passHref
              className={iconClasses}
              aria-label={icon.ariaLabel}
            >
              <IconComponent className={iconSizeClasses} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
