import Container from "../../common/Container";
import Calendar from "../../common/calendar/Calendar";
import { startOfToday, firstDayCurrentMonth,  } from "date-fns";
import { useState } from "react";

const Schedule = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  return (
    <Container styles="col-span-4">
      <section>
        <h1 className="text-2xl font-bold text-primary pb-2">
          Schedule new Consultation
        </h1>
        <p className="text-primary-600 pb-2">
          Select available date and time, and book you consultation with doc. :)
        </p>
        <div className="flex mt-4">
          <Calendar
            today={today}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
          <div className="flex flex-col ml-3 min-w-fit">
            <span className="text-lg font-semibold text-primary">
              {/* {format(firstDayCurrentMonth, "MMMM yyyy")} */}
              March
            </span>
            <button
              disabled={true}
              className="w-full border border-primary-500 text-primary-500 rounded-lg p-2 m-1 pointer-events-none"
            >
              <span>05:00 PM</span>
            </button>
            <button className="w-full border border-accent bg-accent text-white rounded-lg p-2 m-1">
              <span>05:30 PM</span>
            </button>
            <button className="w-full border border-primary text-primary rounded-lg p-2 m-1">
              <span>06:00 PM</span>
            </button>
            <button className="w-full border border-primary text-primary rounded-lg p-2 m-1">
              <span>06:30 PM</span>
            </button>
            <button className="w-full border border-primary-500 text-primary-500 rounded-lg p-2 m-1 pointer-events-none">
              <span>07:00 PM</span>
            </button>
            <button className="w-full border border-primary text-primary rounded-lg p-2 m-1">
              <span>07:30 PM</span>
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Schedule;
