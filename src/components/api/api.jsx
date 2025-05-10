import axios from "axios";
import Cookies from "js-cookie";
import { getCookie } from "@/hooks/cookies"; // agar sizda cookie wrapper bo‘lsa

export function logout() {
  // Tokenlarni o'chirish
  Cookies.remove("token");
  Cookies.remove("refresh_token");

  // Agar siz localStorage ishlatsangiz:
  localStorage.clear();
  sessionStorage.clear();

  // Login sahifasiga yo'naltirish
  if (typeof window !== "undefined") {
    window.location.href = "/login";
  }
}


const BASE_URL = "http://37.27.215.130:5545";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = getCookie("token") || Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return instance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        const refreshToken = Cookies.get("refresh_token");
        if (!refreshToken) throw new Error("No refresh token");

        const res = await axios.post(`${BASE_URL}/api/auth/refresh-token/`, {
          refresh_token: refreshToken,
        });

        const newToken = res.data.access_token;
        Cookies.set("token", newToken);

        processQueue(null, newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return instance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        // logout(); // agar sizda logout funksiyasi bo‘lsa, shu yerda chaqirilsin
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
