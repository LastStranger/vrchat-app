import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Login from "../pages/Login";
import { Url } from "./types";
import { useEffect, useState } from "react";
import useUserStore from "../store/useUserStore";
import FriendList from "../pages/friendList";
import TestPage from "../pages/testPage";
import Main from "@/pages/main";
import Profile from "@/pages/Profile";

const Stack = createNativeStackNavigator();

function AppNavigation() {
    const [isSignIn, setIsSignIn] = useState(false);
    const userStore = useUserStore();

    useEffect(() => {
        userStore.getUserInfo();
    }, []);

    return (
        <NavigationContainer>
            {/*<Stack.Navigator initialRouteName={Url.Login} screenOptions={{ headerShown: false }}>*/}
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {userStore.userInfo ? (
                    <>
                        <Stack.Screen name="main" component={Main} />
                        <Stack.Screen name="profile" component={Profile} />
                    </>
                ) : (
                    // <>
                    //     <Stack.Screen name="home" component={Home} />
                    //     <Stack.Screen name="friendList" component={FriendList} />
                    // </>
                    <>
                        <Stack.Screen name="login" component={Login} />
                        <Stack.Screen name="test" component={TestPage} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
