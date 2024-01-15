import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, StatusBar, TextInput, SectionList } from "react-native";
import useUserStore from "../../store/useUserStore";
import FriendCard from "@/pages/friendList/components/FriendCard";

const Index = () => {
    const { friendList, getFriendList, userInfo } = useUserStore();
    // const [friendList, setFriendList] = useState([]);

    useEffect(() => {
        // offline=false&n=50&offset=0
        getFriendList({ offset: 0, offline: false, n: 50 });
    }, []);

    const renderItem = ({ item }) => <FriendCard {...item} />;

    return (
        <View className="bg-[#050505] px-5">
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
                <View className="flex-row items-center justify-between">
                    <Text className="text-[28px] text-white">Friends</Text>
                    <Text className="text-[28px] text-white">
                        {userInfo?.onlineFriends?.length}/{userInfo?.friends?.length}
                    </Text>
                </View>
                <TextInput className="mt-4 h-[28px] w-full rounded bg-[#3b3b3b]" placeholderTextColor="white" />
                <SectionList
                    keyExtractor={(item, index) => item.id}
                    sections={friendList}
                    renderItem={renderItem}
                    renderSectionHeader={({ section }) => (
                        <Text className="text-[26px] font-bold text-white">{section.title}</Text>
                    )}
                />
            </SafeAreaView>
            <Text>在线好友数量{friendList.length}</Text>
            {/*<FlatList data={friendList} renderItem={() => <FriendCard />} />*/}
        </View>
    );
};

export default Index;
