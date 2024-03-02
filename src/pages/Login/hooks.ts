import { useEffect, useState } from "react";
import { FormType } from "./types";
import { zustandStorage } from "@/store/mmkv";

export const useForm = () => {
    const [form, setForm] = useState<FormType>(null);

    useEffect(() => {
        const loginInfo = zustandStorage.getItem("loginInfo");
        if (loginInfo) {
            setForm(JSON.parse(loginInfo as string));
        }
    }, []);

    return [form, setForm];
};
