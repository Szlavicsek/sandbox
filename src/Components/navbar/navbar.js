import React, { Component } from 'react';
import styles from './navbar.module.scss';
import { Link, withRouter } from "react-router-dom";
import wave from '../../assets/images/wave.png';
import Headroom from 'react-headroom';

class Navbar extends Component {
    restoreScreenHeight() {
        this.setState({
            MousewheelWasScrolled: false,
        });
    }

    showMenu(e) {
        this.refs.mobileMenu.style.transform = "translateX(0%)"
    }

    closeMenu(e) {
        this.refs.mobileMenu.style.transform = "translateX(100%)"
    }

    checkPreventDefault(e) {
		if (this.props.location.pathname === e.target.getAttribute("href")) {
			e.preventDefault()
		}
	}

    render() {

        let textColor;
        switch(this.props.location.pathname) {
            case "/works":
            case "/agency":
                textColor = "#FFF";
                break;
            case "/contact":
            case "/policy":
            case "/jobs":
                textColor = "#000";
                break;
            default: textColor = "#FFF";
        }

        return (
			<Headroom>
				<header className={`${styles.header} header`}>
					<div className={styles.inner}>
						<Link className={styles.logo} to="/" onClick={()=>this.restoreScreenHeight()}>
							<svg version="1.1" id={styles.M} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								 viewBox="0 0 48.189 48.189" enableBackground="new 0 0 48.189 48.189">
								<polygon fill={textColor} points="33.006,3.761 24.096,24.921 15.185,3.761 0.664,3.761 0.664,44.43 12.545,44.43 12.545,24.921
							13.204,24.921 17.825,37.486 24.096,37.486 30.367,37.486 34.985,24.921 35.646,24.921 35.646,44.43 47.526,44.43 47.526,3.761 "/>
							</svg>
						</Link>
						<nav ref="links" className={styles.links_container}>
							<Link id="works" className={styles.link_wrapper} onClick={(e)=>this.checkPreventDefault(e)} style={{color: textColor}} to="/works"><span className={styles.link_text}>Works</span></Link>
							<Link id="agency" className={styles.link_wrapper} onClick={(e)=>this.checkPreventDefault(e)} style={{color: textColor}} to="/agency"><span className={styles.link_text}>Agency</span></Link>
							<Link id="contact" className={styles.link_wrapper} onClick={(e)=>this.checkPreventDefault(e)} style={{color: textColor}} to="/contact"><span className={styles.link_text}>Contact</span></Link>
							<Link id="jobs" className={styles.link_wrapper} onClick={(e)=>this.checkPreventDefault(e)} style={{color: textColor}} to="/jobs"><span className={styles.link_text}>Jobs</span></Link>
						</nav>
						<div onClick={()=>this.showMenu()} className={styles.hamburger}></div>
					</div>
					<div ref='mobileMenu' className={styles.mobile_menu}>
						<div className={styles.mobile_menu_inner}>
							<button onClick={()=>this.closeMenu()} id={styles.close_button}></button>
							<ul className={styles.links_container_mobile}>
								<li onClick={this.props.clicked} className={styles.link_wrapper}><Link className={styles.link} style={{color: textColor}} to="/works">Works</Link></li>
								<li onClick={this.props.clicked} className={styles.link_wrapper}><Link className={styles.link} style={{color: textColor}} to="/agency">Agency</Link></li>
								<li onClick={this.props.clicked} className={styles.link_wrapper}><Link className={styles.link} style={{color: textColor}} to="/contact">Contact</Link></li>
								<li onClick={this.props.clicked} className={styles.link_wrapper}><Link className={styles.link} style={{color: textColor}} to="/jobs">Jobs</Link></li>
								<li onClick={this.props.clicked} className={styles.link_wrapper}><img className={styles.wave} src={wave} alt=""/></li>
							</ul>
						</div>
					</div>
				</header>
			</Headroom>
        );
    }
};

export default withRouter(Navbar);
