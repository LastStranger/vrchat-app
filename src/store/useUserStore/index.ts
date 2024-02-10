import { create } from "zustand";
import { UserInfo, UserInfoState } from "./types";
import request from "@/utils/request";

const useUserStore = create<UserInfoState>(set => ({
    userInfo: null,
    groupInfo: [],
    friendList: [],
    onlineFriendList: [],
    loading: false,
    updateUserInfo: (userInfo: UserInfo) => set(state => ({ userInfo: userInfo })),
    pressTest: () => {
        console.warn("pressTest");
    },
    getUserInfo: async () => {
        set({ loading: true });
        // const encodedAuth = "bGFzdF9zdHJhbmdlcjpsekAyMDIzMDMyMA==";
        try {
            const res = await request.get("/auth/user", {
                // headers: { Authorization: `Basic ${encodedAuth}` },
                // withCredentials: false,
            });
            set({ userInfo: res.data, loading: false });
        } catch (e) {
            set({ loading: false });
        }
    },
    // initialFriendList:async () => {
    //     set({loading: true});
    //     const res = await request.get("/auth/user/friends", {
    //         params: params,
    //     });
    //     set({ friendList: [{ title: "online Friends", data: res.data }], loading: false });
    // },
    getFriendList: async params => {
        set({ loading: true });
        const res = await request.get("/auth/user/friends", {
            params: params,
        });
        set({ friendList: [{ title: "online Friends", data: res.data }], loading: false });
    },
    clearUserInfo: () => {
        console.warn("clearUserInfo");
        set({ userInfo: null });
    },
    logOut: async () => {
        const res = await request.put("/logout");
        set({ userInfo: null });
    },
}));

export default useUserStore;
