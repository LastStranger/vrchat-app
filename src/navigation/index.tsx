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
import EditInfo from "@/pages/editInfo";

const Stack = createNativeStackNavigator();

function AppNavigation() {
    const [isSignIn, setIsSignIn] = useState(false);
    const userInfo = useUserStore(state => state.userInfo);
    const getUserInfo = useUserStore(state => state.getUserInfo);

    // console.warn("AppNavigation renderings");

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <NavigationContainer>
            {/*<Stack.Navigator initialRouteName={Url.Login} screenOptions={{ headerShown: false }}>*/}
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {userInfo ? (
                    <>
                        <Stack.Screen name="main" component={Main} />
                        <Stack.Screen name="profile" component={Profile} />
                        <Stack.Screen name="editInfo" component={EditInfo} />
                    </>
                ) : (
                    // <>
                    //     <Stack.Screen name="home" component={Home} />
                    //     <Stack.Screen name="friendList" component={FriendList} />
                    // </>
                    <>
                        <Stack.Screen name="login" component={Login} />
                        {/*<Stack.Screen name="test" component={TestPage} />*/}
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
