import Icon from "../../common/icon";

interface Props {
  name: string;
  handleClick?: () => void;
}

export const IconButton = ({ name, handleClick }: Props) => {
  return (
    <button
      type="button"
      className="text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
      onClick={handleClick}
    >
      <Icon name={name} styles="size-6 m-2" />
    </button>
  );
};
