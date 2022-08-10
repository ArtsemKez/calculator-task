import React from 'react';
import styles from './CustomizedButton.module.css'

const CustomizedButton = ( props, {clickButton}) => {

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