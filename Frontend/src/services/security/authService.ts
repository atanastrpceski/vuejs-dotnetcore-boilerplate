import { LoginDto } from "@/services/security/types";
import api from "@/services/api";

export function login(request: LoginDto) : Promise<any> {
    return new Promise((resolve, reject) => {
        api.post("/account/authenticate", request, false)
            .then(
                response => {
                    resolve(response.data);
                },
                error => {
                    reject(error);
                });
    });
}
