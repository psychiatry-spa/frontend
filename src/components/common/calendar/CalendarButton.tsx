import { format } from "date-fns";
import React from "react";

interface Props {
  key: number;
  isDisabled: boolean;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  day: Date;
  onClick: (d: Date) => void;
}

const CalendarButton = ({
  key,
  isDisabled,
  isCurrentMonth,
  isToday,
  isSelected,
  day,
  onClick,
}: Props) => {
  return (
    <button
      key={key}
      type="button"
      onClick={() => onClick(day)}
      disabled={isDisabled || !isCurrentMonth}
      className={`cursor-pointer flex items-center justify-center font-semibold h-8 w-8 rounded-full
        ${isDisabled && " text-primary-500 pointer-events-none"}            
        ${!isCurrentMonth && " text-primary-200 pointer-events-none"}
        ${isSelected && " text-white bg-accent"}
        ${isToday && " text-accent"}
        ${!isSelected && " hover:bg-primary-900 hover:text-white"}


        `}
    >
      {format(day, "d")}
    </button>
  );
};

export default CalendarButton;

