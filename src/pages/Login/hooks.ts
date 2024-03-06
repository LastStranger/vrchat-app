import { useEffect, useState } from "react";
import { FormType } from "./types";
import { zustandStorage } from "@/store/mmkv";
import {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withTiming,
} from "react-native-reanimated";

export const useForm = () => {
    const [form, setForm] = useState<FormType>(null);

    useEffect(() => {
        const loginInfo = zustandStorage.getItem("loginInfo");
        if (loginInfo) {
            setForm(JSON.parse(loginInfo as string));
        }
    }, []);

    return [form, setForm] as const;
};

export const useFlipAnimate = (loading: boolean) => {
    const degree = useSharedValue(0);

    useEffect(() => {
        if (loading) {
            degree.value = withRepeat(
                withSequence(
                    withTiming(90, { duration: 800, easing: Easing.linear }),
                    withTiming(0, {
                        duration: 800,
                        easing: Easing.linear,
                    }),
                ),
                -1,
            );
        } else {
            degree.value = 0;
        }
    }, [loading]);

    return useAnimatedStyle(() => ({
        transform: [{ rotateY: `${degree.value}deg` }],
    }));
};
