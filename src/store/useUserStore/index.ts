import { create } from "zustand";
import { UserInfo, UserInfoState } from "./types";

const useUserStore = create<UserInfoState>(set => ({
    userInfo: null,
    updateUserInfo: (userInfo: UserInfo) => set(state => ({ userInfo: userInfo })),
    pressTest: () => {
        console.warn("pressTest");
    },
}));

export default useUserStore;
