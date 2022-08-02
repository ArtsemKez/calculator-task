import React from 'react';
import styles from './Numpad.module.css'
import CustomizedButton from "../../UI/CustomizedButton/CustomizedButton";

const Numpad = () => {
    return (
        <div className={styles.numpad}>
            <div className={styles.one}><CustomizedButton  >1</CustomizedButton></div>
            <div className={styles.two}><CustomizedButton >2</CustomizedButton></div>
            <div className={styles.three}><CustomizedButton >3</CustomizedButton></div>
            <div className={styles.four}><CustomizedButton>4</CustomizedButton></div>
            <div className={styles.five}><CustomizedButton>5</CustomizedButton></div>
            <div className={styles.six}><CustomizedButton>6</CustomizedButton></div>
            <div className={styles.seven}><CustomizedButton>7</CustomizedButton></div>
            <div className={styles.eight}><CustomizedButton>8</CustomizedButton></div>
            <div className={styles.nine}><CustomizedButton>9</CustomizedButton></div>
            <div className={styles.zero}><CustomizedButton>0</CustomizedButton></div>
            <div className={styles.plus}><CustomizedButton>+</CustomizedButton></div>
            <div className={styles.minus}><CustomizedButton>-</CustomizedButton></div>
            <div className={styles.multiply}><CustomizedButton>*</CustomizedButton></div>
            <div className={styles.divide}><CustomizedButton>/</CustomizedButton></div>
            <div className={styles.equally}><CustomizedButton>=</CustomizedButton></div>









        </div>
    );
};

export default Numpad;