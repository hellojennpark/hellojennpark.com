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
    : "bg-white text-black border border-black";

  return (
    <PageLayout>
      <div className="flex text-xl md:text-2xl font-semibold">
        <span className="mr-2">Work History</span>
      </div>

      <div
        className={
          "col-span-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
        }
      >
        <div>hello</div>
        <div className={clsx("p-5 rounded-lg shadow-md", timeOfDayBgStyle)}>
          <CareerTimeline hide={false} />
        </div>
      </div>
      <p className="mb-8 max-w-2xl">{"building..."}</p>
    </PageLayout>
  );
}
