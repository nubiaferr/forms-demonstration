import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
        value, 
        hasError, 
        reset,
        isValid,
        inputChangeHandler, 
        inputBlurHandler
  } = useInput(props.validationRule)

   
  let formIsValid = false

  if (isValid ) {
    formIsValid = true
  }

  
  const formSubmissionHandler = event => {
    event.preventDefault()
    
    if (!formIsValid) return
    
    console.log(value)

    reset()
  }
  
  const nameInputClasses = hasError 
  ? 'form-control invalid' 
  : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>{props.label}</label>
        <input 
          type={props.type}
          id={props.id}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          value={value}
        />
        { hasError && (
          <p className="error-text">Input must not be empty.</p>
        )}
      </div>
    </form>
  );
};

export default SimpleInput;
