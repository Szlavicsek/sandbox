import React from 'react';
import styles from './card.module.scss'
import { Link } from 'react-router-dom'

const Card = (props) => { //props: size, title, description, linkto (optional), pic

	if (props.linkto) {
		return (
			<div className={`${props.size === "small" ? styles.grid_item_small : styles.grid_item_big}`}>
				<div className={styles.card_inner}>
					<Link to="#" className={styles.card_link}>
						<div className={styles.card_image_wrapper}>
							<img className={styles.card_image} src={props.pic} alt="hello"/>
						</div>
					</Link>

					<div className={styles.card_image_text}>
						<h2 className={styles.card_image_title}>{props.title}</h2>
						<p className={styles.card_image_subtitle}>{props.description}</p>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className={`${props.size === "small" ? styles.grid_item_small : styles.grid_item_big}`}>
				<div className={styles.card_inner}>
					<div className={styles.card_image_wrapper}>
						<img className={styles.card_image} src={props.pic} alt="hello"/>
					</div>

					<div className={styles.card_image_text}>
						<h2 className={styles.card_image_title}>{props.title}</h2>
						<p className={styles.card_image_subtitle}>{props.description}</p>
					</div>
				</div>
			</div>
		);
	}
};

export default Card;
