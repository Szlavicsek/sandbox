import React, { Component } from 'react';
import styles from './lead.module.scss';
import { withRouter } from "react-router-dom";
import Button from "../button/button"

class Lead extends Component {

    state = {
        MousewheelWasScrolled: false,
    };

    // preventDefault(e) {
    //     e = e || window.event;
    //     if (e.preventDefault)
    //         e.preventDefault();
    //     e.returnValue = false;
    // }
    //
    // disableScroll() {
    //     if (window.addEventListener)
    //         window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    //     window.onwheel = this.preventDefault;
    //     window.onmousewheel = document.onmousewheel = this.preventDefault;
    //     window.ontouchmove  = this.preventDefault;
    //     document.onkeydown  = this.preventDefaultForScrollKeys;
    // }
    //
    // enableScroll() {
    //     if (window.removeEventListener)
    //         window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    //     window.onmousewheel = document.onmousewheel = null;
    //     window.onwheel = null;
    //     window.ontouchmove = null;
    //     document.onkeydown = null;
    // }
    //
    // onScrollHandler() {
    //     if (!this.state.MousewheelWasScrolled) {
    //         this.setState({MousewheelWasScrolled: true});
    //         this.disableScroll();
    //         console.log(this.props.history);
    //         setTimeout(()=> {
    //             this.enableScroll();
    //         }, 1000);
    //         document.querySelector("#jobs").click()
    //     }
    // }
    //
    // restoreScreenHeight() {
    //     this.setState({
    //         MousewheelWasScrolled: false
    //     })
    //     console.log(this.props.history)
    // }
    //
    // componentDidUpdate(){
    //     window.onpopstate  = (e) => {
    //         this.restoreScreenHeight();
    //         const scrollToTop = () => {
    //             const c = document.documentElement.scrollTop || document.body.scrollTop;
    //             if (c > 0) {
    //                 window.requestAnimationFrame(scrollToTop);
    //                 window.scrollTo(0, c - c / 8);
    //             }
    //         };
    //         scrollToTop();
    //     }
    // }
    //
    // componentDidMount() {
    //
    // }

    render() {

        return (
            <div className={`${styles.lead_wrapper} ${this.props.worksample ? styles.worksample : ""}`} >

                {this.props.bgi ?
                    <div className={styles.background_media_wrapper}>
                        <img className={`${styles.background_media} lead_background_media`} src={this.props.bgi} alt=""/>
                    </div>:
                    <div style={{backgroundColor: this.props.bgc}} className={`${styles.background_media} lead_background_media`}></div>
                }

                <div className={`${styles.lead_caption_container} ${this.props.shrinked ? styles.shrinked : ""} lead_caption_container`}>
                    <div className={styles.lead_caption_inner}>
                        <h1 style={{color: this.props.textColor}} className={styles.lead_title}>{this.props.caption.split('\\n').map((item, key) => {
                            return <React.Fragment key={key}>{item}<br/></React.Fragment>
                        })}</h1>
                        <p style={{color: this.props.textColor}} className={styles.lead_description}>{this.props.subcaption}</p>
                        {this.props.button ?
                            <div className={styles.button_container}>
                                <Button text={this.props.buttonText} to={this.props.buttonHref} customClass={this.props.customButtonStyle} />
                            </div> : null
                        }

                    </div>

                </div>
            </div>
        );
    }
};

export default withRouter(Lead);
