import { create } from "zustand";
import { UserInfo, UserInfoState } from "./types";
import request from "../../utils/request";

const useUserStore = create<UserInfoState>(set => ({
    userInfo: null,
    friendList: [],
    updateUserInfo: (userInfo: UserInfo) => set(state => ({ userInfo: userInfo })),
    pressTest: () => {
        console.warn("pressTest");
    },
    getUserInfo: async () => {
        // const encodedAuth = "bGFzdF9zdHJhbmdlcjpsekAyMDIzMDMyMA==";
        const encodedAuth = "";
        const res = await request.get("/auth/user", {
            headers: { Authorization: `Basic ${encodedAuth}` },
            // withCredentials: false,
        });
        if (res.data?.requiresTwoFactorAuth) {
            return;
        }
        set({ userInfo: res.data });
    },
    getFriendList: async params => {
        const res = await request.get("/auth/user/friends", {
            params: params,
        });
    },
    clearUserInfo: () => {
        console.warn("clearUserInfo");
        set({ userInfo: null });
    },
}));

export default useUserStore;
