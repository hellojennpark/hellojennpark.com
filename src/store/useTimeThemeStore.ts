import { create } from "zustand";

type TimeTheme = "morning" | "day" | "evening" | "night";

interface TimeThemeStore {
  hour: number;
  themeTime: TimeTheme;
  primaryColor: string;
  backgroundColor: string;
  setHour: (hour: number) => void;
}

const getTimeTheme = (hour: number): TimeTheme => {
  if (hour >= 5 && hour < 11) return "morning";
  if (hour >= 11 && hour < 17) return "day";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
};

const colorMap: Record<TimeTheme, { primary: string; background: string }> = {
  morning: {
    primary: "#a9ff68", // ocean blue
    background: "#ff8989", // light sky
  },
  day: {
    primary: "#fde74c", // blue
    background: "#5bc0eb", // yellow
  },
  evening: {
    primary: "#00a896", // deep teal
    background: "#f4a261", // rich sandy orange
  },
  night: {
    primary: "#eb4b98", // pink
    background: "#043565", // navy
  },
};

export const useTimeThemeStore = create<TimeThemeStore>((set) => {
  const hour = new Date().getHours();
  const theme = getTimeTheme(hour);
  const colors = colorMap[theme];

  return {
    hour,
    themeTime: theme,
    primaryColor: colors.primary,
    backgroundColor: colors.background,
    setHour: (hour: number) => {
      const theme = getTimeTheme(hour);
      const colors = colorMap[theme];
      set({
        hour,
        themeTime: theme,
        primaryColor: colors.primary,
        backgroundColor: colors.background,
      });
    },
  };
});
