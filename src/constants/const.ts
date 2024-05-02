const BASE_URL = "http://localhost:3000";
const PROD_BASE_URL = "https://mi-project-backend-opa7fhbyqq-uc.a.run.app"
export const API_ENDPOINTS = {
  signUp: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/auth/signUp`,
  signIn: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/auth/signIn`,
  signOut: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/auth/signOut`,
  googleLogin: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/auth/provider/google`,
  usersList: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/admin/users`,
  currentUser: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/user/me`,

  posts: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/posts`,
};