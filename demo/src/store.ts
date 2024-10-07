import { create } from "zustand";

export enum View {
  BOXES,
  WEBSITE,
}

interface Store {
  view: View;
  setView: (view: View) => void;
  cantTouchThisEnabled: boolean;
  setCantTouchThisEnabled: (cantTouchThisEnabled: boolean) => void;
}

export const useAppStore = create<Store>((set) => ({
  view: View.BOXES,
  setView: (view) => set({ view }),
  cantTouchThisEnabled: true,
  setCantTouchThisEnabled: (cantTouchThisEnabled) =>
    set({ cantTouchThisEnabled }),
}));
