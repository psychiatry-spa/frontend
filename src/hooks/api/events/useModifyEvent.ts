import eventService, {
  Event,
  CACHE_KEY_EVENTS,
} from "../../../services/eventService";
import { useMutation, useQueryClient } from "react-query";

interface AddEventContext {
  previousEvents: Event[];
}

const useModifyEvent = () => {
  const queryClient = useQueryClient();

  return useMutation<Event, Error, Event, AddEventContext>({
    mutationFn: (data) => eventService.patch(data.googleEventId, data),

    onMutate: (newEvent) => {
      const previousEvents =
        queryClient.getQueryData<Event[]>(CACHE_KEY_EVENTS) || [];
      // 1. Invalidation the cache
      // queryClient.invalidateQueries({
      //   queryKey: ["events"],
      // });
      // 2. Updating the data in the cache directly
      queryClient.setQueryData<Event[]>(["events"], (events) =>
        (events || []).map((event) =>
          event.googleEventId === newEvent.googleEventId ? newEvent : event
        )
      );

      return { previousEvents };
    },
    onSuccess: (addedEvent, newEvent) => {
      // queryClient.setQueryData<Event[]>(['events'], (events) => events.map)
      queryClient.setQueryData<Event[]>(CACHE_KEY_EVENTS, (events) =>
        (events || []).map((event) => (event === newEvent ? addedEvent : event))
      );
    },
    onError: (error, newEvent, context) => {
      console.log(error);
      if (!context) return;

      queryClient.setQueryData<Event[]>(
        CACHE_KEY_EVENTS,
        context.previousEvents
      );
    },
  });
};

export default useModifyEvent;
