import './Input.module.css';

function Input({ type, step, text, name, value, placeholder, onChange }) {
  return (
    <>
      <label htmlFor={name}>
        { text }:
      </label>
      
      <input 
        id={name}
        type={type}
        step={step}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}        
      />
    </>
  );
}

export default Input;
