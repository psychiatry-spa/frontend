import SmallMonthCalendar from "./SmallMonthCalendar";

interface Props {
  months: Date[][];
}

const YearCalendar = ({ months }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-3">
      {months.map((month, idx) => (
        <SmallMonthCalendar key={idx} days={month} />
      ))}
    </div>
  );
};

export default YearCalendar;
