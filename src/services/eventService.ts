import ApiClient from "./apiClient";

export interface Event {
  id: string;
  eventId: string;
  userId: string;
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
}

export const CACHE_KEY_EVENTS = ["events"]

export default new ApiClient<Event>("");
