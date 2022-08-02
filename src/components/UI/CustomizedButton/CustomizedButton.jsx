import React from 'react';
import styles from './CustomizedButton.module.css'

const CustomizedButton = (props) => {
    return (
        <button {...props} className={styles.button}>
            {props.children}
        </button>
    );
};

export default CustomizedButton;