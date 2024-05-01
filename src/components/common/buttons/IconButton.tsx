import Icon from "../Icon";

interface Props {
  name: string;
  styles: string;
  handleClick?: () => void;
}

export const IconButton = ({ name, handleClick }: Props) => {
  return (
    <button
      type="button"
      className=""
      onClick={handleClick}
    >
      <Icon name={name} styles="size-6 m-2" />
    </button>
  );
};
