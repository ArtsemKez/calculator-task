let initialState = {
    prevInput: '',
    calculationMethod: '',
    inputValue: ''
}

const CalculatorReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'CHANGE_INPUT':
            return {...state, inputValue: actions.newInputValue}

        case 'SET_PREV_INPUT':
            let prevInput
            if (!actions.prevInput) {
                prevInput = state.inputValue
            } else {
                prevInput = actions.prevInput
            }
            return {...state, prevInput: prevInput}

        case 'SET_CALCULATION_METHOD':
            return {...state, calculationMethod: actions.calculationMethod}

        case 'RESULT':
            let result = ''
            result = (state.prevInput + state.calculationMethod + state.inputValue)
            result = eval(result)
            result.toString()
            return {...state, prevInput: result}

        case 'CLEAR_PREV_INPUT':
            return {...state, prevInput: '', calculationMethod: ''}

        case 'DELETE_INPUT_VALUE':
            return {...state, inputValue: ''}

        default:
            return state
    }
}

export const actions = {
    changeInput: (newInputValue) => ({type: 'CHANGE_INPUT', newInputValue}),
    setPrevInput: (prevInput) => ({type: 'SET_PREV_INPUT', prevInput}),
    setCalculationMethod: (calculationMethod) => ({type: 'SET_CALCULATION_METHOD', calculationMethod}),
    clearPrevInput: () => ({type: 'CLEAR_PREV_INPUT'}),
    result: () => ({type: 'RESULT'}),
    deleteInputValue: () => ({type: 'DELETE_INPUT_VALUE'})
}

export default CalculatorReducer