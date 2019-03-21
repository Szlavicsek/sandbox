import React from 'react';
import styles from './button.module.scss'
import { Link } from 'react-router-dom'

const Button = (props) => {
	if (props.linkto) {
		return (
			<Link className={`${styles.button} ${props.customClass ? props.customClass : ""}`} to={props.linkto}>{props.text}</Link>
		)
	} else if (props.type === "submit") {
		return (
			<button type="submit" className={`${styles.button} ${props.customClass ? props.customClass : ""}`}>{props.text}</button>
		);
	} else {
		return (
			<button className={`${styles.button} ${props.customClass ? props.customClass : ""}`}>{props.text}</button>
		);
	}

};

export default Button;
