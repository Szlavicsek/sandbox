import React, { Component } from 'react';
import styles from './lead.module.scss';
import Carousel from "../../Components/Carousel/carousel"
import { Link, withRouter } from "react-router-dom";

class Lead extends Component {
    state = {
        MousewheelWasScrolled: false,

    };

    preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    disableScroll() {
        if (window.addEventListener)
            window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        window.onwheel = this.preventDefault;
        window.onmousewheel = document.onmousewheel = this.preventDefault;
        window.ontouchmove  = this.preventDefault;
        document.onkeydown  = this.preventDefaultForScrollKeys;
    }

    enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }

    onScrollHandler() {
        if (!this.state.MousewheelWasScrolled) {
            this.setState({MousewheelWasScrolled: true});
            this.disableScroll();
            console.log(this.props.history);
            setTimeout(()=> {
                this.enableScroll();
            }, 1000)
            document.querySelector("." + this.refs.works.props.className).click()
        }
    }

    restoreScreenHeight() {
        this.setState({
            MousewheelWasScrolled: false
        })
        console.log(this.props.history)
    }

    componentDidUpdate(){
        window.onpopstate  = (e) => {
            this.restoreScreenHeight();
            const scrollToTop = () => {
                const c = document.documentElement.scrollTop || document.body.scrollTop;
                if (c > 0) {
                    window.requestAnimationFrame(scrollToTop);
                    window.scrollTo(0, c - c / 8);
                }
            };
            scrollToTop();
        }
    }


    render() {
        return (
            <div
                onWheel={()=>this.onScrollHandler()}
                id={styles.lead}
                className={this.state.MousewheelWasScrolled ? styles.shrinked : ""}>
                <header className={styles.header}>
                    <div className={styles.inner}>
                        <Link onClick={()=>this.restoreScreenHeight()} className={styles.logo} to="/" />
                        <div className={styles.links}>
                            <Link ref="works" className={styles.link} to="/works">Works</Link>
                            <Link ref="agency" className={styles.link} to="/agency">Agency</Link>
                            <Link ref="contact" className={styles.link} to="/contact">Contact</Link>
                        </div>
                    </div>
                </header>
                <Carousel
                scrolled={this.props.MousewheelWasScrolled}/>
            </div>
        );
    }
};

export default withRouter(Lead);
