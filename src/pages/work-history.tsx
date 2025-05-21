"use client";

import { CareerTimeline } from "@/components/CareerTimeline";
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
          "col-span-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-center"
        }
      >
        <div>
          {
            "As a Software Engineer with 4 years of experience across multiple companies, I’m driven by a passion for crafting exceptional user experiences and empowering my colleagues. My work focuses on streamlining complex workflows, alleviating team pain points, and boosting productivity. Nothing is more rewarding than seeing my teammates thrive thanks to optimized processes I’ve helped build."
          }
        </div>
        <div className={clsx("p-5 rounded-lg shadow-md", timeOfDayBgStyle)}>
          <CareerTimeline hide={false} />
        </div>
      </div>
      <p className="mb-8 max-w-2xl">{"building..."}</p>
    </PageLayout>
  );
}
