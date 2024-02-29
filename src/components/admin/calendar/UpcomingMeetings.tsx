import { format, isSameDay, parseISO } from "date-fns";
import Container from "../../../layouts/admin/Container";
import Meeting from "./Meeting";

interface Props {
  selectedDay: Date;
}

const UpcomingMeetings = ({ selectedDay }: Props) => {
  const meetings = [
    {
      id: 1,
      name: "Leslie Alexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-05-11T13:00",
      endDatetime: "2022-05-11T14:30",
    },
    {
      id: 2,
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-05-20T09:00",
      endDatetime: "2022-05-20T11:30",
    },
    {
      id: 3,
      name: "Dries Vincent",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-05-20T17:00",
      endDatetime: "2022-05-20T18:30",
    },
    {
      id: 4,
      name: "Leslie Alexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-06-09T13:00",
      endDatetime: "2022-06-09T14:30",
    },
    {
      id: 5,
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      startDatetime: "2022-05-13T14:00",
      endDatetime: "2022-05-13T14:30",
    },
  ];

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  return (
    <Container>
      <section>
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          Upcoming meetings
        </span>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {meetings.length > 0 ? (
            meetings.map(
              ({ id, name, imageUrl, startDatetime, endDatetime }) => (
                <Meeting
                  id={id}
                  name={name}
                  imageUrl={imageUrl}
                  startDatetime={startDatetime}
                  endDatetime={endDatetime}
                />
                //   <Meeting meeting={meeting} key={meeting.id} />
              )
            )
          ) : (
            <p>No meetings for today.</p>
          )}
          {/* <p>No meetings for today.</p> */}
        </ol>
      </section>
    </Container>
  );
};

export default UpcomingMeetings;
