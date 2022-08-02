import React from 'react';
import styles from './Calculator.module.css'
import CustomizedInput from "../UI/CustomizedInput/CustomizedInput";
import Numpad from "./Numpad/Numpad";

const Calculator = () => {
    return (
        <div className={styles.calculator}>
            <div className={styles.input}>
                <CustomizedInput
                    type='number'
                />
            </div>
            <Numpad/>
        </div>
    );
};

export default Calculator;