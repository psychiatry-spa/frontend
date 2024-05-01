// import eventService, {
//   Event,
//   CACHE_KEY_EVENTS,
// } from "../../../services/eventService";
// import { QueryClient, useMutation, useQueryClient } from "react-query";

// interface AddEventContext {
//   previousEvent: Event;
// }

// const useAddEvent = (onAdd: () => void) => {
//   const queryClient = useQueryClient();

//   return useMutation<Event, Error, Event, AddEventContext>({
//     mutationFn: eventService.post,

//     onMutate: (newEvent: Event) => {
//       const previousEvents =
//         queryClient.getQueryData<Event[]>(CACHE_KEY_EVENTS);

//       queryClient.setQueryData<Event[]>(CACHE_KEY_EVENTS, (events = []) => [
//         newEvent,
//         ...events,
//       ]);

//       onAdd();

//       return { previousEvents };
//     },

//     onSuccess: (savedEvent: Event, newEvent: Event) => {
//       queryClient.setQueryData<Event[]>(CACHE_KEY_EVENTS, (events: Event[]) =>
//         events?.map((event) => (event === newEvent ? savedEvent : event))
//       );
//     },

//     onError(error, newEvent, context) => {
//         if (!context) return


//     }
//   });
// };

// export default useAddEvent;
