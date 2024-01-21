import { useEffect, useState } from "react";
import request from "@/utils/request";

type Props = {
    worldKey: string;
};

export const useWorldInfo = (worldKey: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        request.get(`/worlds/${worldKey}`).then(res => {
            setData(res.data);
        });
    }, []);

    return data;
};
