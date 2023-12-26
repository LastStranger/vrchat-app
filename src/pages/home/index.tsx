import React, { useMemo } from "react";
import { View, Text, Pressable, Image, TouchableOpacity, SafeAreaView } from "react-native";
import useUserStore from "../../store/useUserStore";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Url } from "@/navigation/types";
import { getLanguage, getRank } from "@/utils";
// import {Ionicons} from "@expo/vector-icons";

const Index = () => {
    const { userInfo, pressTest, clearUserInfo } = useUserStore();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, Url>>();

    const currentRank = useMemo(() => {
        const prefixRankName = userInfo.tags?.pop();
        return getRank(prefixRankName);
    }, [userInfo]);

    const languageTags = useMemo(() => {
        return userInfo.tags.reduce((acc, tag) => [...acc, getLanguage(tag)], []);
    }, [userInfo]);

    const renderStatusColor = (status: string) => {
        switch (status) {
            case "ask me":
                return "bg-askMe";
            case "active":
                return "bg-online";
            default:
                return "";
        }
    };

    const handleJumpToFriendsList = () => {
        navigation.navigate(Url.FriendList);
    };

    const handleJumpToLogin = () => {
        clearUserInfo();
    };

    return (
        <SafeAreaView className="flex-1 bg-[#2d363f]">
            <View className="flex-1">
                <View>
                    <Image
                        className="aspect-[390/215] w-full rounded"
                        source={{ uri: userInfo.currentAvatarThumbnailImageUrl }}
                    />
                    <View className="px-5 py-3">
                        <View className="mb-1.5 mt-1 flex-row items-center">
                            <Text className="text-3xl font-bold text-[#1fd1ed] text-[#f8f9fa]">
                                {userInfo.displayName}
                            </Text>
                        </View>
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center">
                                <View className={`mr-2.5 h-4 w-4 rounded-full ${renderStatusColor(userInfo.status)}`} />
                                <Text className="text-xl text-vrcWhite">{userInfo.statusDescription}AFK coding</Text>
                            </View>
                            <View className="flex-row items-center justify-center rounded-lg px-2 py-1">
                                <Text>盾牌</Text>
                                <Text>{currentRank}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="mt-2 min-h-[200] rounded border-2 border-[#ddd]">
                    <Text className="p-2 text-base text-[#ddd]">{userInfo.bio}</Text>
                </View>
                <TouchableOpacity onPress={handleJumpToFriendsList}>
                    <Text className="text-rose-300">跳转到朋友列表</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleJumpToLogin}>
                    <Text className="text-rose-300">跳转到登录页面</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Index;
