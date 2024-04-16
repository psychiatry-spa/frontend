import Container from "../../../layouts/admin/Container";
import Event from "./Event";
import MenuButton from "../buttons/MenuButton";

const EventList = () => {
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
  ];

  return (
    <Container styles="col-span-3">
      <section>
        <h2 className="text-xl font-semibold text-primary">
          Upcoming consultations
        </h2>
        <ol className="mt-4">
          {meetings.length > 0 ? (
            meetings.map(
              ({ id, name, imageUrl, startDatetime, endDatetime }) => (
                <Event
                  id={id}
                  name={name}
                  imageUrl={imageUrl}
                  start={startDatetime}
                  end={endDatetime}
                />
              )
            )
          ) : (
            <p>No meetings for today.</p>
          )}
        </ol>
        <div className="mt-4">
          <MenuButton options={["Upcoming", "Past", "Canceled"]} />
        </div>
      </section>
    </Container>
  );
};

export default EventList;
