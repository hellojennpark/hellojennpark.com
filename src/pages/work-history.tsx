"use client";

import PageLayout from "@/components/layout/PageLayout";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";

export default function WorkHistoryPage() {
  const { timeOfDay } = useTimeThemeStore();

  const isNight = timeOfDay == "night";
  const timeOfDayBgStyle = isNight
    ? "bg-gray-900 text-white border border-white"
    : "bg-white/80 text-black border border-black";

  return (
    <PageLayout>
      <div
        className={
          // Changed to grid-cols-3 for md screens, allowing for 2/3 and 1/3 split
          "col-span-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-center"
        }
      >
        <div className="md:col-span-2">
          {" "}
          {/* This div will take 2 out of 3 columns on md screens */}
          {
            "As a Software Engineer with 4 years of experience across multiple companies, I’m driven by a passion for crafting exceptional user experiences and empowering my colleagues. My work focuses on streamlining complex workflows, alleviating team pain points, and boosting productivity. Nothing is more rewarding than seeing my teammates thrive thanks to optimized processes I’ve helped build."
          }
        </div>
        <div
          className={clsx(
            "p-5 rounded-lg shadow-md md:col-span-1 space-y-4",
            timeOfDayBgStyle
          )}
        >
          {/* This div will take 1 out of 3 columns on md screens */}
          <h2 className="text-lg md:text-xl">Table of Contents</h2>
          <ul className="space-y-4">
            <li>
              <a href="#kakaopay">
                <h3>1. KakaoPay</h3>
              </a>
            </li>
            <li>
              <a href="#pearlabyss">
                <h3>2. Pearl Abyss</h3>
              </a>
            </li>
            <li>
              <a href="#estsecurity">
                <h3>3. ESTsecurity</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="kakaopay">
        <h2>1. KakaoPay</h2>
        {/* Your KakaoPay content here */}
      </div>
      <div id="pearlabyss">
        <h2>2. Pearl Abyss</h2>
        {/* Your Pearl Abyss content here */}
      </div>
      <div id="estsecurity">
        <h2>3. ESTsecurity</h2>
        {/* Your ESTsecurity content here */}
      </div>
    </PageLayout>
  );
}
