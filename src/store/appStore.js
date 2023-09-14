import { create } from "zustand";

export const appStore = create((set) => ({
  appData: {
    schoolName: "",
    courseType: "",
    totalTime: 0,
    date: {
      from: "",
      to: "",
    },
    daysOfWeek: [],
    break: "",
    hoursPerDay: 0,
    partTime: {
      from: "",
      to: "",
    },
    teacher: "",
    lectureHall: "",
  },
  setAppData: (data) => set({ appData: data }),
}));
