// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/pages/home";
import FriendList from "@/pages/friendList";
import { Text, BottomNavigation } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const Tab = createBottomTabNavigator();

const Index = () => {
    return (
        <Tab.Navigator
            // labeled={false}
            // barStyle={{ backgroundColor: "tomato" }}
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
            // tabBar={({ state, insets }) => <BottomNavigation.Bar navigationState={state} safeAreaInsets={insets} />}
        >
            <Tab.Screen
                name="friendList"
                labeled={false}
                component={FriendList}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user-friends" size={28} color={color} />,
                    tabBarActiveTintColor: "black",
                }}
            />
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} color={color} />,
                    tabBarActiveTintColor: "black",
                }}
            />
        </Tab.Navigator>
    );
};

export default Index;
