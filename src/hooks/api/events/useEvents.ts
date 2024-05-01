import eventService, {
  Event,
  CACHE_KEY_EVENTS,
} from "../../../services/eventService";
import { useQuery } from "react-query";

const useEvents = () =>
  useQuery<Event[], Error>({
    queryKey: CACHE_KEY_EVENTS,
    queryFn: eventService.getAll,
  });

export default useEvents;
