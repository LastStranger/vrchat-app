export type UserInfo = {
    id: string;
    displayName: string;
    status: string;
    statusDescription: string;
    bio: string;
    username: string;
    currentAvatarImageUrl: string;
    currentAvatarThumbnailImageUrl: string;
    currentAvatar: string;
    currentAvatarAssetUrl: string;
    bioLinks: string[];
    tags: string[];
};

export interface UserInfoState {
    userInfo: UserInfo;
    friendList: any;
    updateUserInfo: (userInfo: UserInfo) => void;
    pressTest: () => void;
    getUserInfo: () => Promise<any>;
    getFriendList: (params: any) => void;
    clearUserInfo: () => void;
    logOut: () => void;
}
