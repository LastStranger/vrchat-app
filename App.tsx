import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
    return (
        <RootSiblingParent>
            <Navigation />
        </RootSiblingParent>
    );
}
