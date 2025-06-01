"use client";

import PageLayout from "@/components/layout/PageLayout";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
export default function LicensePage() {
  const { timeOfDay, backgroundColor, primaryColor } = useTimeThemeStore();
  const isNight = timeOfDay == "night";
  const linkColor = isNight ? primaryColor : backgroundColor;
  const timeOfDayStyle = isNight
    ? "bg-gray-900 text-white border-white"
    : "bg-white/80 text-black border-black";

  return (
    <PageLayout>
      <div className={clsx("space-y-4 border rounded-lg p-5", timeOfDayStyle)}>
        <ul className="text-sm leading-relaxed list-disc pl-5">
          <li>
            Favicon graphic © 2020 Twitter, Inc and other contributors.
            <ul className="list-disc pl-5 mt-1">
              <li>
                Source:{" "}
                <a
                  className="underline"
                  href="https://github.com/twitter/twemoji/blob/master/assets/svg/1f33f.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: linkColor }}
                >
                  https://github.com/twitter/twemoji/blob/master/assets/svg/1f33f.svg
                </a>{" "}
                (licensed under{" "}
                <a
                  className="underline"
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: linkColor }}
                >
                  CC-BY 4.0
                </a>
                )
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
