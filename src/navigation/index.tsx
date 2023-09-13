import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Login from "../pages/Login";
import { Url } from "./types";
import { useEffect, useState } from "react";
import useUserStore from "../store/useUserStore";
import FriendList from "../pages/friendList";

const Stack = createNativeStackNavigator();

function AppNavigation() {
    const [isSignIn, setIsSignIn] = useState(false);
    const userStore = useUserStore();

    useEffect(() => {
        userStore.getUserInfo();
    }, []);

    console.warn(userStore.userInfo?.displayName);

    return (
        <NavigationContainer>
            {/*<Stack.Navigator initialRouteName={Url.Login} screenOptions={{ headerShown: false }}>*/}
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {userStore.userInfo ? (
                    <>
                        <Stack.Screen name={Url.Home} component={Home} />
                        <Stack.Screen name={Url.FriendList} component={FriendList} />
                    </>
                ) : (
                    <Stack.Screen name={Url.Login} component={Login} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
