import { BASE_URL, PROD_BASE_URL } from './baseUrls';

export const postEndpoints = {
  posts: `${process.env.NODE_ENV === "production" ? PROD_BASE_URL : BASE_URL}/api/posts`,
};