import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import request from "../../utils/request";
import { Buffer } from "buffer";
import { StatusBar } from "expo-status-bar";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import useUserStore from "../../store/useUserStore";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { Image } from "expo-image";
import { zustandStorage } from "@/store/mmkv";
import { useForm } from "@/pages/Login/hooks";

const AnimatedImage = Animated.createAnimatedComponent(Image);
const Index = () => {
    const [form, setForm] = useForm();
    const [ifNeedCode, setIfNeedCode] = useState<boolean>(false);
    const userStore = useUserStore();
    const navigation = useNavigation<any>();

    const handleFormChange = (item: any) => {
        console.warn(item);
        setForm({
            ...form,
            ...item,
        });
    };

    const handleEmailVerify = async (ifNeedCookie: boolean = true) => {
        const res = await request.post(
            "/auth/twofactorauth/emailotp/verify",
            {
                code: form?.authCode,
            },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            },
        );
        if (!res.data?.verified) {
            return;
        }
        // return;
        const Buffer = require("buffer").Buffer;
        let encodedAuth = new Buffer(`${encodeURI(form?.username)}:${encodeURI(form?.password)}`).toString("base64");
        const result = await request.get("/auth/user", {
            headers: { Authorization: `Basic ${encodedAuth}` },
        });
        userStore.updateUserInfo(result.data);
    };

    const handleLogin = async (ifNeedCookie: boolean = true) => {
        // if (!ifNeedCookie) {
        //     // const RCTNetworking = require("react-native/Libraries/Network/RCTNetworking");
        //     // RCTNetworking.clearCookies(() => {});
        // }

        if (ifNeedCode) {
            handleEmailVerify(true);
            return;
        }
        // console.warn(form);
        // return;
        const Buffer = require("buffer").Buffer;
        let encodedAuth = new Buffer(`${encodeURI(form?.username)}:${encodeURI(form?.password)}`).toString("base64");
        const res = await request.get("/auth/user", {
            headers: { Authorization: `Basic ${encodedAuth}` },
            withCredentials: true,
        });
        // console.log(res);
        if (res.data.requiresTwoFactorAuth) {
            setIfNeedCode(true);
            return;
        }

        console.warn(res.data?.bio);
        zustandStorage.setItem("loginInfo", JSON.stringify(form));
        userStore.updateUserInfo(res.data);
    };

    const handleGoToHome = () => {
        navigation.navigate("home");
    };

    // 登录loading 链接"https://assets.vrchat.com/www/images/loading.gif"

    if (userStore.loading) {
        return (
            <Image
                className="h-full w-full bg-[#2d363f]"
                contentFit="contain"
                source="https://assets.vrchat.com/www/images/loading.gif"
            />
        );
    }

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
                    secureTextEntry={true}
                    value={form?.password}
                    onChangeText={val => handleFormChange({ password: val })}
                />
                {ifNeedCode && (
                    <View>
                        <View className="mt-2 flex-row items-center">
                            <Text className="color color-[#6ae3f9] text-base">验证码:</Text>
                            <TextInput
                                className="color-[#6ae3f9] ml-2 flex-1 rounded border-2 border-[#053c48] bg-[#05191d] px-3 py-3 text-lg/6"
                                placeholder="请输入验证码"
                                placeholderTextColor="#757575"
                                onChangeText={val => handleFormChange({ authCode: val })}
                            />
                        </View>
                        <Text onPress={() => handleLogin(false)}>没收到?尝试清除cookie再试一次</Text>
                    </View>
                )}
                <TouchableOpacity
                    className="full mt-2 items-center rounded bg-[#064b5c] p-2"
                    onPress={() => handleLogin()}
                >
                    <Text className="color-[#6ae3f9] text-2xl">Login</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

export default Index;
