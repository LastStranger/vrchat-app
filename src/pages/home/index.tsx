import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import useUserStore from "../../store/useUserStore";
// import {Ionicons} from "@expo/vector-icons";

const Index = () => {
    const { userInfo, pressTest } = useUserStore();

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

    return (
        <View className="flex-1 bg-[#2d363f] px-4 py-10">
            <View className="flex-row items-center justify-center">
                <View className={`mr-2.5 h-6 w-6 rounded-full ${renderStatusColor(userInfo.status)}`} />
                <Text className="text-2xl text-[#1fd1ed]">{userInfo.displayName}</Text>
            </View>
            <Text>{userInfo.statusDescription}</Text>
            <Image
                className="aspect-[256/192] w-full rounded"
                source={{ uri: userInfo.currentAvatarThumbnailImageUrl }}
            />
            <View className="mt-2 min-h-[200] rounded border-2 border-[#ddd]">
                <Text className="p-2 text-base text-[#ddd]">{userInfo.bio}</Text>
            </View>
        </View>
    );
};

export default Index;
