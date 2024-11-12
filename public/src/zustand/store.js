import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  setCount: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStore;
