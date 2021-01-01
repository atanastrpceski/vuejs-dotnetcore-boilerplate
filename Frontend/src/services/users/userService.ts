import { CurrentUser } from "@/services/users/types";
import { Authentication } from "@/services/security/types";

export function getCurrentUser() : CurrentUser {
    const authenticationModel =
        JSON.parse(localStorage.getItem("authentication") || "{}") as Authentication;

    if (!authenticationModel || !authenticationModel.id) {
        return {} as CurrentUser;
    }

    return {
        id: authenticationModel.id,
        firstName: authenticationModel.firstName,
        lastName: authenticationModel.lastName,
        email: authenticationModel.email,
        userName: authenticationModel.userName,
        roles: authenticationModel.roles,
        isVerified: authenticationModel.isVerified
    } as CurrentUser;
}

export function clearCurrentUser() {
    localStorage.removeItem("authentication");
}
