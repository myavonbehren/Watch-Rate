export interface UserClaims {
    sub: string;
    name: string;
    email: string;
    exp: number;
    nameid: string;
    username?: string;
}