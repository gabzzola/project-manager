import './Input.module.css';

function Input({ type, step, text, name, value, placeholder, handleOnChange }) {
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
        onChange={handleOnChange}        
      />
    </>
  );
}

export default Input;
