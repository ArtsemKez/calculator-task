import React from 'react';
import styles from './Calculator.module.css'
import CustomizedInput from "../UI/CustomizedInput/CustomizedInput";
import Numpad from "./Numpad/Numpad";
import {getInputValueSelector} from "../../Redux/Selectors";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../Redux/CalculatorReducer";


const Calculator = () => {

    let inputValue = useSelector(getInputValueSelector)

    const dispatch = useDispatch()

    const changeInput = (event) => {
        dispatch(actions.changeInput(event.target.value))
    }


    return (
        <div className={styles.calculator}>
            <div className={styles.input}>
                <CustomizedInput
                    type='number'
                    value={inputValue}
                    onChange={(event)=> {changeInput(event)}}
                />
            </div>
            <Numpad/>
        </div>
    );
};

export default Calculator;