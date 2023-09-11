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
};

export interface UserInfoState {
    userInfo: UserInfo;
    updateUserInfo: (userInfo: UserInfo) => void;
    pressTest: () => void;
}
