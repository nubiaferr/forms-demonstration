import { useState, useReducer } from 'react'

const initialState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {value: action.value, isTouched: state.isTouched}
    }

    if (action.type === 'BLUR') {
        return {isTouched: true, value: state.value}
    }

    if (action.type === 'RESET') {
        return {isTouched: false, value: ''}
    }

    return inputStateReducer
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialState)


    const valueIsValid = validateValue(inputState.value)
    const hasError = !valueIsValid && inputState.isTouched

    const inputChangeHandler = event => {
        dispatch({
            type: 'INPUT',
            value: event.target.value
        })
      }
      
    const inputBlurHandler = event => {
        dispatch({type: 'BLUR'})
      }

    const reset = () => {
        dispatch({type: 'RESET'})
    }


    return {
        value: inputState.value, 
        isValid: valueIsValid,
        hasError, 
        reset,
        inputChangeHandler, 
        inputBlurHandler
    }
}

export default useInput
