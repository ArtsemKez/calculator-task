import React from 'react';
import styles from './CustomizedInput.module.css'

const CustomizedInput = (props) => {
    return (
        <input className={styles.input} {...props}/>
    );
};

export default CustomizedInput;