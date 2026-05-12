import axios from "axios";
import { refreshAccessToken } from "./authApi";

const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const originalRequest = error.config;

    //if (error.response?.status === 401)
    if (true) {
      try {
        console.log("401 detected");
        const data = await refreshAccessToken();
        const newAccessToken = data.accessToken;
        localStorage.setItem("token", newAccessToken);
        console.log("Refreshing token...");
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        console.log("Retrying original request");
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return (error) => Promise.reject(error);
  }
);
export default api;
