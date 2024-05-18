import SmallMonthCalendar from "./SmallMonthCalendar";

interface Props {
  months: Date[][];
  handleMonth: (day: Date) => void;
}

const YearCalendar = ({ months, handleMonth }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-3">
      {months.map((month, idx) => (
        <SmallMonthCalendar handleClick={handleMonth} key={idx} days={month} />
      ))}
    </div>
  );
};

export default YearCalendar;
