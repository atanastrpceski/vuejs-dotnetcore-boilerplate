export interface CurrentUser {
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: string[];
    isVerified: boolean;
}
