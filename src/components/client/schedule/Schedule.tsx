import Calendar from "../../common/calendar/Calendar";
import TimeButton from "./TimeButton";
import Container from "../../common/Container";

import { startOfToday } from "date-fns";
import { useState } from "react";

const Schedule = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  return (
    <Container styles="col-span-6">
      <section>
        <h1 className="text-2xl font-bold text-primary pb-2">
          Schedule new Consultation
        </h1>
        <p className="text-primary-600 pb-2">
          Select available date and time, and book you consultation with doc. :)
        </p>
        <div className="grid grid-cols-3 mt-4">
          <Calendar
            today={today}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
          <div className="flex flex-col w-full col-span-1">
            <TimeButton isActive={true} isSelected={true} text="5:00 PM" />
            <TimeButton isActive={true} isSelected={false} text="5:30 PM" />
            <TimeButton isActive={false} isSelected={false} text="6:00 PM" />
            <TimeButton isActive={false} isSelected={false} text="6:30 PM" />
            <TimeButton isActive={false} isSelected={false} text="7:00 PM" />
            <TimeButton isActive={true} isSelected={false} text="7:30 PM" />
            <TimeButton isActive={false} isSelected={false} text="8:00 PM" />
            <TimeButton isActive={true} isSelected={false} text="8:30 PM" />
            <TimeButton isActive={false} isSelected={false} text="9:00 PM" />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Schedule;
