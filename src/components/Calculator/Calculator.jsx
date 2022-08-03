import React from 'react';
import styles from './Calculator.module.css'
import CustomizedInput from "../UI/CustomizedInput/CustomizedInput";
import Numpad from "./Numpad/Numpad";
import {getCalculationMethodSelector, getInputValueSelector, getPrevInputSelector} from "../../Redux/Selectors";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../Redux/CalculatorReducer";


const Calculator = () => {

    const inputValue = useSelector(getInputValueSelector)
    const prevInput = useSelector(getPrevInputSelector)
    const calculationMethod = useSelector(getCalculationMethodSelector)

    const dispatch = useDispatch()

    const changeInput = (event) => {
        dispatch(actions.changeInput(event.target.value))
    }

    return (
        <div className={styles.calculator}>
            <div className={styles.input}>
                <div className={styles.inputInfo}>
                    <div style={{marginRight: '10px'}}>{prevInput}</div>
                    <div style={{marginRight: '10px'}}>{calculationMethod}</div>
                </div>
                <CustomizedInput
                    type='number'
                    value={inputValue ? inputValue : ''}
                    onChange={(event) => {
                        changeInput(event)
                    }}
                    placeholder={'123...'}
                />
            </div>
            <Numpad/>
        </div>
    );
};

export default Calculator;