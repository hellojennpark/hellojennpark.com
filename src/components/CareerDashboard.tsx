"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { CareerTimeline } from "./CareerTimeline";
import { InfoCard } from "./InfoCard";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  Calendar,
  ExternalLink,
  Gauge,
  Heart,
  Star,
  Workflow,
} from "lucide-react";
import clsx from "clsx";

const recommendations = [
  {
    name: "Harry Kim (Software Engineer)",
    summary:
      "Jenn transformed our CI/CD operations with user-centric automation, dramatically reducing manual tasks and boosting team efficiency.",
  },
  {
    name: "Jaejeon Lim (DevOps Engineer)",
    summary:
      "Jenn excels at technology selection and project delivery while being the team's go-to collaborator for her exceptional interpersonal skills.",
  },
];

export default function CareerDashboard() {
  const isMobile = useIsMobile();
  const { themeTime } = useTimeThemeStore();
  const isNight = themeTime == "night";
  const themeTimeBgStyle = isNight
    ? "bg-black/40 text-white/80 hover:ring-black-500"
    : "bg-white/60 text-black/80 hover:ring-white-500";
  const iconSize = isMobile ? " w-6 h-6" : " w-8 h-8";

  const cardData = [
    {
      title: "Total Experience",
      value: "4 years",
      icon: Gauge,
      iconColor: "text-green-500",
    },
    {
      title: "Tech Stack",
      value: "Fullstack + CI/CD",
      icon: Workflow,
      iconColor: "text-blue-500",
    },
    {
      title: "Passionate about",
      value: "Productivity",
      icon: Heart,
      iconColor: "text-rose-400",
    },
  ];

  return (
    <div
      className={`py-20 md:py-0 px-5 sm:px-10 grid ${
        isMobile ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      } gap-4`}
    >
      {cardData.map(
        (card, i) =>
          (!isMobile || i == 2) && (
            <InfoCard
              key={i}
              title={card.title}
              value={card.value}
              icon={card.icon}
              iconColor={`${card.iconColor} ${iconSize}`}
            />
          )
      )}

      {/* Featured Project */}
      <a
        href="https://withsy.chat"
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "p-3 md:p5 rounded-lg shadow-md flex flex-col justify-between hover:ring-2 active:ring-2",
          isNight
            ? "bg-black/40 text-white/80 hover:ring-blue-300"
            : "bg-white/60 text-black/80 hover:ring-sky-600"
        )}
      >
        <div className="text-sm">Featured Project</div>
        <div className="flex flex-row items-center text-base font-semibold mt-1">
          withsy.chat
          <ExternalLink className="ml-2 w-4 h-4" />
        </div>
        {!isMobile && (
          <p className="text-xs mt-2">
            Multi-model AI chat app with custom UX.
          </p>
        )}
      </a>

      {/* Timeline & Recommendations */}
      <div className={"col-span-full grid grid-cols-1 md:grid-cols-2 gap-4"}>
        {/* Career Timeline */}
        <div
          className={clsx(
            "p-5 rounded-lg shadow-md hover:ring-2 active:ring-2",
            themeTimeBgStyle
          )}
        >
          <h3 className="flex flex-row items-center text-lg font-semibold mb-4">
            <Calendar className="mr-3 text-indigo-500" />
            Work History
          </h3>
          <CareerTimeline />
        </div>

        {/* Recommendations */}
        <div
          className={clsx(
            "p-5 rounded-lg shadow-md hover:ring-2 active:ring-2",
            themeTimeBgStyle
          )}
        >
          <div className="flex items-center gap-3 mb-3">
            <Star className="w-6 h-6 text-yellow-400" />
            <h3 className="text-lg font-semibold">Recommendations</h3>
          </div>
          <div className="space-y-2">
            {recommendations.map((rec, i) => (
              <div
                key={i}
                className={clsx(
                  "group rounded-lg p-2 hover:ring-2 active:ring-2",
                  isNight
                    ? "hover:ring-white-500 active:ring-white-500"
                    : "hover:ring-black-500 active:ring-black-500"
                )}
              >
                <div className="flex justify-between items-center pb-1">
                  <div className="font-medium">{rec.name}</div>
                  <p className="underline text-sm" rel="noopener noreferrer">
                    Read more
                  </p>
                </div>
                <div className="text-sm">{rec.summary}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
