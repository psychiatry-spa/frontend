// import Icon from "../icon";

// import { ReactNode, useState } from "react";

// import {
//   add,
//   eachDayOfInterval,
//   endOfMonth,
//   format,
//   getDay,
//   isEqual,
//   isSameDay,
//   isSameMonth,
//   isToday,
//   parse,
//   parseISO,
//   startOfToday,
// } from "date-fns";

// interface Props {
//   today: Date;
//   selectedDay: Date;
//   setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
// }

// const Calendar = ({ today, selectedDay, setSelectedDay }: Props) => {
//   let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
//   let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

//   let days = eachDayOfInterval({
//     start: firstDayCurrentMonth,
//     end: endOfMonth(firstDayCurrentMonth),
//   });

//   function classNames(...classes: (string | boolean)[]) {
//     return classes.filter(Boolean).join(" ");
//   }

//   let colStartClasses = [
//     "",
//     "col-start-2",
//     "col-start-3",
//     "col-start-4",
//     "col-start-5",
//     "col-start-6",
//     "col-start-7",
//   ];

//   return (
//     <div className="flex flex-col w-full">
//       <div className="flex items-center justify-between">
//         <button>
//           <Icon name="arrow-left" styles="size-4" />
//         </button>
//         <span className="text-lg font-semibold text-primary">
//           {format(firstDayCurrentMonth, "MMMM yyyy")}
//         </span>
//         <button>
//           <Icon name="arrow-right" styles="size-4" />
//         </button>
//       </div>
//       <div className="grid grid-cols-7 mt-10 leading-6 text-left text-primary-600">
//         {["S", "M", "T", "W", "T", "F", "S"].map((e: ReactNode) => (
//           <span>{e}</span>
//         ))}
//       </div>
//       <div className="grid grid-cols-7 mt-2">
//         {days.map((day, dayIdx) => (
//           <div
//             key={day.toString()}
//             className={classNames(
//               dayIdx === 0 && colStartClasses[getDay(day)],
//               "py-1.5"
//             )}
//           >
//             <button
//               type="button"
//               onClick={() => setSelectedDay(day)}
//               className={classNames(
//                 isEqual(day, selectedDay) && "text-white bg-accent",
//                 !isEqual(day, selectedDay) && isToday(day) && "text-accent",
//                 !isEqual(day, selectedDay) &&
//                   day >= today &&
//                   "hover:bg-primary-005",
//                 `mx-auto flex h-8 w-8 items-center justify-center rounded-full
//                 ${
//                   day < today
//                     ? "text-primary-500 pointer-events-none"
//                     : "text-primary"
//                 }
//                 `
//               )}
//             >
//               <time dateTime={format(day, "yyyy-MM-dd")}>
//                 {format(day, "d")}
//               </time>
//             </button>

//             {/* <div className="w-1 h-1 mx-auto mt-1">
//                 {meetings.some((meeting) =>
//                   isSameDay(parseISO(meeting.startDatetime), day)
//                 ) && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
//               </div> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calendar;

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isAfter,
  isBefore,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
  startOfYesterday,
} from "date-fns";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
// import { capitalizeFirstLetter } from "./utils/functions";
import { useState } from "react";
import Container from "../../../layouts/admin/Container";
import Icon from "../Icon";

interface Props {
  today: Date;
  selectedDay: Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
}

const Calendar = ({ today, selectedDay, setSelectedDay }: Props) => {
  // const today = startOfToday();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  });

  const getPrevMonth = (event: React.MouseEvent) => {
    event.preventDefault();
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
  };

  const getNextMonth = (event: React.MouseEvent) => {
    event.preventDefault();
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  return (
    <Container styles="col-span-4">
      <div className="w-full flex col-span-2">
        <div className="">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg text-primary">
              {format(firstDayOfMonth, "MMMM yyyy")}
            </p>
            <div className="flex items-center justify-evenly">
              <button
                onClick={(e) => getPrevMonth(e)}
                className="mr-2 text-primary-800 p-1.5 rounded-full hover:bg-primary-100 hover:text-primary"
              >
                <Icon name="arrow-left" styles="size-4" />
              </button>
              <button
                onClick={getNextMonth}
                className="text-primary-800 p-1.5 rounded-full hover:bg-primary-100 hover:text-primary"
              >
                <Icon name="arrow-right" styles="size-4" />
              </button>
            </div>
          </div>
          <hr className="h-px my-6 bg-primary-200 border-0" />
          <div className="grid grid-cols-7 sm:gap-12 place-items-center">
            {days.map((day, idx) => {
              return (
                <div
                  key={idx}
                  className="font-semibold text-sm text-primary-800"
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-7 sm:gap-12 mt-8 place-items-center">
            {daysInMonth.map((day, idx) => {
              return (
                <div key={idx} className={colStartClasses[getDay(day)]}>
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    disabled={isBefore(day, today) && true}
                    className={`cursor-pointer flex items-center justify-center font-semibold h-8 w-8 rounded-full
                  ${
                    !isSameMonth(day, today) &&
                    " text-primary-200 pointer-events-none"
                  }
                  ${isEqual(day, selectedDay) && " text-white bg-accent"}
                  ${isToday(day) && " text-accent"}
                  ${
                    isAfter(day, startOfYesterday()) &&
                    !isEqual(day, selectedDay) &&
                    " hover:bg-primary-500 hover:text-white"
                  }
                  ${
                    isBefore(day, today) &&
                    " text-primary-500 pointer-events-none"
                  }

                  `}
                  >
                    {format(day, "d")}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Calendar;

//             <button
//               type="button"
//               onClick={() => setSelectedDay(day)}
//               className={classNames(
//                 isEqual(day, selectedDay) && "text-white bg-accent",
//                 !isEqual(day, selectedDay) && isToday(day) && "text-accent",
//                 !isEqual(day, selectedDay) &&
//                   day >= today &&
//                   "hover:bg-primary-005",
//                 `mx-auto flex h-8 w-8 items-center justify-center rounded-full
//                 ${
//                   day < today
//                     ? "text-primary-500 pointer-events-none"
//                     : "text-primary"
//                 }
//                 `
//               )}
//             >
