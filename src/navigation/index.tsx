import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Login from "../pages/Login";
import { Url } from "./types";

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Url.Login} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Url.Home} component={Home} />
                <Stack.Screen name={Url.Login} component={Login} />
                {/*<Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
