import { create } from "zustand";

type TempState = {
  registered: boolean;
};

type TempAction = {
  register: () => void;
};

type TempStore = TempState & {
  actions: TempAction;
};

const useTempStore = create<TempStore>((set) => ({
  registered: false,
  actions: {
    register: () => set({ registered: true }),
  },
}));

export default useTempStore;
