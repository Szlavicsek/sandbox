import React, {Component} from 'react';
import styles from './home.module.scss'
import Carousel from "./Carousel/carousel";

class Home extends Component {
	render() {
		return (

			<div
				// onWheel={()=>this.onScrollHandler()}
				id={styles.lead}
				className={this.props.location.pathname !== "/" ? styles.shrinked : ""}>
				<Carousel shrinked={this.props.location.pathname !== "/" ? true : false} />
			</div>

		);
	}
}

export default Home;