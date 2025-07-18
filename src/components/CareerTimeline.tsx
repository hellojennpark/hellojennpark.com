// components/CareerTimeline.tsx
"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "EstSecurity",
    title: "Devops Engineer (full-time internship)",
    duration: "8m",
    months: 8,
    color: "bg-green-500",
  },
  {
    company: "PearlAbyss",
    title: "Software Engineer / Platform Programming Team",
    duration: "1y6m",
    months: 18,
    color: "bg-blue-500",
  },
  {
    company: "KakaoPay",
    title: "Release Engineer / SRE Team",
    duration: "1y10m",
    months: 22,
    color: "bg-yellow-400",
  },
].reverse();

export function CareerTimeline({ hide }: { hide: boolean }) {
  const Summary = (
    <>
      <div className="text-md md:text-lg">
        <div>4 years total (w/ 8-month internship), newest first</div>
      </div>
      <div className="space-y-2 md:space-y-3">
        {experiences.map((exp, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={cn(
                exp.color,
                "w-3 h-3 rounded-full shrink-0 border border-white/30"
              )}
              aria-hidden
            />
            <span>
              {exp.company} <strong>{exp.title}</strong>
            </span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="space-y-2 md:space-y-3 w-full text-md pt-1">
      {/* Timeline bar */}
      <TooltipProvider>
        <div className="w-full flex h-8 rounded overflow-hidden border border-white/30">
          {experiences.map((exp, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    exp.color,
                    "flex items-center justify-center text-xs md:text-sm whitespace-nowrap cursor-pointer transition-transform duration-200 hover:scale-[1.25] active:scale-[1.25]"
                  )}
                  style={{ flex: exp.months }}
                >
                  {exp.duration}
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={6}>
                <div className="text-sm text-white">
                  <div className="font-medium">
                    {exp.company} ({exp.duration})
                  </div>
                  <div>{exp.title}</div>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
      {!hide && Summary}
    </div>
  );
}
