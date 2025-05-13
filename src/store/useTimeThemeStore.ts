// stores/useTimeThemeStore.ts
import { create } from "zustand";

type TimeTheme = "morning" | "day" | "evening" | "night";

interface TimeThemeStore {
  hour: number;
  setHour: (hour: number) => void;
  themeTime: TimeTheme;
  updateThemeTime: (hour: number) => void;
}

const getTimeTheme = (hour: number): TimeTheme => {
  if (hour >= 5 && hour < 11) return "morning";
  if (hour >= 11 && hour < 17) return "day";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
};

export const useTimeThemeStore = create<TimeThemeStore>((set) => ({
  hour: new Date().getHours(),
  themeTime: getTimeTheme(new Date().getHours()),
  setHour: (hour) => {
    set({ hour });
    set({ themeTime: getTimeTheme(hour) });
  },
  updateThemeTime: (hour) => {
    set({ themeTime: getTimeTheme(hour) });
  },
}));
