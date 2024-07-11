interface Props {
  placeholder: string;
  value?: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPrimary?: boolean;
  styles?: string;
}

const TextInput = ({
  placeholder,
  value,
  name,
  handleChange,
  isPrimary = false,
  styles = "",
}: Props) => {
  return (
    <div className="flex">
      <input
        name={name}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        defaultValue={value}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => handleChange(e)}
        className={`${styles} ${
          isPrimary
            ? "text-lg font-medium placeholder-primary dark:placeholder-primary-300"
            : "text-xs placeholder-primary-800 dark:placeholder-primary-400"
        } w-1/2 grow p-0 text-nowrap outline-none text-primary dark:bg-dark-container dark:border-dark-container dark:text-primary-300`}
      />
    </div>
  );
};

export default TextInput;
