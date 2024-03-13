const BASE_URL = "http://localhost:3000";
export const API_ENDPOINTS = {
  signUp: `${BASE_URL}/api/auth/signUp`,
  signIn: `${BASE_URL}/api/auth/signIn`,
  googleLogin: `${BASE_URL}/api/auth/provider/google`,
  usersList: `${BASE_URL}/api/admin/users`,
  currentUser: `${BASE_URL}/api/user/me`
};