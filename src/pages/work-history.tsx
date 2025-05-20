"use client";

import PageLayout from "@/components/layout/PageLayout";
// import { useTimeThemeStore } from "@/store/useTimeThemeStore";

export default function WorkHistoryPage() {
  // const { timeOfDay } = useTimeThemeStore();
  // const isNight = timeOfDay == "night";
  // const timeOfDayStyle = isNight
  //   ? "bg-gray-900 text-white border-white"
  //   : "bg-white text-black border-black";

  return (
    <PageLayout>
      <div className="flex text-xl md:text-2xl font-semibold">
        <span className="mr-2">Work History</span>
      </div>

      {/* Introduction */}
      <p className="mb-8 max-w-2xl">{"building..."}</p>
    </PageLayout>
  );
}
