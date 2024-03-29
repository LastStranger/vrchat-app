import { useEffect, useState } from "react";
import request from "@/utils/request";
import { getLanguage } from "@/utils";

type Params = {
    id: string;
};

type ProfileData = {
    id: string;

    currentAvatarImageUrl: string;
    profilePicOverride: string;
    displayName: string;
    note?: string;
    status: string;
    statusDescription: string;
    tags: string[];
    bio: string;
    languages: string[];
};

const useProfileInfo = (id: string): [ProfileData, boolean] => {
    const [data, setData] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        request
            .get(`/users/${id}`)
            .then(res => {
                const languages = res.data?.tags
                    ?.filter(each => each.startsWith("language_"))
                    .reduce((acc, tag) => [...acc, getLanguage(tag)], []);
                setData({
                    ...res.data,
                    languages,
                    currentAvatarImageUrl: res.data?.profilePicOverride ?? res.data?.currentAvatarImageUrl,
                });
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return [data, loading];
};

export default useProfileInfo;
