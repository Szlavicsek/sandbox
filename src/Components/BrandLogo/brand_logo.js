import React from 'react';
import styles from "./brand_logo.module.scss";

const BrandLogo = (props) => {
	return (
		<div className={styles.brand_logo_container}>
			<a className={styles.brand_logo} href="#"><img src={props.logoSrc} alt=""/></a>
		</div>
	);
};

export default BrandLogo;
