import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import FriendLocation from "@/pages/friendList/components/FriendLocation";
import { getWorldKey } from "@/utils";
import { useNavigation } from "@react-navigation/native";

const Index = (props: any) => {
    const navigation = useNavigation<any>();
    const handleGoToProfile = () => {
        navigation.navigate("profile", { id: props.id });
    };

    return (
        <View className="mt-[8px] w-full rounded border-2 border-[#8143E6] bg-[#242a31] p-[15px]">
            <Pressable className="flex-row" onPress={handleGoToProfile}>
                <View className="h-[74] w-[128px] rounded border-2 border-[#67d781]">
                    <Image className="h-full w-full rounded" source={{ uri: props.imageUrl }} />
                </View>
                <View className="my-[5] ml-[10] flex-1 justify-between">
                    <Text className="text-[16px] font-bold text-[#0f9bb1]">{props.displayName}</Text>
                    <Text className="text-[14px] text-white" numberOfLines={2}>
                        {props.statusDescription}
                    </Text>
                </View>
            </Pressable>
            {getWorldKey(props.location) && (
                <FriendLocation worldKey={getWorldKey(props.location)} name={props.displayName} />
            )}
        </View>
    );
};

export default Index;
