import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value, 
    hasError, 
    reset,
    isValid,
    inputChangeHandler, 
    inputBlurHandler
} = useInput(value => value.trim() !== '')

const {
    value: emailValue, 
    hasError: emailHasError, 
    reset: emailReset,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailBlurHandler
} = useInput(emailValue => emailValue.includes('@') && emailValue !== undefined)

let formIsValid = false

if (isValid && emailIsValid) {
formIsValid = true
}

const formSubmissionHandler = event => {
event.preventDefault()

if (!formIsValid) return

console.log(value, emailValue)

reset()
emailReset()

}

const nameInputClasses = hasError || emailHasError
? 'form-control invalid' 
: 'form-control'

return (
<form onSubmit={formSubmissionHandler}>
  <div className={nameInputClasses}>
    <label htmlFor='name'>Your Name</label>
    <input 
      type='text' 
      id='name' 
      onChange={inputChangeHandler}
      onBlur={inputBlurHandler}
      value={value}
    />
    { hasError && (
      <p className="error-text">Name must not be empty.</p>
    )}
  </div>
  <div className={nameInputClasses}>
    <label htmlFor='email'>Your E-mail</label>
    <input 
      type='email' 
      id='email' 
      onChange={emailChangeHandler}
      onBlur={emailBlurHandler}
      value={emailValue}
    />
    { emailHasError && (
      <p className="error-text">E-mail must be valid.</p>
    )}
  </div>
  <div className="form-actions">
    <button disabled={hasError || emailHasError}>Submit</button>
  </div>
</form>
);
};

export default BasicForm;
