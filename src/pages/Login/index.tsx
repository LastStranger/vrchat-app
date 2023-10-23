import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FormType } from "./types";
import request from "../../utils/request";
import { Buffer } from "buffer";
import { StatusBar } from "expo-status-bar";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import useUserStore from "../../store/useUserStore";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Url } from "../../navigation/types";
import Animated, {
    FadeIn,
    FadeInDown,
    FadeInUp,
    FadeOut,
    FadeOutDown,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import Toast from "react-native-root-toast";
import { Image } from "expo-image";

const AnimatedImage = Animated.createAnimatedComponent(Image);
const Index = () => {
    const [form, setForm] = useState<FormType>(null);
    const [ifNeedCode, setIfNeedCode] = useState<boolean>(false);
    const userStore = useUserStore();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, Url>>();

    const handleFormChange = (item: any) => {
        console.warn(item);
        setForm({
            ...form,
            ...item,
        });
    };

    const handleEmailVerify = async () => {
        const res = await request.post(
            "/auth/twofactorauth/emailotp/verify",
            {
                code: form?.authCode,
            },
            {
                headers: { "Content-Type": "application/json" },
                // withCredentials: false,
            },
        );
        // return;
        const Buffer = require("buffer").Buffer;
        let encodedAuth = new Buffer(`${encodeURI(form?.username)}:${encodeURI(form?.password)}`).toString("base64");
        const userInfo = await request.get("/auth/user", {
            headers: { Authorization: `Basic ${encodedAuth}` },
        });
        console.log(userInfo);
    };

    const handleLogin = async () => {
        if (ifNeedCode) {
            handleEmailVerify();
            return;
        }
        // console.warn(form);
        // return;
        const Buffer = require("buffer").Buffer;
        let encodedAuth = new Buffer(`${encodeURI(form?.username)}:${encodeURI(form?.password)}`).toString("base64");
        const res = await request.get("/auth/user", {
            headers: { Authorization: `Basic ${encodedAuth}` },
            withCredentials: false,
        });
        // console.log(res);
        if (res.data.requiresTwoFactorAuth) {
            setIfNeedCode(true);
            return;
        }

        console.warn(res.data?.bio);
        userStore.updateUserInfo(res.data);
    };

    const handleGoToHome = () => {
        navigation.navigate(Url.Test);
    };

    return (
        <View className="flex-1 items-center justify-center bg-[#2d363f] px-4">
            <StatusBar style="light" />
            <AnimatedImage
                className="aspect-[118/50] w-32"
                source={{
                    uri: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                }}
                entering={FadeInUp.delay(150)}
            />
            <Animated.View className="mt-3 w-full" entering={FadeInDown.delay(150)}>
                <TextInput
                    className="color-[#6ae3f9] rounded border-2 border-[#053c48] bg-[#05191d] px-3 py-3 text-lg/6"
                    placeholder="Username/Email"
                    placeholderTextColor="#757575"
                    value={form?.username}
                    inputMode="text"
                    onChangeText={val => handleFormChange({ username: val })}
                />
                <TextInput
                    className="color-[#6ae3f9] mt-2 rounded border-2 border-[#053c48] bg-[#05191d] px-3 py-3 text-lg/6"
                    placeholder="Password"
                    placeholderTextColor="#757575"
                    value={form?.password}
                    onChangeText={val => handleFormChange({ password: val })}
                />
                {ifNeedCode && (
                    <TextInput
                        className="color-[#6ae3f9] mt-2 rounded border-2 border-[#053c48] bg-[#05191d] px-3 py-3 text-lg/6"
                        placeholder="验证码"
                        placeholderTextColor="#757575"
                        onChangeText={val => handleFormChange({ authCode: val })}
                    />
                )}
                <TouchableOpacity className="full mt-2 items-center rounded bg-[#064b5c] p-2" onPress={handleLogin}>
                    <Text className="color-[#6ae3f9] text-2xl">Login</Text>
                </TouchableOpacity>
                <TouchableOpacity className="full mt-2 items-center rounded bg-[#064b5c] p-2" onPress={handleGoToHome}>
                    <Text className="color-[#6ae3f9] text-2xl">tempBtn</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

export default Index;
