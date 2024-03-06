import React, { useMemo } from "react";
import { View, Text, Pressable, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import useUserStore from "../../store/useUserStore";
import { ParamListBase, useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Url } from "@/navigation/types";
import { getLanguage, getRank, getRankColor, getRankColorByRank } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import Groups from "@/pages/home/components/Groups";
import { Image } from "expo-image";
// import {Ionicons} from "@expo/vector-icons";

const Index = () => {
    // const { userInfo, pressTest, clearUserInfo, logOut, getUserInfo } = useUserStore();

    const userInfo = useUserStore(state => state.userInfo);
    const clearUserInfo = useUserStore(state => state.clearUserInfo);
    const logOut = useUserStore(state => state.logOut);
    const getUserInfo = useUserStore(state => state.getUserInfo);
    const navigation = useNavigation<any>();
    // const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, Url>>();

    useFocusEffect(
        React.useCallback(() => {
            // todo 是否有更好的方式
            // getUserInfo();
            // const unsubscribe = API.subscribe(userId, user => setUser(user));
            // return () => unsubscribe();
        }, []),
    );

    const currentRank = useMemo(() => {
        const prefixRankName = [...userInfo.tags]?.pop();
        return getRank(prefixRankName);
    }, [userInfo]);

    const languageTags = useMemo(() => {
        return userInfo.tags
            .filter(each => each.startsWith("language_"))
            .reduce((acc, tag) => [...acc, getLanguage(tag)], []);
    }, [userInfo]);

    const renderStatusColor = (status: string) => {
        switch (status) {
            case "ask me":
                return "bg-askMe";
            case "active":
                return "bg-online";
            case "join me":
                return "bg-joinMe";
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

    const handleLogOut = () => {
        logOut();
    };

    // console.warn("rendering home1");

    return (
        <View className="flex-1 bg-[#2d363f]">
            <SafeAreaView className="flex-1">
                <ScrollView className="flex-1">
                    <View className="overflow-hidden rounded-lg bg-[#181b1f]">
                        <Image
                            className="aspect-[390/215] w-full"
                            source={{ uri: userInfo.currentAvatarThumbnailImageUrl }}
                        />
                        <View className="px-5 py-3">
                            <View className="mb-1.5 mt-1 flex-row items-center">
                                <Text className="text-3xl font-bold text-[#f8f9fa]">{userInfo.displayName}</Text>
                            </View>
                            <View className="flex-row items-center justify-between">
                                <View className="flex-row items-center">
                                    <View
                                        className={`mr-2.5 h-4 w-4 rounded-full ${renderStatusColor(userInfo.status)}`}
                                    />
                                    <Text className="w-[210] text-xl text-vrcWhite">{userInfo.statusDescription}</Text>
                                </View>
                                <View
                                    style={{
                                        backgroundColor: getRankColorByRank(currentRank),
                                        transform: [{ scale: 0.8 }],
                                    }}
                                    className="flex-row items-center justify-center rounded-lg px-2 py-1"
                                >
                                    <Ionicons name="shield" size={12} color="black" />
                                    <Text className="ml-1">{currentRank}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <ScrollView className="mx-2 my-9 h-44 rounded border-2 border-[#ddd]">
                        <Text className="p-2 text-base text-[#ddd]">{userInfo.bio}</Text>
                    </ScrollView>
                    <View className="mx-2">
                        <Text className="text-xl text-vrcWhite">I speak</Text>
                        <View className="mt-4 flex-row">
                            {languageTags.map(each => (
                                <View
                                    key={each}
                                    // style={{ backgroundColor: "rgba(17,17,17,0.8)" }}
                                    className="mr-3 rounded-full bg-[#111111] bg-opacity-80 px-3 py-1"
                                >
                                    <Text className="text-base font-bold text-vrcWhite">{each}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <Groups userId={userInfo?.id} />
                    <TouchableOpacity className="mx-2 my-2 items-center rounded bg-[#064b5c] p-2" onPress={logOut}>
                        <Text className="color-[#6ae3f9] text-2xl">退出登录</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default Index;
