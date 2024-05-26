interface Props {
  count: number;
}

const MoreEventsSpan = ({ count }: Props) => {
  return (
    <span className="pl-3.5 text-primary-500">
      {count} more ...
    </span>
  );
};

export default MoreEventsSpan;
