// pages/posts/index.tsx
import { CustomAvatar } from "@/components/CustomAvatar";
import PageLayout from "@/components/layout/PageLayout";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

function Page() {
  const { isNight } = useTimeThemeStore();
  return (
    <PageLayout>
      <div className="space-y-4">
        <div
          className={clsx(
            "overflow-hidden flex flex-col md:flex-row w-full rounded-md",
            isNight()
              ? "hover:border hover:border-white active:border active:border-white"
              : "hover:border hover:border-black active:border active:border-black"
          )}
        >
          <div
            className={clsx("flex flex-col text-white p-4")}
            style={{
              backgroundColor: "rgba(40,90,128, 1)",
            }}
          >
            <CustomAvatar name="emery" size="xl" />
            <p className="font-semibold">Withsy</p>
            <p>Customizable AI Chat Platform</p>
          </div>
          <div
            className={clsx(
              isNight() ? "bg-black/40 text-white" : "bg-white/80 text-black",
              "flex flex-col w-full p-4 space-y-2 md:space-y-4"
            )}
          >
            <p>
              Withsy is a customizable AI chat platform designed for
              personalized, transparent, and organized conversations with
              multiple AI models.
            </p>
            <p>
              Built with Next.js and PostgreSQL, the platform integrates
              multiple AI models (GPT, Gemini) within single conversations and
              implements a branching system for clean conversation forking. Key
              features include custom theming, complete prompt visibility,
              message bookmarking, and multi-model support - all developed
              through user feedback and iterative design.
            </p>
            <div className="flex flex-row justify-end gap-3">
              <Link
                href="/blog/project-withsy"
                className={clsx(
                  "px-4 py-2 rounded-md text-sm font-semibold border",
                  isNight()
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-black text-black hover:bg-black hover:text-white"
                )}
              >
                Read Post About This Project
              </Link>
              <Link
                href="https://withsy.chat"
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "px-4 py-2 rounded-md text-sm font-semibold flex flex-row items-center",
                  isNight()
                    ? "bg-white text-black hover:bg-white/80"
                    : "bg-black text-white hover:bg-black/80"
                )}
              >
                Try Withsy
                <SquareArrowOutUpRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Page;
