import React from 'react';
import styles from './CustomizedButton.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getCalculationMethodSelector, getInputValueSelector, getPrevInputSelector} from "../../../Redux/Selectors";
import {actions} from "../../../Redux/CalculatorReducer";

const CustomizedButton = (props) => {

    const dispatch = useDispatch()

    const inputValue = useSelector(getInputValueSelector)
    const prevInputValue = useSelector(getPrevInputSelector)
    const calcMethod = useSelector(getCalculationMethodSelector)

    const clickButton = () => {
        if (props.children >= 0 && props.children < 10) {
            let newValue = inputValue + String(props.children)
            dispatch(actions.changeInput(newValue))
            if(calcMethod === '='){
                dispatch(actions.clearPrevInput())
            }
        } else {
            if(inputValue !== ''){
                if(prevInputValue === ''){
                    dispatch(actions.setPrevInput())
                    dispatch(actions.deleteInputValue())
                    dispatch(actions.setCalculationMethod(props.children))
                }else if(prevInputValue !== ''){
                    dispatch(actions.result())
                    dispatch(actions.setCalculationMethod(props.children))
                    dispatch(actions.deleteInputValue())
                }
            }else if(inputValue === ''){
                dispatch(actions.setCalculationMethod(props.children))
            }

        }

    }


    return (
        <button {...props}
                className={styles.button}
                onClick={clickButton}
        >
            {props.children}
        </button>
    );
};

export default CustomizedButton;