"use client";

import { CareerTimeline } from "./CareerTimeline";
import { InfoCard } from "./InfoCard";
import { useIsMobile } from "@/hooks/useIsMobile";
import { BrainCircuit, Gauge, Star, Workflow } from "lucide-react";

const recommendations = [
  {
    name: "Manager A",
    summary: "Jenn was an essential contributor to our platform stability.",
    url: "https://example.com/recommendation1",
  },
  {
    name: "Tech Lead B",
    summary: "Her CI/CD improvements boosted our deployment speed 3x.",
    url: "https://example.com/recommendation2",
  },
];

export default function CareerDashboard() {
  const isMobile = useIsMobile();

  const cardData = [
    {
      title: "Total Experience",
      value: "4 years",
      icon: Gauge,
      iconColor: "text-green-400",
    },
    {
      title: "Tech Stack",
      value: "Fullstack",
      icon: BrainCircuit,
      iconColor: "text-yellow-400",
    },
    {
      title: "Tech Stack",
      value: "CI/CD",
      icon: Workflow,
      iconColor: "text-blue-400",
    },
  ];

  return (
    <div
      className={`py-20 md:py-0 px-5 sm:px-10 grid ${
        isMobile ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      } gap-4 text-white`}
    >
      {cardData.map((card, i) => (
        <InfoCard
          key={i}
          title={card.title}
          value={card.value}
          icon={!isMobile ? card.icon : undefined}
          iconColor={card.iconColor}
        />
      ))}

      {/* Featured Project */}
      <a
        href="https://withsy.chat"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 p-3 md:p5 rounded-lg shadow-md flex flex-col justify-between hover:ring-2 hover:ring-blue-500 transition"
      >
        <div>
          <div className="text-sm text-gray-400">Featured Project</div>
          <div className="text-base font-semibold mt-1">withsy.chat</div>
          {!isMobile && (
            <p className="text-xs mt-2 text-gray-300">
              Multi-model AI chat app with custom UX.
            </p>
          )}
        </div>
      </a>

      {/* Timeline & Recommendations */}
      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Career Timeline */}
        <div className="bg-gray-900 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Company Timeline</h3>
          <CareerTimeline />
        </div>

        {/* Recommendations */}
        <div className="bg-gray-900 p-5 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <Star className="w-6 h-6 text-pink-400" />
            <h3 className="text-lg font-semibold">Recommendations</h3>
          </div>
          <div className="space-y-2">
            {recommendations.map((rec, i) => (
              <div key={i} className="border-t border-white/10 pt-3">
                <div className="font-medium">{rec.name}</div>
                <div className="text-sm text-gray-400">{rec.summary}</div>
                <a
                  href={rec.url}
                  className="text-blue-400 underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
