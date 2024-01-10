import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ImageBackground, Image, useWindowDimensions } from "react-native";
import request from "@/utils/request";
import { useFocusEffect } from "@react-navigation/native";
import useUserStore from "@/store/useUserStore";

type Props = {
    userId: string;
};

const Index: React.FC<Props> = props => {
    const [data, setData] = useState<any[]>([]);
    const { userInfo } = useUserStore();
    const { width } = useWindowDimensions();
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
            <View className="h-[256px] w-[320px] overflow-hidden rounded-[8px] bg-[#181b1f]">
                <View className="h-[150] bg-[#252a30]">
                    <ImageBackground className="aspect-[3/1] w-full" source={{ uri: item.bannerUrl }}>
                        <Image
                            // style={{ borderWidth: 3 }}
                            className="absolute bottom-[-32] left-[13] h-[75] w-[75] rounded-full border-[3px] border-[#181b1f]"
                            source={{ uri: item.iconUrl }}
                        />
                    </ImageBackground>
                    <Text className="ml-[100] mr-[10] mt-[4] text-xl font-bold text-white" numberOfLines={1}>
                        {item.name}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View className="my-6">
            <Text className="ml-1.5 text-4xl">{userInfo.displayName}'s Groups</Text>
            <FlatList
                contentOffset={{ x: 0, y: 0 }}
                // snapToStart={false}
                // snapToInterval={320 + 16}
                // snapToInterval={324.5}
                // snapToInterval={320 / 2 + (width / 2 - (width - 16 - 32 - 16))}
                snapToOffsets={data.reduce(
                    (acc, curr, index) => {
                        return [...acc, acc[index] + 336];
                    },
                    [324.5],
                )}
                decelerationRate="fast"
                // snapToEnd={false}
                // snapToAlignment="center"
                contentContainerStyle={{ columnGap: 16, paddingLeft: 16, paddingRight: 32 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Index;
