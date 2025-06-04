// pages/posts/index.tsx
import { CustomAvatar } from "@/components/CustomAvatar";
import PageLayout from "@/components/layout/PageLayout";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";

function Page() {
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night";
  return (
    <PageLayout>
      <div className="space-y-4">
        <div
          className={clsx(
            "overflow-hidden flex flex-col md:flex-row w-full rounded-md",
            isNight
              ? "hover:border hover:border-white active:border active:border-white"
              : "hover:border hover:border-black active:border active:border-black"
          )}
        >
          <div
            className={clsx("flex flex-col text-white p-2 md:p-4")}
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
              isNight ? "bg-black/40 text-white" : "bg-white/80 text-black",
              "flex flex-col w-full p-2 md:p-4"
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
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Page;
