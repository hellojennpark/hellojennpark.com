"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { CareerTimeline } from "./CareerTimeline";
import { InfoCard } from "./InfoCard";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  Calendar,
  ChevronRight,
  ExternalLink,
  Gauge,
  Heart,
  Star,
  Workflow,
} from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import { RecommendationsModal } from "./modal/RecommendationsModal";

const recommendations = [
  {
    name: "Harry Kim",
    role: "Software Engineer",
    summary:
      "Jenn transformed our CI/CD operations with user-centric automation, dramatically reducing manual tasks and boosting team efficiency.",
  },
  {
    name: "Jaejeon Lim",
    role: "DevOps Engineer",
    summary:
      "Jenn excels at technology selection and project delivery while being the team's go-to collaborator for her exceptional interpersonal skills.",
  },
];

export default function CareerDashboard() {
  const [open, setOpen] = useState(false);
  const [selectedName, setSelectedName] = useState("Harry Kim");

  const isMobile = useIsMobile();
  const { themeTime } = useTimeThemeStore();

  const isNight = themeTime == "night";
  const themeTimeBgStyle = isNight
    ? "bg-black/40 text-white/80 hover:ring-black-500"
    : "bg-white/60 text-black/80 hover:ring-white-500";
  const iconSize = isMobile ? " w-4 h-4" : " w-8 h-8";

  const cardData = [
    {
      title: "Total Experience",
      value: "4 years",
      icon: Gauge,
      iconColor: "text-green-500",
    },
    {
      title: "Tech Stack",
      value: "Fullstack & DevOps",
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
      className={`py-20 px-4 md:px-5 sm:px-10 grid ${
        isMobile ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      } gap-3 md:gap-4`}
    >
      {cardData.map(
        (card, i) =>
          (!isMobile || i != 0) && (
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

      {!isMobile && (
        <a
          href="https://withsy.chat"
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "p-3 md:p-5 rounded-lg shadow-md flex flex-col justify-between hover:ring-2 active:ring-2",
            isNight
              ? "bg-black/40 text-white/80 hover:ring-blue-300"
              : "bg-white/60 text-black/80 hover:ring-sky-600"
          )}
        >
          <div className="text-sm flex justify-between items-center">
            Featured Project
            <ExternalLink className="ml-2 w-4 h-4" />
          </div>
          <div className="text-base font-semibold mt-1">withsy.chat</div>
          <p className="text-xs mt-2">
            Multi-model AI chat app with custom UX.
          </p>
        </a>
      )}

      {/* Timeline & Recommendations */}
      <div
        className={
          "col-span-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
        }
      >
        {/* Career Timeline */}
        <div
          className={clsx(
            "p-5 rounded-lg shadow-md hover:ring-2 active:ring-2",
            themeTimeBgStyle
          )}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="flex flex-row items-center text-md md:text-lg font-semibold">
              <Calendar className="mr-3 text-indigo-500" />
              Work History
            </h3>
            <ChevronRight />
          </div>
          <CareerTimeline />
        </div>

        {/* Recommendations */}
        <div
          className={clsx(
            "p-5 md:p-5 rounded-lg shadow-md hover:ring-2 active:ring-2",
            themeTimeBgStyle
          )}
        >
          <div className="flex gap-3 items-center mb-3 justify-between">
            <div className="flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-md md:text-lg font-semibold">
                Recommendations
              </h3>
            </div>
            <ChevronRight />
          </div>
          <div className="space-y-2">
            {recommendations.map((rec, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelectedName(rec.name);
                  setOpen(true);
                }}
                className={clsx(
                  "group rounded-lg p-1.5 md:p-2 hover:ring-2 active:ring-2",
                  isNight
                    ? "hover:ring-white-500 active:ring-white-500"
                    : "hover:ring-black-500 active:ring-black-500"
                )}
              >
                <div className="flex justify-between items-center pb-0">
                  <div className="font-medium">
                    {rec.name} ({rec.role})
                  </div>
                  <p className="underline text-sm" rel="noopener noreferrer">
                    {isMobile ? "Read" : "Read more"}
                  </p>
                </div>
                {!isMobile && <div className="text-sm">{rec.summary}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      {open && (
        <RecommendationsModal
          open={open}
          onOpenChange={setOpen}
          name={selectedName}
        />
      )}
    </div>
  );
}
