import React from 'react';
import styles from './Numpad.module.css'
import CustomizedButton from "../../UI/CustomizedButton/CustomizedButton";
import {useDispatch, useSelector} from "react-redux";
import {getCalculationMethodSelector, getInputValueSelector, getPrevInputSelector} from "../../../Redux/Selectors";
import {actions} from "../../../Redux/CalculatorReducer";

const Numpad = () => {

        const dispatch = useDispatch()

        const inputValue = useSelector(getInputValueSelector)
        const prevInputValue = useSelector(getPrevInputSelector)
        const calcMethod = useSelector(getCalculationMethodSelector)

        const clickButton = (props) => {
                console.log(props.currentTarget.innerText)

                if (props.currentTarget.innerText >= 0 && props.currentTarget.innerText < 10) {
                        let newValue = inputValue + String(props.currentTarget.innerText)
                        dispatch(actions.changeInput(newValue))
                        if(calcMethod === '='){
                                dispatch(actions.clearPrevInput())
                        }
                } else {
                        if(inputValue !== ''){
                                if(prevInputValue === ''){
                                        dispatch(actions.setPrevInput())
                                        dispatch(actions.deleteInputValue())
                                        dispatch(actions.setCalculationMethod(props.currentTarget.innerText))
                                }else if(prevInputValue !== ''){
                                        dispatch(actions.result())
                                        dispatch(actions.setCalculationMethod(props.currentTarget.innerText))
                                        dispatch(actions.deleteInputValue())
                                }
                        }else if(inputValue === ''){
                                dispatch(actions.setCalculationMethod(props.currentTarget.innerText))
                        }

                }

        }

    return (
        <div className={styles.numpad}>
            <div className={styles.one} onClick={clickButton}><CustomizedButton>1</CustomizedButton></div>
            <div className={styles.two} onClick={clickButton}><CustomizedButton>2</CustomizedButton></div>
            <div className={styles.three} onClick={clickButton}><CustomizedButton >3</CustomizedButton></div>
            <div className={styles.four} onClick={clickButton}><CustomizedButton>4</CustomizedButton></div>
            <div className={styles.five} onClick={clickButton}><CustomizedButton>5</CustomizedButton></div>
            <div className={styles.six} onClick={clickButton}><CustomizedButton>6</CustomizedButton></div>
            <div className={styles.seven} onClick={clickButton}><CustomizedButton>7</CustomizedButton></div>
            <div className={styles.eight} onClick={clickButton}><CustomizedButton>8</CustomizedButton></div>
            <div className={styles.nine} onClick={clickButton}><CustomizedButton>9</CustomizedButton></div>
            <div className={styles.zero} onClick={clickButton}><CustomizedButton>0</CustomizedButton></div>
            <div className={styles.plus} onClick={clickButton}><CustomizedButton>+</CustomizedButton></div>
            <div className={styles.minus} onClick={clickButton}><CustomizedButton>-</CustomizedButton></div>
            <div className={styles.multiply} onClick={clickButton}><CustomizedButton>*</CustomizedButton></div>
            <div className={styles.divide} onClick={clickButton}><CustomizedButton>/</CustomizedButton></div>
            <div className={styles.equally} onClick={clickButton}><CustomizedButton>=</CustomizedButton></div>
        </div>
    );
};

export default Numpad;