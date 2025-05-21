"use client";

import PageLayout from "@/components/layout/PageLayout";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import { Mail, Github, Linkedin, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night";
  const timeOfDayStyle = isNight
    ? "bg-gray-900 text-white border-white"
    : "bg-white/80 text-black border-black";

  return (
    <PageLayout>
      <div className="flex text-xl md:text-2xl font-semibold">
        <span className="mr-2">Contact</span>
      </div>

      {/* Introduction */}
      <p className="mb-8 max-w-2xl">
        {
          "In Toronto these days. Feel free to reach out with any questions, ideas, or just to say hi."
        }
      </p>

      <div className={clsx("space-y-4 border rounded-lg p-5", timeOfDayStyle)}>
        <div className="flex items-center">
          <Mail className="w-4 h-4 mr-2" />
          <Link
            href="mailto:hellojennpark@gmail.com"
            className={clsx("flex items-center hover:border-b active:border-b")}
          >
            hellojennpark@gmail.com
          </Link>
        </div>
        <div className="flex items-center">
          <Github className="w-4 h-4 mr-2" />
          <Link
            href="https://github.com/hellojennpark"
            target="_blank"
            className={clsx("flex items-center hover:border-b active:border-b")}
          >
            github.com/hellojennpark
            <SquareArrowOutUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="flex items-center">
          <Linkedin className="w-4 h-4 mr-2" />
          <Link
            href="https://www.linkedin.com/in/hellojennpark"
            target="_blank"
            className={clsx("flex items-center hover:border-b active:border-b")}
          >
            linkedin.com/in/hellojennpark
            <SquareArrowOutUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
