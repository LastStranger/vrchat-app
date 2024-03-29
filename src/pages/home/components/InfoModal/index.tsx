import React from "react";
import { KeyboardAvoidingView, Modal, ScrollView, Text, TextInput, View } from "react-native";
import CloseIcon from "@/components/CloseIcon";
import { useVisible } from "@/hooks/useVisible";
import useUserStore from "@/store/useUserStore";

interface Props {}

const Index = React.forwardRef<any, Props>((props, ref) => {
    const [visible, handleModalVisible] = useVisible(ref);
    const userInfo = useUserStore(state => state.userInfo);
    // todo
    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View className="flex-1 bg-[#111111]/80">
                <KeyboardAvoidingView className="flex-1" behavior="padding">
                    <ScrollView
                        className="flex-1"
                        contentContainerStyle={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: "red",
                        }}
                    >
                        {/*<View className="h-[600] items-center justify-center bg-red-500">*/}
                        <View className="mx-2 h-[500] w-[90%] rounded-xl bg-[#252a31] px-2 py-5">
                            <CloseIcon
                                className="absolute right-[-16] top-[-16] h-[32] w-[32] rounded-full bg-[#374151]"
                                onPress={() => handleModalVisible(false)}
                            />
                            <Text className="text-2xl text-white">Bio</Text>
                            <TextInput
                                className="mb-4 h-[400] rounded border-2 border-[#ddd] bg-[#181b1f] text-base text-[#ddd]"
                                multiline
                                value={userInfo.bio}
                            />
                        </View>
                        {/*</View>*/}
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    );
});

export default Index;
