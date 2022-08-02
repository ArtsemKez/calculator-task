import React from 'react';
import styles from './CustomizedButton.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getInputValueSelector} from "../../../Redux/Selectors";
import {actions} from "../../../Redux/CalculatorReducer";

const CustomizedButton = (props) => {

    const dispatch = useDispatch()

    const inputValue = useSelector(getInputValueSelector)

    const clickButton = () => {
        if(props.children >= 0 && props.children < 10){
            let newValue =  inputValue + String(props.children)
            dispatch(actions.changeInput(newValue))
        } else {
            console.log('введен символ')
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