interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ type, placeholder, value, onChange }: InputFieldProps) => {
  return (
    <input className="input" type={type} placeholder={placeholder} value={value} onChange={onChange} required />
  );
};

export default InputField;
