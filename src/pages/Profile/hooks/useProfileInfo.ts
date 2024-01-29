import { useEffect, useState } from "react";
import request from "@/utils/request";

type Params = {
    id: string;
};
const useProfileInfo = (id: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        request.get(`/users/${id}`).then(res => {
            setData(res.data);
        });
    }, []);

    return data;
};

export default useProfileInfo;
