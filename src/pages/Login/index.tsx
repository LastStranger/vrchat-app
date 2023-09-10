import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { FormType } from "./types";
import request from "../../utils/request";
import { Buffer } from "buffer";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import useUserStore from "../../store/useUserStore";

const Index = () => {
    const [form, setForm] = useState<FormType>(null);
    const [ifNeedCode, setIfNeedCode] = useState<boolean>(false);
    const userStore = useUserStore();
    const navigatiion = useNavigation();

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
            // withCredentials: false,
        });
        // console.log(res);
        if (res.data.requiresTwoFactorAuth) {
            console.warn("2222");
            setIfNeedCode(true);
            return;
        }

        console.warn(res.data?.bio);
        userStore.updateUserInfo(res.data);
    };

    const handleGoToHome = () => {
        navigatiion.navigate("Home");
    };

    return (
        <View className="flex-1 bg-[#2d363f] items-center justify-center px-4">
            <StatusBar style="light" />
            <Image
                className="w-32 aspect-[118/50]"
                source={{
                    uri: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png",
                }}
            />
            <View className="mt-3 w-full">
                <TextInput
                    className="py-3 px-3 border-2 border-[#053c48] bg-[#05191d] rounded text-lg/6 color-[#6ae3f9]"
                    placeholder="Username/Email"
                    placeholderTextColor="#757575"
                    value={form?.username}
                    onChangeText={val => handleFormChange({ username: val })}
                />
                <TextInput
                    className="py-3 px-3 border-2 border-[#053c48] bg-[#05191d] rounded text-lg/6 color-[#6ae3f9] mt-2"
                    placeholder="Password"
                    placeholderTextColor="#757575"
                    value={form?.password}
                    onChangeText={val => handleFormChange({ password: val })}
                />
                {ifNeedCode && (
                    <TextInput
                        className="py-3 px-3 border-2 border-[#053c48] bg-[#05191d] rounded text-lg/6 color-[#6ae3f9] mt-2"
                        placeholder="验证码"
                        placeholderTextColor="#757575"
                        onChangeText={val => handleFormChange({ authCode: val })}
                    />
                )}
                <TouchableOpacity className="mt-2 full bg-[#064b5c] items-center p-2 rounded" onPress={handleLogin}>
                    <Text className="color-[#6ae3f9] text-2xl">Login</Text>
                </TouchableOpacity>
                <TouchableOpacity className="mt-2 full bg-[#064b5c] items-center p-2 rounded" onPress={handleGoToHome}>
                    <Text className="color-[#6ae3f9] text-2xl">tempBtn</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Index;
