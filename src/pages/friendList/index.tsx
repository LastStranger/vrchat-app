import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import useUserStore from "../../store/useUserStore";

const Index = () => {
    const userStore = useUserStore();

    useEffect(() => {
        // userStore.getFriendList({ offset: 0 });
    }, []);

    return (
        <View>
            <Text>friendList</Text>
        </View>
    );
};

export default Index;
