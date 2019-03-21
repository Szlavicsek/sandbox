import React from 'react';
import styles from './spinner.module.scss'

const Spinner = () => {
	return (
		<div className={styles.spinner_overlay}>
			<svg className={styles.spinner} viewBox="0 0 50 50">
				<circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"/>
			</svg>
		</div>
	)
};

export default Spinner;
