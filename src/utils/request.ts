import axios from "axios";
import Toast from "react-native-root-toast";
import UserAgent from "react-native-user-agent";

// const ua = UserAgent?.applicationName + "dddddd";
const ua = UserAgent?.getUserAgent();

// 创建一个axios实例
const instance = axios.create({
    baseURL: "https://api.vrchat.cloud/api/1", // 替换成你的API的URL
    withCredentials: true, // 启用跨域请求时携带cookies
    headers: {
        "User-Agent": ua,
    },
});

instance.interceptors.response.use(
    response => {
        if (response.status !== 200) {
            return Promise.reject(response);
        }
        return Promise.resolve(response);
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    Toast.show(error.response?.data?.error?.message ?? "身份验证过期", {
                        position: Toast.positions.CENTER,
                    });
                    break;
                case 400:
                    Toast.show(error.response?.data?.error?.message ?? "身份验证失败", {
                        position: Toast.positions.CENTER,
                    });
                    break;
                default:
                    Toast.show("未知错误", {
                        position: Toast.positions.CENTER,
                    });
            }
            return Promise.reject(error.response);
        }
    },
);

// instance.interceptors.request.use(async config => {
//     const cookie = await AsyncStorage.getItem("cookie");
//     if (cookie) {
//         config.headers.Cookie = cookie;
//     }
//     return config;
// });
export default instance;
