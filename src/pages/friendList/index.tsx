import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import useUserStore from "../../store/useUserStore";
import FriendCard from "@/pages/friendList/components/FriendCard";

const Index = () => {
    const { friendList, getFriendList } = useUserStore();
    // const [friendList, setFriendList] = useState([]);

    useEffect(() => {
        // offline=false&n=50&offset=0
        getFriendList({ offset: 0, offline: false, n: 50 });
    }, []);

    return (
        <View>
            <Text>在线好友数量{friendList.length}</Text>
            <FlatList data={friendList} renderItem={() => <FriendCard />} />
        </View>
    );
};

export default Index;
