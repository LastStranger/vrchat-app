import React from "react";
import { Modal, Text, TextInput, View } from "react-native";
import CloseIcon from "@/components/CloseIcon";
import { useVisible } from "@/hooks/useVisible";

interface Props {}

const Index = React.forwardRef<any, Props>((props, ref) => {
    const [visible, handleModalVisible] = useVisible(ref);

    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View className="h-full w-full items-center justify-center bg-[#111111]/80">
                <View className="mx-2 min-h-[500] w-[90%] rounded-xl bg-[#252a31] px-2 py-5">
                    <CloseIcon
                        className="absolute right-[-16] top-[-16] h-[32] w-[32] rounded-full bg-[#374151]"
                        onPress={() => handleModalVisible(false)}
                    />
                    <Text className="text-2xl text-white">Bio</Text>
                    <TextInput className="min-h-[100] bg-[#181b1f]" multiline />
                </View>
            </View>
        </Modal>
    );
});

export default Index;
