import { useEffect, useState } from "react";
import eventService, { Event } from "../../../services/event-service";
import { CanceledError } from "../../../services/api-client";

const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = eventService.getAll<Event>();

    request
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { events, error, isLoading, setEvents, setError };
};

export default useEvents;
