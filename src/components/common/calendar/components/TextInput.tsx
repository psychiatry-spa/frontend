interface Props {
  placeholder: string;
  isPrimary?: boolean;
  styles?: string;
}

const TextInput = ({ placeholder, isPrimary = false, styles = "" }: Props) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onClick={(e) => e.stopPropagation()}
      className={`${styles} ${
        isPrimary
          ? "text-lg font-medium placeholder-primary dark:placeholder-primary-300"
          : "text-xs placeholder-primary-800 dark:placeholder-primary-400"
      } text-nowrap outline-none text-primary dark:bg-dark-container dark:border-dark-container dark:text-primary-300`}
    />
  );
};

export default TextInput;
