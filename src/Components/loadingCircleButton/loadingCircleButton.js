import React from 'react';
import styles from "./loadingCircleButton.module.scss";
import button from "../../images/arrow-right-light.svg";

const CircleButton = () => {
    return (
        <div className={`c-button ${styles.progressCircle}`}>
            <div className={styles.owl_next}>
                <img src={button} className={styles.owl_carousel_navigation} />
                <svg id="prog01" className={styles.round_progress} xmlns="http://www.w3.org/2000/svg" width="55"
                     height="55">
                    <path id="arc1" fill="none" stroke="#fff" strokeWidth="4"/>
                </svg>
            </div>
        </div>
    );
};

export default CircleButton;
