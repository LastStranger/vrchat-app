import React from "react";
import { View, Text } from "react-native";
import { useWorldInfo } from "@/pages/friendList/components/FriendLocation/hook";

type Props = {
    worldKey: string;
    name: string;
};
const Index: React.FC<Props> = props => {
    const data = useWorldInfo(props.worldKey);
    return (
        <View className="mt-[10]">
            <Text className="text-[16] text-white">{data?.name}</Text>
        </View>
    );
};

export default Index;
