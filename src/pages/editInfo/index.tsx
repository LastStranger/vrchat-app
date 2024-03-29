import React from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";

const Index = () => {
    return (
        <View className="flex-1 bg-[#111111]/80">
            <SafeAreaView>
                <TextInput
                    className="mb-4 h-[400] rounded border-2 border-[#ddd] bg-[#181b1f] text-base text-[#ddd]"
                    multiline
                    // value={userInfo.bio}
                />
            </SafeAreaView>
        </View>
    );
};

export default Index;
