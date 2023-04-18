

const InputField = ({name,type,placeholder,changeFunc}) => {
  return (
    <input 
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={changeFunc}
    />
  )
}

export default InputField