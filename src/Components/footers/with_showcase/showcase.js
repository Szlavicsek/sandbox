import React from 'react';
import styles from "./showcase.module.scss";
import Card from "../../card/card";
import SmallFooter from '../small/smallfooter'
import workPic from "../../../assets/images/pexels-photo-39811.jpeg";
import Button from "../../../Components/button/button";

const Showcase = () => {
	return (
		<div className={styles.showcase_wrapper}>
			<div className={styles.inner}>
				<h2 className={styles.latest_works_header}>Latest works</h2>
				<div className={styles.works_grid_wrapper}>

					<Card size="big"
						  title="NKFIH Redesign"
						  description="Web development for Dr. Bertalan Mesko"
						  pic={workPic}
						  linkto="https://melkweg.hu/works"/>

					<Card size="big"
						  title="NKFIH Redesign"
						  description="Web development for Dr. Bertalan Mesko"
						  pic={workPic}
						  linkto="https://melkweg.hu/works"/>

					<Card size="big"
						  title="NKFIH Redesign"
						  description="Web development for Dr. Bertalan Mesko"
						  pic={workPic}
						  linkto="https://melkweg.hu/works"/>

				</div>
			</div>
			<Button customClass={styles.explore_button} color="purple" text="Explore our work" />
			<SmallFooter />
		</div>
	);
};

export default Showcase;


