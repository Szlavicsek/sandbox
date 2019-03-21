import React from 'react';
import styles from './leadbackup.module.scss'
import { withRouter } from 'react-router-dom'

const Leadbackup = (props) => {

	return (
		<div className={`${styles.lead_wrapper}`}>
			{/*<img className={`${styles.background_media} lead_background_media`} src={props.bgi} alt=""/>*/}
			<div style={{backgroundColor: props.bgc}} className={`${styles.background_media} lead_background_media`}></div>
			<div className={`${styles.lead_caption_container} lead_caption_container`}>
				<div className={styles.lead_caption_inner}>
					<h1 style={{color: props.textColor}} className={styles.lead_title}>{props.caption.split('\\n').map((item, key) => {
							return <React.Fragment key={key}>{item}<br/></React.Fragment>
					})}</h1>
					<p style={{color: props.textColor}} className={styles.lead_description}>{props.subcaption}</p>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Leadbackup);
