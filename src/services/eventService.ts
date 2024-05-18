import ApiClient from "./apiClient";

export interface Event {
  _id: string;
  googleEventId: string;
  user: string;
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
}

export const CACHE_KEY_EVENTS = ["events"];

export default new ApiClient<Event>("/admin/events");
