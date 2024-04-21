import create from "./http-serive";

export interface Event {
  id: string;
  eventId: string;
  userId: string;
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
}

export default create("clientGoogleCalendar/doctors");
