import ApiClient from "./apiClient";

export interface Event {
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
  _id?: string;
  googleEventId?: string;
  user?: string;
  location?: string;
}

export const CACHE_KEY_EVENTS = ["events"];

export default new ApiClient<Event>("/admin/events");
