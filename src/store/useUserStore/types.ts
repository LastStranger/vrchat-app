export type UserInfo = {
    id: string;
    displayName: string;
    status: string;
    statusDescription: string;
    bio: string;
    username: string;
    currentAvatarImageUrl: string; // 这个可能是机器人
    currentAvatarThumbnailImageUrl: string; // 这个可能是机器人
    profilePicOverride: string; //  这个可能是plus会员才能更改的默认图片吧
    imageUrl: string; // 这个目前看起来和profilePicOverride是一样的
    currentAvatar: string;
    currentAvatarAssetUrl: string;
    bioLinks: string[];
    tags: string[];
    friends: string[];
    onlineFriends: string[];
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
