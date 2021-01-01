import axios from "axios";
import { API_ENDPOINT, API_VERSION } from "../app.config";

export default {
    get(url: string, versionedRequest = true) {
        return versionedRequest
            ? axios.get(`${API_ENDPOINT}/${API_VERSION}${url}`)
            : axios.get(`${API_ENDPOINT}${url}`);
    },
    post(url: string, data: any, versionedRequest = true) {
        return axios({
            method: "POST",
            url: versionedRequest
                ? `${API_ENDPOINT}/${API_VERSION}${url}`
                : `${API_ENDPOINT}${url}`,
            data
        });
    },
    upload(url: string, data: any, progressEvent: any, versionedRequest = true) {
        return axios({
            method: "POST",
            url: versionedRequest
                ? `${API_ENDPOINT}/${API_VERSION}${url}`
                : `${API_ENDPOINT}${url}`,
            data,
            onUploadProgress: progressEvent
        });
    },
    put(url: string, data: any, versionedRequest = true) {
        return axios({
            method: "PUT",
            url: versionedRequest
                ? `${API_ENDPOINT}/${API_VERSION}${url}`
                : `${API_ENDPOINT}${url}`,
            data
        });
    },
    delete(url: string) {
        return axios.delete(`${API_ENDPOINT}/${API_VERSION}${url}`);
    }
};
