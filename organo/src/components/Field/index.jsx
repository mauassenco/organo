import "./styles.css";

const Field = ({
  label,
  placeholder,
  value,
  required = false,
  atChange,
  type = "text",
}) => {

  return (
    <div className={`field field-${type}`}>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        value={value}        
        required={required}
        placeholder={placeholder}
        onChange = {(e) => atChange(e.target.value)}
      />
    </div>
  );
};

export default Field;
