import { create } from "zustand";

const useUserStore = create<any>((set) => ({
  userInfo: null,
  updateUserInfo: (userInfo: any) =>
    set((state) => ({ ...userInfo, ...state })),
}));

export default useUserStore;
