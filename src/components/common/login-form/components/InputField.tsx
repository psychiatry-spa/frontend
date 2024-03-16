interface Props {
  data: string;
  type: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ data, type, placeholder, handleChange }: Props) => {
  return (
    <input
      className="placeholder-secondary border rounded-xl border-primary-500 w-full p-3 my-2 outline-none bg-primary-005"
      type={type}
      name={type}
      value={data}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default InputField;
