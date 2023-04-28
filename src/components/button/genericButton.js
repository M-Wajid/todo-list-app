

const GenericButton = ({buttonName,buttonClass,clickFunc}) => {

  return (
    <button className={buttonClass} onClick={clickFunc}>
      {buttonName}
    </button>
  )
}

export default GenericButton