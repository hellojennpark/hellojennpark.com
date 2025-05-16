// components/CareerTimeline.tsx
"use client";

import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "estsecurity",
    title: "devops engineer (full-time internship)",
    duration: "8m",
    months: 8,
    color: "bg-green-500",
  },
  {
    company: "pearlabyss",
    title: "software engineer / platform programming team",
    duration: "1y6m",
    months: 18,
    color: "bg-blue-500",
  },
  {
    company: "kakaopay",
    title: "release engineer / SRE team",
    duration: "1y10m",
    months: 22,
    color: "bg-yellow-400",
  },
];

const totalMonths = experiences.reduce((acc, exp) => acc + exp.months, 0);

export function CareerTimeline() {
  return (
    <div className="space-y-4 w-full text-md text-white">
      {/* Timeline bar */}
      <div className="w-full flex h-6 rounded overflow-hidden border border-white/30">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={cn(
              exp.color,
              "flex items-center justify-center text-[10px] md:text-xs whitespace-nowrap"
            )}
            style={{ flex: exp.months }}
          >
            {exp.duration}
          </div>
        ))}
      </div>

      {/* Summary text */}
      <div className="text-md md:text-lg">
        <div>
          <strong>
            {Math.floor(totalMonths / 12)}y{/* {totalMonths % 12}m */}
          </strong>{" "}
          (incl. 8-month internship)
        </div>
      </div>

      {/* Labels */}
      <div className="space-y-1">
        {experiences.map((exp, i) => (
          <div key={i} className="flex items-center gap-2">
            {/* 색상 동그라미 */}
            <span
              className={cn(
                exp.color,
                "w-3 h-3 rounded-full shrink-0 border border-white/30"
              )}
              aria-hidden
            />
            <span>
              <strong>{exp.company}</strong> : {exp.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
