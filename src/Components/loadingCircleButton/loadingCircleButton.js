import React, {Component} from 'react';
import styles from "./loadingCircleButton.module.scss";
import button from "../../images/arrow-right-light.svg";

const CircleButton = (props) => {
    return (
        <div onClick={props.click} className={styles.progressCircle}>
            <div className={`c-button ${styles.owl_next} ${props.activeSlideId === Number(props.id) ? "activeOwlNext" : ""}`}>
                <img src={button} className={styles.owl_carousel_navigation} alt="carousel-navigation" />
                <svg id={props.id} className="svgCircle" className={`${styles.round_progress} ${props.activeSlideId === Number(props.id) ? "active" : ""}`} xmlns="http://www.w3.org/2000/svg" width="55"
                     height="55">
                    <path className={`circleStroke ${props.activeSlideId !== Number(props.id) ? "hidden" : ""}`} fill="none" stroke="#fff" strokeWidth="4"/>
                </svg>
            </div>
        </div>
    );
};

export default CircleButton;
