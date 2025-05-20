"use client";

import PageLayout from "@/components/layout/PageLayout";
import recommendationsData from "@/data/recommendations.json";
import { RecommendationTitle } from "@/components/shared/RecommendationTitle";
import { RecommendationContent } from "@/components/shared/RecommendationContent";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";

export default function WorkHistoryPage() {
  const { timeOfDay } = useTimeThemeStore();
  // const timeOfDayStyle = timeOfDay === "night" ? "text-white" : "text-black";
  return (
    <PageLayout>
      <div className="text-xl md:text-2xl font-semibold">Recommendations</div>
      <div>
        {
          "Below are recommendations from some amazing colleagues I've been fortunate to work with. These are people I had great chemistry with professionally, and their feedback means a lot to me."
        }
      </div>
      <div className="space-y-8 mx-auto">
        {recommendationsData.recommendations.map((rec, index) => (
          <div
            key={index}
            className={clsx(
              "space-y-8 p-4 rounded-lg border",
              timeOfDay == "night"
                ? "bg-gray-900 border-white"
                : "bg-white border-black"
            )}
          >
            <RecommendationTitle
              name={rec.name}
              role={rec.role}
              from={rec.from}
            />
            <RecommendationContent content={rec.content} />
          </div>
        ))}
      </div>
      <div className="text-sm italic">
        <span>
          {
            "These recommendations have been translated from Korean to English. To view the original versions, please visit my "
          }
        </span>
        <a
          target="_blank"
          className="underline"
          href="https://www.linkedin.com/in/hellojennpark"
        >
          LinkedIn profile
        </a>
        <span>.</span>
      </div>
    </PageLayout>
  );
}
