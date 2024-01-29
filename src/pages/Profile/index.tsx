import React from "react";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import useProfileInfo from "@/pages/Profile/hooks/useProfileInfo";
// import { SvgUri } from "react-native-svg";

type Props = {
    id: string;
};
const Index = ({ route, navigation }) => {
    const data = useProfileInfo(route.params.id);
    return (
        <View className="flex-1">
            {/*<SvgUri width="100%" height="100%" uri="https://assets.vrchat.com/www/images/Background_lines.svg" />*/}
            {/*<ImageBackground*/}
            {/*    className="flex-1 bg-red-500"*/}
            {/*    resizeMode="cover"*/}
            {/*    source={{ uri: "https://assets.vrchat.com/www/images/Background_lines.svg" }}*/}
            {/*>*/}
            {/*    <SafeAreaView>*/}
            {/*        <Text className="ml-1.5 text-4xl font-bold text-white">{data?.displayName}'s Profile</Text>*/}
            {/*    </SafeAreaView>*/}
            {/*</ImageBackground>*/}
        </View>
    );
};

export default Index;
