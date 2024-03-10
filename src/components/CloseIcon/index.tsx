import { AntDesign } from "@expo/vector-icons";
import { Pressable, PressableProps, View } from "react-native";

interface Props extends PressableProps {}
const Index: React.FC<Props> = ({ className, ...props }) => {
    return (
        <Pressable className={`items-center justify-center ${className}`} hitSlop={10} {...props}>
            <AntDesign name="close" size={24} color="#9ca3af" />
        </Pressable>
    );
};

export default Index;
