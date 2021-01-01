import axios from "axios";
import router from "@/router";
import { Authentication } from "@/services/security/types";
import store from "@/store/store";

export function setUpResponseInterceptors() {
    axios.interceptors.response.use(
        function success(response: any) {
            store.activeServiceCalls--;
            return response;
        },
        function error(error: any) {
            store.activeServiceCalls--;
            unAuthorizedHandler(error);
            return Promise.reject(error);
        }
    );
}
// interceptor handlers
function unAuthorizedHandler(error: any) {
    if (!error.request || error.response.status !== 401) return;
    if (!error.config || error.config.__isRetryRequest) return;

    localStorage.removeItem("authentication");
    router.push("/login");
}

export function setUpRequestInterceptors() {
    axios.interceptors.request.use(config => {
        store.activeServiceCalls++;
        const authorization = JSON.parse(localStorage.getItem("authentication") || "{}") as Authentication;
        if (authorization.jwToken) {
            config.headers.common.Authorization = `Bearer ${authorization.jwToken}`;
            return config;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });
}
