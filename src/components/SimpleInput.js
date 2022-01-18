import {useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
 
  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const enteredEmailIsValid = enteredEmail.includes('@')
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched
  
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }
  
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true)
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value)
  }
  
  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true)
  }
  
  const formSubmissionHandler = event => {
    event.preventDefault()
    
    setEnteredNameTouched(true)
    
    if (!enteredNameIsValid || !enteredEmailIsValid) return
    
    console.log(enteredName, enteredEmail)
    
    setEnteredName('')
    setEnteredEmail('')
    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)
  }
  
  const nameInputClasses = nameInputIsInvalid || emailInputIsInvalid
  ? 'form-control invalid' 
  : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        { nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input 
          type='text' 
          id='email' 
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        { emailInputIsInvalid && (
          <p className="error-text">E-mail must be valid.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!enteredNameIsValid || !enteredEmailIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
