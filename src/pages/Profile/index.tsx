import React from "react";
import { View, Text, SafeAreaView, ImageBackground, Image } from "react-native";
import useProfileInfo from "@/pages/Profile/hooks/useProfileInfo";
import { SvgUri } from "react-native-svg";
import { getRankColor, getRankColorByTags, getRankNameByTags, statusColor } from "@/utils";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    id: string;
};
const Index = ({ route, navigation }) => {
    const data = useProfileInfo(route.params.id);
    return (
        <View className="flex-1 bg-[#0e1013]">
            <SvgUri
                className="absolute"
                width="100%"
                height="100%"
                uri="https://assets.vrchat.com/www/images/Background_lines.svg"
            />
            <SafeAreaView>
                <Text className="ml-1.5 text-4xl font-bold text-white">{data?.displayName}'s Profile</Text>
                <View className="mt-9 min-h-[325] w-full bg-black">
                    <Image
                        className="h-[215] w-full"
                        resizeMode="cover"
                        source={{ uri: data?.currentAvatarImageUrl }}
                    />
                    <View className="px-5 py-3">
                        <Text className="text-4xl font-bold text-white">{data?.displayName}</Text>
                        <View className="mt-1 flex-row items-center justify-between">
                            <View className="flex-row items-center">
                                <View className={`h-4 w-4 rounded-full ${statusColor(data?.status)}`} />
                                <Text className="ml-1 text-xl text-white">{data?.statusDescription}</Text>
                            </View>
                            <View
                                style={{ backgroundColor: getRankColorByTags(data?.tags) }}
                                className="flex-row items-center justify-center rounded-lg px-2 py-1"
                            >
                                <Ionicons name="shield" size={12} color="white" />
                                <Text className="ml-1 text-white">{getRankNameByTags(data?.tags)}</Text>
                            </View>
                        </View>
                    </View>
                    <View className="mt-2 max-h-[600] w-full bg-[#262a30] p-2">
                        <Text className="text-[#dadada]">{data?.bio}</Text>
                        <View className="mt-2">
                            <Text className="text-xl text-vrcWhite">I speak</Text>
                            <View className="mt-4 flex-row">
                                {data?.languages?.map(each => (
                                    <View
                                        // style={{ backgroundColor: "rgba(17,17,17,0.8)" }}
                                        className="mr-3 rounded-full bg-[#111111] bg-opacity-80 px-3 py-1"
                                    >
                                        <Text className="text-base font-bold text-vrcWhite">{each}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>

            {/*<ImageBackground*/}
            {/*    className="flex-1 bg-red-500"*/}
            {/*    resizeMode="cover"*/}
            {/*    source={{ uri: "https://assets.vrchat.com/www/images/Background_lines.svg" }}*/}
            {/*>*/}

            {/*</ImageBackground>*/}
        </View>
    );
};

export default Index;
