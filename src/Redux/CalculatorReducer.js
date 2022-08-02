let initialState = {
    inputValue: '',
}

const CalculatorReducer = (state = initialState, actions) => {
    switch (actions.type){
        case 'CHANGE-INPUT':
            let newInputValue = actions.newInputValue
            return {...state, inputValue: [newInputValue]}
        default:
            return state
    }
}

export const actions = {
    changeInput: (newInputValue) => ({type: 'CHANGE-INPUT', newInputValue})
}

export default CalculatorReducer