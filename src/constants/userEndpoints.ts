import { BASE_URL, PROD_BASE_URL } from './baseUrls';

export const userEndpoints = {
  usersList: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/admin/users`,
  currentUser: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/user/me`,
};