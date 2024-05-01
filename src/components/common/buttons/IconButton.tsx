import Icon from "../Icon";

interface Props {
  name: string;
  styles?: string;
  // iconStyles: string
  iconSize?: string;
  isAccent?: boolean;
  isDisabled?: boolean;
  isBackground?: boolean;
  handleClick?: () => void;
}

export const IconButton = ({
  name,
  handleClick,
  styles = "",
  iconSize = "size-4",
  isAccent = false,
  isDisabled = false,
  isBackground = false,
}: Props) => {
  const getStyles = () => {
    if (isDisabled) styles += "";
    if (isAccent) styles += " text-white";
    else
      styles +=
        " text-primary-800 hover:text-primary dark:text-primary-200 dark:hover:text-primary-100";

    if (isBackground && isAccent)
      styles +=
        " p-2 rounded-full bg-accent hover:bg-accent-focus dark:hover:bg-accent-focus-dark";
    else if (isBackground)
      styles +=
        " p-2 rounded-full bg-primary-100 hover:bg-primary-200 dark:bg-primary-800 dark:hover:bg-primary-700";

    return styles;
  };

  return (
    <button type="button" className={getStyles()} onClick={handleClick}>
      <Icon name={name} styles={`${iconSize}`} />
    </button>
  );
};
