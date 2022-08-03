import {createSelector} from "reselect";

/////////
const getInputValue = (state) => {
    return state.calculatorPage.inputValue
}
export const getInputValueSelector = createSelector(getInputValue, (inputValue) => {
    return inputValue
})

/////////
const getPrevInput = (state) => {
    return state.calculatorPage.prevInput
}
export const getPrevInputSelector = createSelector(getPrevInput, (prevInput) => {
    return prevInput
})

////////
const getCalculationMethod = (state) => {
    return state.calculatorPage.calculationMethod
}
export const getCalculationMethodSelector = createSelector(getCalculationMethod, (calculationMethod) => {
    return calculationMethod
})