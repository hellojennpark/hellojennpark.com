"use client";

import PageLayout from "@/components/layout/PageLayout";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import companies from "@/data/companies.json";

export default function WorkHistoryPage() {
  const { timeOfDay } = useTimeThemeStore();

  const isNight = timeOfDay == "night";
  const timeOfDayBgStyle = isNight
    ? "bg-gray-900 text-white border border-white"
    : "bg-white/80 text-black border border-black";

  const numCompanies = companies.length;
  companies.sort((a, b) => b.id - a.id);

  return (
    <PageLayout>
      <div
        className={
          "col-span-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        }
      >
        <div className="md:col-span-2">
          <h2 className="text-2xl">Intro.</h2>
          <p>
            {
              "As a Software Engineer with 4 years of experience across multiple companies, I’m driven by a passion for crafting exceptional user experiences and empowering my colleagues."
            }
          </p>
          <p>
            {
              " My work focuses on streamlining complex workflows, alleviating team pain points, and boosting productivity. Nothing is more rewarding than seeing my teammates thrive thanks to optimized processes I’ve helped build."
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
                    {numCompanies - company.id}. {company.title} (
                    {company.period})
                  </h3>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {companies.map((company) => (
        <div key={company.href} id={company.href}>
          <h2 className="text-2xl">
            {company.title}@{company.label}
          </h2>
          <h3>
            {company.period} / {company.team}
          </h3>
          {/* Your KakaoPay content here */}
        </div>
      ))}
    </PageLayout>
  );
}
