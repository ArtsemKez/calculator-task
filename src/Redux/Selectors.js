import {createSelector} from "reselect";

const getInputValue = (state) => {
    return state.calculatorPage.inputValue
}

export const getInputValueSelector = createSelector(getInputValue, (inputValue) => {
    return inputValue
})