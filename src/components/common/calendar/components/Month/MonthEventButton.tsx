interface Props {
  text: string;
}

const MonthEventButton = ({ text }: Props) => {
  return (
    <button className="flex items-center rounded-md my-0.5 px-1.5 ">
      <div className="p-0.5 mr-1 rounded-full bg-accent" />
      <span className="truncate hover:font-medium">{text}</span>
    </button>
  );
};

export default MonthEventButton;
