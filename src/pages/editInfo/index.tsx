import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, ScrollView } from "react-native";
import useUserStore from "@/store/useUserStore";

const Index = () => {
    const userInfo = useUserStore(state => state.userInfo);
    const [tempStatusDescription, setTempStatusDescription] = useState(userInfo?.statusDescription);
    const updateUserInfo = useUserStore(state => state.updateUserInfo);

    const handleTextChange = text => {
        setTempStatusDescription(text);
        // updateUserInfo({ ...userInfo, statusDescription: text });
    };

    return (
        <ScrollView className="flex-1 bg-[#111111]/80 px-2">
            <SafeAreaView>
                <Text>{userInfo?.displayName}</Text>
                <View>
                    <Text className="text-xl text-white">Status Message</Text>
                    <TextInput
                        className="mb-4 h-10 rounded border-2 border-[#ddd] bg-[#181b1f] text-base text-[#ddd]"
                        // maxLength={32}
                        onChangeText={handleTextChange}
                        value={tempStatusDescription}
                    />
                </View>
                <View>
                    <Text className="text-xl text-white">Bio</Text>
                    <TextInput
                        className="mb-4 h-[400] rounded border-2 border-[#ddd] bg-[#181b1f] text-base text-[#ddd]"
                        multiline
                        // value={userInfo.bio}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Index;
