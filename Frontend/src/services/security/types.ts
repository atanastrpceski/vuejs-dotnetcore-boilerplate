export interface LoginDto {
    email: string,
    password: string
}

export interface Authentication{
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: string[];
    isVerified: boolean;
    jwToken: string;
}
