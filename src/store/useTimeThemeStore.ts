import { create } from "zustand";

type TimeOfDay = "morning" | "day" | "evening" | "night";

interface TimeThemeStore {
  hour: number;
  timeOfDay: TimeOfDay;
  primaryColor: string;
  backgroundColor: string;
  isClientInitialized: boolean;
  setHour: (hour: number) => void;
  setTimeOfDay: (time: TimeOfDay) => void;
  initializeTime: () => void;
}

const getTimeOfDay = (hour: number): TimeOfDay => {
  if (hour >= 5 && hour < 11) return "morning";
  if (hour >= 11 && hour < 17) return "day";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
};

const colorMap: Record<TimeOfDay, { primary: string; background: string }> = {
  morning: {
    primary: "#a9ff68", // lime green
    background: "#ff8989", // coral pink
  },
  day: {
    primary: "#fde74c", // yellow
    background: "#82bcf0", // light sky
  },
  evening: {
    primary: "#80ffdb", // white
    background: "#f26a8d", // rich sandy orange
  },
  night: {
    primary: "#eb4b98", // hot pink
    background: "#043565", // navy
  },
};

export const useTimeThemeStore = create<TimeThemeStore>((set, get) => {
  const defaultHour = 0;
  const defaultTimeOfDay = getTimeOfDay(defaultHour);
  const defaultColors = colorMap[defaultTimeOfDay];

  return {
    hour: defaultHour,
    timeOfDay: defaultTimeOfDay,
    primaryColor: defaultColors.primary,
    backgroundColor: defaultColors.background,
    isClientInitialized: false, // 초기값은 false
    setHour: (hour: number) => {
      const timeOfDay = getTimeOfDay(hour);
      const colors = colorMap[timeOfDay];
      set({
        hour,
        timeOfDay,
        primaryColor: colors.primary,
        backgroundColor: colors.background,
      });
    },
    setTimeOfDay: (time: TimeOfDay) => {
      const colors = colorMap[time];
      set({
        timeOfDay: time,
        primaryColor: colors.primary,
        backgroundColor: colors.background,
      });
    },
    initializeTime: () => {
      if (typeof window !== "undefined") {
        const date = new Date();
        const currentHour = date.getHours();
        get().setHour(currentHour);
        set({ isClientInitialized: true }); // 클라이언트에서 초기화 완료
      }
    },
  };
});
