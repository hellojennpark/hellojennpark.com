"use client";

import { CareerTimeline } from "./CareerTimeline";
import { BrainCircuit, Calendar, Gauge, Star, Workflow } from "lucide-react";

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

function CareerDashboard() {
  return (
    <div className="py-25 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap xl:grid-cols-4 gap-4 text-white">
      {/* Total Experience */}
      <div className="bg-gray-900 p-5 rounded-lg shadow-md flex items-center gap-4">
        <Gauge className="w-10 h-10 text-green-400" />
        <div>
          <div className="text-sm text-gray-400">Total Experience</div>
          <div className="text-2xl font-bold">4 years</div>
        </div>
      </div>

      {/* Tech Stack: Fullstack */}
      <div className="bg-gray-900 p-5 rounded-lg shadow-md flex items-center gap-4">
        <BrainCircuit className="w-10 h-10 text-yellow-400" />
        <div>
          <div className="text-sm text-gray-400">Tech Stack</div>
          <div className="text-lg">Fullstack</div>
        </div>
      </div>

      {/* Tech Stack: CI/CD */}
      <div className="bg-gray-900 p-5 rounded-lg shadow-md flex items-center gap-4">
        <Workflow className="w-10 h-10 text-blue-400" />
        <div>
          <div className="text-sm text-gray-400">Tech Stack</div>
          <div className="text-lg">CI/CD</div>
        </div>
      </div>

      {/* Featured Project */}
      <a
        href="https://withsy.chat"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 p-5 rounded-lg shadow-md flex flex-col justify-between hover:ring-2 hover:ring-blue-500 transition"
      >
        <div>
          <div className="text-sm text-gray-400">Featured Project</div>
          <div className="text-lg font-semibold mt-1">withsy.chat</div>
          <p className="text-sm mt-2 text-gray-300">
            Multi-model AI chat app with custom UX.
          </p>
        </div>
      </a>

      {/* Timeline & Recommendations Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:col-span-2 xl:col-span-4">
        {/* Career Timeline */}
        <div className="bg-gray-900 p-5 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6 text-red-400" />
            <h3 className="text-lg font-semibold">Timeline</h3>
          </div>
          <div className="border-t border-white/10 pt-3">
            <CareerTimeline />
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gray-900 p-5 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <Star className="w-6 h-6 text-pink-400" />
            <h3 className="text-lg font-semibold">Recommendations</h3>
          </div>
          <div className="space-y-4">
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

export default function CareerSection() {
  return (
    <section
      id="career"
      className="relative min-h-[100dvh] flex items-center justify-center snap-start shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)]"
    >
      <CareerDashboard />
    </section>
  );
}
