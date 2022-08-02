import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import CalculatorReducer from "./CalculatorReducer";

let rootReducer = combineReducers({
    calculatorPage: CalculatorReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))

window._store = store;

export default store