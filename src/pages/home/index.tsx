import React from "react";
import { View, Text } from "react-native";
import useUserStore from "../../store/useUserStore";
// import {Ionicons} from "@expo/vector-icons";

const Index = () => {
    const userStore = useUserStore();

    return (
        <View>
            <Text>Home</Text>
            <Text>{userStore?.bio}</Text>
        </View>
    );
};

export default Index;
