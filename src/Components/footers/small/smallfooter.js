import styles from "./smallfooter.module.scss";
import React from 'react';


const SmallFooter = () => {

	return (
		<footer className={styles.footer}>
			<p className={styles.bottom_left}>&copy; 2019 MelkwegDigital</p>
			<p className={styles.bottom_right}>We rise by lifting others.</p>
		</footer>
	);
};

export default SmallFooter;


