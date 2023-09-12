import { create } from "zustand";
import { UserInfo, UserInfoState } from "./types";
import request from "../../utils/request";

const useUserStore = create<UserInfoState>(set => ({
    userInfo: null,
    updateUserInfo: (userInfo: UserInfo) => set(state => ({ userInfo: userInfo })),
    pressTest: () => {
        console.warn("pressTest");
    },
    getUserInfo: async () => {
        const encodedAuth = "bGFzdF9zdHJhbmdlcjpsekAyMDIzMDMyMA==";
        const res = await request("/auth/user", {
            headers: { Authorization: `Basic ${encodedAuth}` },
            // withCredentials: false,
        });
        set({ userInfo: res.data });
    },
}));

export default useUserStore;
