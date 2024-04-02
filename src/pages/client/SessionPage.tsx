import ClientLayout from "../../layouts/client/ClientLayout";
import EventList from "../../components/common/event-list/EventList";
import Schedule from "../../components/client/schedule/Schedule";

const SessionPage = () => (
  <ClientLayout>
    <EventList />
    <Schedule />
  </ClientLayout>
);
export default SessionPage;
