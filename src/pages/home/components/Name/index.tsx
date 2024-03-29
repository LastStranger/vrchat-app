import React from "react";
import { Pressable, Text, View, Modal, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useUserStore from "@/store/useUserStore";

// import InfoModal from "@/pages/home/components/InfoModal";

interface Props {
    displayName: string;
}

const Index: React.FC<Props> = props => {
    const { displayName, id } = useUserStore(state => state.userInfo);
    // const infoModalRef = React.useRef<any>(null);
    const navigation = useNavigation<any>();

    const handleGoToEditInfoPage = () => {
        // navigation.navigate("editInfo", { id: props.id });
        navigation.navigate("editInfo");
    };

    return (
        <View>
            <View className="mb-1.5 mt-1 flex-row items-center">
                <Text className="text-3xl font-bold text-[#f8f9fa]">{displayName}</Text>
                <Pressable
                    className="ml-2 h-[40] w-[40] items-center justify-center rounded-full bg-[#064b5c]"
                    onPress={handleGoToEditInfoPage}
                >
                    <MaterialIcons name="edit" size={24} color="#6ae3f9" />
                </Pressable>
            </View>
            {/*<InfoModal ref={infoModalRef} />*/}
        </View>
    );
};

export default Index;
