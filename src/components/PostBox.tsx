// components/PostBox.tsx
import React from "react";
import clsx from "clsx";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";

interface PostBoxProps {
  label: string;
}

export const PostBox = ({ label }: PostBoxProps) => {
  const { primaryColor } = useTimeThemeStore();

  const fontSize =
    label.length <= 3 ? "text-4xl" : label.length <= 6 ? "text-2xl" : "text-xl";

  return (
    <div className="flex-1 aspect-[5/6] border border-white relative rounded-sm mx-1">
      {/* 뚜껑 부분 */}
      <div className="absolute top-0 left-0 w-full h-[25%] border-b border-white rounded-t-sm" />

      {/* 라벨 텍스트 - 중앙 정렬 */}
      <div
        className={clsx(
          "w-full h-full flex items-center justify-center text-center px-1",
          fontSize
        )}
        style={{ color: primaryColor }}
      >
        {label}
      </div>
    </div>
  );
};
