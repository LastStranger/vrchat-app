import React, { useState } from "react";
import { Text, View } from "react-native";
import Animated, { FadeInDown, FadeInUp, FadeOut, FadeOutDown } from "react-native-reanimated";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Url } from "../../navigation/types";

const Index = () => {
    const [show, setShow] = useState(true);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, Url>>();

    const handleGoHome = () => {
        // navigation.navigate(Url.Login);
        navigation.push(Url.Login);
    };

    return (
        <View className="flex-1 bg-rose-300">
            <Text className="mt-[200]" onPress={() => setShow(!show)}>
                it is just a test11
            </Text>
            <Text onPress={handleGoHome}>go home</Text>
            {show && (
                <Animated.View
                    className="h-[300] w-full bg-white"
                    entering={FadeInDown.delay(200)}
                    exiting={FadeOutDown}
                >
                    <Text>21</Text>
                </Animated.View>
            )}
        </View>
    );
    // return (
    //     <View className="flex-1 bg-rose-300">
    //         {show && (
    //             <Animated.View
    //                 style={{ height: 300, width: "100%", backgroundColor: "white" }}
    //                 entering={FadeInUp}
    //                 exiting={FadeOutDown}
    //             >
    //                 <Text>21</Text>
    //             </Animated.View>
    //         )}
    //         <Text className="mt-[200]" onPress={() => setShow(!show)}>
    //             it is just a test11
    //         </Text>
    //     </View>
    // );
};

export default Index;
