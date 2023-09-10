import axios from "axios";

// 创建一个axios实例
const instance = axios.create({
  baseURL: "https://api.vrchat.cloud/api/1", // 替换成你的API的URL
  withCredentials: true, // 启用跨域请求时携带cookies
});

export default instance;
