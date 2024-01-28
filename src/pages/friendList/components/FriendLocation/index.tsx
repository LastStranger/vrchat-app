import React from "react";
import { View, Text, Image } from "react-native";
import { useWorldInfo } from "@/pages/friendList/components/FriendLocation/hook";

type Props = {
    worldKey: string;
    name: string;
};
const Index: React.FC<Props> = props => {
    const data = useWorldInfo(props.worldKey);
    return (
        <View className="mt-[10] flex-row">
            <Image source={{ uri: data?.imageUrl }} className="h-[57] w-[80] rounded" />
            <Text className="ml-[10] flex-1 text-[16] text-white" numberOfLines={3}>
                {data?.name}
            </Text>
        </View>
    );
};

export default Index;
