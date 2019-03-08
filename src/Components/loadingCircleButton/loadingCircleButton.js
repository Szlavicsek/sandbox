import React from 'react';
import styles from "./loadingCircleButton.module.scss";

const CircleButton = (props) => {
    return (
        <div id={props.id} onClick={props.click} className={styles.progressCircle}>
            <div className={`c-button ${styles.owl_next} ${props.leadIsBright ? styles.owlNext_dark : ""} ${props.activeSlideId === Number(props.id) ? styles.activeOwlnext : ""}`}>
                <div className={styles.owl_carousel_navigation}></div>
                <svg id={props.id} className={`svgCircle ${styles.round_progress} ${props.activeSlideId === Number(props.id) ? "active" : ""}`} xmlns="http://www.w3.org/2000/svg" width="55"
                     height="55">
                    <path className={`circleStroke ${props.activeSlideId !== Number(props.id) ? "hidden" : ""} ${props.leadIsBright ? styles.stroke_dark : ""}`} stroke="#fff" fill="none" stroke={``} strokeWidth="4"/>
                </svg>
            </div>
        </div>
    );
};

export default CircleButton;
