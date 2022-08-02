let initialState = {
    inputValue: 0
}

const CalculatorReducer = (state = initialState, actions) => {
    switch (actions.type){
        case 'CHANGE-INPUT':
            let newInputValue = actions.newInputValue
            console.log(state.inputValue)
            return {...state, inputValue: [newInputValue]}
        default:
            return state
    }
}

export const actions = {
    changeInput: (newInputValue) => ({type: 'CHANGE-INPUT', newInputValue})
}

export default CalculatorReducer