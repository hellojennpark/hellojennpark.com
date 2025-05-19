"use client";

import PageLayout from "@/components/layout/PageLayout";
import recommendationsData from "@/data/recommendations.json";
import { RecommendationTitle } from "@/components/shared/RecommendationTitle";
import { RecommendationContent } from "@/components/shared/RecommendationContent";

export default function WorkHistoryPage() {
  return (
    <PageLayout>
      <div>
        {
          "Below are recommendations from some amazing colleagues I've been fortunate to work with. These are people I had great chemistry with professionally, and their feedback means a lot to me."
        }
      </div>
      <div className="space-y-10 px-2 md:px-6 max-w-4xl mx-auto">
        {recommendationsData.recommendations.map((rec, index) => (
          <div key={index} className="space-y-4 py-4">
            <RecommendationTitle
              name={rec.name}
              role={rec.role}
              from={rec.from}
            />
            <RecommendationContent content={rec.content} />
          </div>
        ))}
      </div>
      <div>
        {
          "These recommendations have been translated from Korean to English. To view the original versions, please visit my LinkedIn profile."
        }
      </div>
    </PageLayout>
  );
}
