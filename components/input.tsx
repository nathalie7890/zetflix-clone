interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        className="block w-full px-6 pt-6 pb-1 text-white rounded-md appearance-none text-md bg-neutral-700 focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        className="absolute z-10 duration-150 transform scale-75 -translate-y-3 text-md text-zinc-400 top-4 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
