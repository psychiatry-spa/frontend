interface Props {
  isActive: boolean;
  isSelected: boolean;
  text: string;
}

const TimeButton = ({ isActive, isSelected, text }: Props) => {
  return (
    <button
      disabled={!isActive}
      className={`w-full border rounded-lg p-2 m-1
        ${
          isSelected
            ? " border-accent bg-accent text-white"
            : isActive
            ? " border-primary-800 bg-primary-800 text-white hover:bg-primary-900 hover:border-primary-900"
            : " border-primary-500 text-primary-500 pointer-events-none"
        }
      `}
    >
      <span>{text}</span>
    </button>
  );
};

export default TimeButton;
