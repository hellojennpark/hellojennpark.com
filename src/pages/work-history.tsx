"use client";

import PageLayout from "@/components/layout/PageLayout";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import companies from "@/data/companies.json";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function WorkHistoryPage() {
  const { timeOfDay } = useTimeThemeStore();

  const isNight = timeOfDay == "night";
  const timeOfDayBgStyle = isNight
    ? "bg-black/40 border-white border hover:bg-gray-800 active:bg-gray-800 text-white"
    : "bg-white/80 border-black border hover:bg-white active:bg-white text-black";

  companies.sort((a, b) => b.id - a.id);

  return (
    <PageLayout>
      <div
        className={
          "col-span-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        }
      >
        <div className="md:col-span-2">
          <p>
            {
              "As a Software Engineer with 4 years of experience across multiple companies, I'm driven by a passion for crafting exceptional user experiences and empowering my colleagues."
            }
          </p>
          <p>
            {
              " My work focuses on streamlining complex workflows, alleviating team pain points, and boosting productivity. Nothing is more rewarding than seeing my teammates thrive thanks to optimized processes I've helped build."
            }
          </p>
        </div>
        <div
          className={clsx(
            "p-5 rounded-lg shadow-md md:col-span-1 space-y-4",
            timeOfDayBgStyle
          )}
        >
          {/* This div will take 1 out of 3 columns on md screens */}
          <h2 className="text-lg md:text-xl">Table of Contents</h2>
          <ul className="space-y-4">
            {companies.map((company) => (
              <li key={company.id}>
                <a
                  href={`#${company.href}`}
                  className="hover:underline active:underline"
                >
                  <h3>
                    # {company.title} ({company.period})
                  </h3>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-16">
        {companies.map((company) => (
          <div key={company.href} id={company.href} className="space-y-8">
            <div>
              <h2 className="text-3xl">
                # {company.title}@{company.label}
              </h2>
              <h3>
                {company.period} / {company.team}
              </h3>
            </div>
            <p>{company.content.summary}</p>

            <div>
              <div className="text-2xl">## Achievements</div>
              <div className="space-y-6">
                {company.content.achievements.map((a, i) => (
                  <div key={i}>
                    <p className="font-semibold">{`- ${a.title}`}</p>
                    <p>{a.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {company.blogs.length > 0 && BlogPosts(isNight, company.blogs)}
          </div>
        ))}
      </div>
    </PageLayout>
  );

  function BlogPosts(
    isNight: boolean,
    blogs: { description: string; id: number; title: string; url: string }[]
  ) {
    return (
      <div>
        <div className="text-2xl">## Posts</div>
        <div>
          {
            "Here's a collection of articles I've written for KakaoPay's tech blog and pieces I've contributed to as a collaborator during my time there."
          }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
          {blogs
            .sort((a, b) => a.id - b.id)
            .map((blog) => (
              <div
                key={blog.url}
                className={clsx(
                  "border rounded-lg h-full",
                  isNight
                    ? "border-white bg-black/40 hover:bg-indigo-600 active:bg-indigo-600"
                    : "border-black bg-white/80 hover:bg-blue-200 active:bg-blue-200"
                )}
              >
                <Link href={blog.url} target="_blank" rel="noopener noreferrer">
                  <h4
                    className={clsx(
                      "flex items-center p-3 text-sm font-bold border-b hover:underline active:underline",
                      isNight ? "border-white" : "border-black"
                    )}
                  >
                    {blog.title}
                    <SquareArrowOutUpRight className="ml-2 w-4 h-4" />
                  </h4>
                </Link>
                <p className="p-3 text-sm">{blog.description}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
