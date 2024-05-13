interface Props {
  text: string;
}

const MonthEventButton = ({ text }: Props) => {
  return (
    <button className="flex items-center mb-0.5 px-1.5 ">
      <div className="p-0.5 mr-1 bg-accent rounded-full" />
      <span className="truncate hover:font-medium">{text}</span>
    </button>
  );
};

export default MonthEventButton;
