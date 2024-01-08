import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import request from "@/utils/request";
import { useFocusEffect } from "@react-navigation/native";
import useUserStore from "@/store/useUserStore";

type Props = {
    userId: string;
};

const Index: React.FC<Props> = props => {
    const [data, setData] = useState<any[]>([]);
    const { userInfo } = useUserStore();
    useFocusEffect(
        React.useCallback(() => {
            request.get(`/users/${props.userId}/groups`).then((res: any) => {
                console.log(res);
                setData(res.data);
            });
        }, [props.userId]),
    );

    const renderItem = ({ item }) => {
        return (
            <View className="h-[256px] w-[320px] overflow-hidden rounded-[8px] bg-white">
                <ImageBackground source={{ uri: item.bannerUrl }} className="h-50 aspect-[3/1]">
                    <Text>{item.name}</Text>
                </ImageBackground>
            </View>
        );
    };

    return (
        <View className="my-6">
            <Text className="ml-1.5 text-4xl">{userInfo.displayName}'s Groups</Text>
            <FlatList
                contentContainerStyle={{ columnGap: 16 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Index;
