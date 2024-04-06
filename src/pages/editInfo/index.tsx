import React, { useRef, useState } from "react";
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    ScrollView,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import useUserStore from "@/store/useUserStore";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { statusColor } from "@/utils";

const Index = () => {
    const userInfo = useUserStore(state => state.userInfo);
    const [tempUserInfo, setTempUserInfo] = useState(userInfo);
    const [tempStatusDescription, setTempStatusDescription] = useState(userInfo?.statusDescription);
    const updateUserInfo = useUserStore(state => state.updateUserInfo);
    const [value, setValue] = useState(userInfo?.status);
    const scrollRef = useRef<ScrollView>(null);
    const bioTextRef = useRef<TextInput>(null);

    const handleTextChange = text => {
        setTempStatusDescription(text);
        // updateUserInfo({ ...userInfo, statusDescription: text });
    };

    const data = [
        { label: "Active", value: "active" },
        { label: "Join Me", value: "join me" },
        { label: "Ask Me", value: "ask me" },
        { label: "Busy", value: "busy" },
    ];

    return (
        <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            // keyboardVerticalOffset={-300}
        >
            <SafeAreaView className="flex-1 bg-[#252a31]">
                <StatusBar barStyle="light-content" />
                {/*<ScrollView className="flex-1 bg-[#252a31] px-2" keyboardDismissMode="on-drag">*/}
                <ScrollView
                    className="flex-1 bg-[#252a31] px-2"
                    ref={scrollRef}
                    // automaticallyAdjustKeyboardInsets
                    // keyboardShouldPersistTaps="always"
                    // keyboardDismissMode="on-drag"
                    // onScrollEndDrag={() => {
                    //     bioTextRef.current?.blur();
                    // }}
                    // onMomentumScrollEnd={() => {
                    //     bioTextRef.current?.blur();
                    // }}
                >
                    {/*<Text>{userInfo?.displayName}</Text>*/}
                    <View>
                        <Text className="text-xl text-white">Status</Text>
                        <Dropdown
                            style={{
                                backgroundColor: "#171b1f",
                                borderRadius: 4,
                                paddingHorizontal: 16,
                                paddingVertical: 8,
                                marginTop: 4,
                            }}
                            selectedTextStyle={{ color: "#ddd", fontSize: 16 }}
                            activeColor="#06353f"
                            containerStyle={{ backgroundColor: "#06353f", borderRadius: 10, borderWidth: 0 }}
                            itemContainerStyle={{ backgroundColor: "#06353f", borderRadius: 10 }}
                            itemTextStyle={{ color: "#ddd", fontSize: 16 }}
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                            }}
                            renderLeftIcon={() => (
                                <View className={`mr-1 h-4 w-4 rounded-full ${statusColor(value)}`} />
                            )}
                            renderItem={(item, selected) => (
                                <View className="h-[40] flex-row items-center px-2">
                                    <View className={`mr-1 h-4 w-4 rounded-full ${statusColor(item.value)}`} />
                                    <Text className="text-base text-[#ddd]">{item.label}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View className="mt-4">
                        <Text className="text-xl text-white">Status Message</Text>
                        <TextInput
                            // style={{ textAlignVertical: "center" }}
                            className="mb-4 mt-1 items-center rounded bg-[#171b1f] px-2 py-4 text-[16px] text-[#ddd]"
                            // maxLength={32}
                            onChangeText={handleTextChange}
                            value={tempStatusDescription}
                        />
                    </View>

                    <View>
                        <Text className="text-xl text-white">Bio</Text>
                        <TextInput
                            // className="mb-4 h-[400] rounded bg-[#181b1f] px-2 py-4 text-base text-white"
                            className="mb-4 rounded bg-[#181b1f] px-2 py-4 text-base text-white"
                            multiline
                            ref={bioTextRef}
                            // onFocus={() => {
                            //     setTimeout(() => {
                            //         scrollRef.current.scrollToEnd({ animated: true });
                            //     }, 200);
                            // }}
                            value={tempUserInfo.bio}
                            onChangeText={text => setTempUserInfo({ ...tempUserInfo, bio: text })}
                            onSelectionChange={event => {
                                console.log(event.nativeEvent.selection);
                                // bioTextRef.current.measure((x, y, width, height, pageX, pageY) => {
                                //     // setCursorPosition({ x: pageX, y: pageY });
                                //     console.log(`光标位置：${pageX}, ${pageY}`);
                                // });
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default Index;
