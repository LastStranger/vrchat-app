import React from "react";
import { Text, View, Image } from "react-native";

const Index = (props: any) => {
    return (
        <View className="mt-[8px] w-full rounded border-2 border-[#8143E6] bg-[#242a31] p-[15px]">
            <View className="flex-row">
                <View className="h-[74] w-[128px] rounded border-2 border-[#67d781]">
                    <Image className="h-full w-full rounded" source={{ uri: props.imageUrl }} />
                </View>
                <View className="mx-[10] my-[5]">
                    <Text className="text-center text-[16px] font-bold text-[#0f9bb1]">{props.displayName}</Text>
                    <Text>{props.statusDescription}</Text>
                </View>
            </View>
        </View>
    );
};

export default Index;
