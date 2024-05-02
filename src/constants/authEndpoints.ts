import { BASE_URL, PROD_BASE_URL } from './baseUrls';

export const authEndpoints = {
    signUp: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/auth/signUp`,
    signIn: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/auth/signIn`,
    googleLogin: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/auth/provider/google`,
};