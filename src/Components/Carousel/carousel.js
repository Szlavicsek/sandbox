import React, {Component} from 'react';
import styles from "./carousel.module.scss"
import btn from "../../JsModules/svg_circle"
import CircleButton from '../loadingCircleButton/loadingCircleButton'
import bg1 from '../../images/s1.jpg'
import bg2 from '../../images/s2.jpg'
import bg3 from '../../images/s3.jpg'
import bg4 from '../../images/s4.jpg'
import bg5 from '../../images/s5.jpg'
import bg6 from '../../images/s6.jpg'

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.backgroundImages = [bg3, bg4, bg5, bg6, bg1, bg2];
        this.state = {
            frontLeadIsVisible: true,
            nextButtonDisabled: false
        }
    }

    carouselButtonClicked(e) {
        console.log(e)
        Array.from(document.querySelectorAll(".c-button")).forEach((x, i)=> {
            x.classList.remove("owl_next--active");
        });
        e.target.classList.add("owl_next--active");
    };

    loadNext() {
        if (!this.state.nextButtonDisabled) {
            const frontVisible = this.state.frontLeadIsVisible;
            this.setState((state) => ({
                frontLeadIsVisible: !frontVisible,
                nextButtonDisabled: true
            }))

            if (this.state.frontLeadIsVisible) {
                console.log("front is visible")
                this.refs.front.style.transform = "translateX(-100%)";
                this.refs.back.style.transform = "translateX(0)";
            } else {
                console.log("front is not visible")
                this.refs.back.style.transform = "translateX(-100%)";
                this.refs.front.style.transform = "translateX(0)";
            }

            setTimeout(function () {
                if (!this.state.frontLeadIsVisible) {
                    console.log('secondary is in front');
                    this.refs.front.style.zIndex = 1;
                    this.refs.back.style.zIndex = 2;
                    this.refs.front.style.transition = "translate 0s";
                    this.refs.front.style.transform = "translateX(20%)";
                    this.refs.front.style.backgroundImage = `url(${this.backgroundImages[0]})`;
                    setTimeout(function () {
                        this.refs.front.style.transition = "transform cubic-bezier(.12,.77,.33,.96) 1.5s";
                    }.bind(this), 20)
                } else {
                    console.log('primary is in front')
                    this.refs.back.style.zIndex = 1;
                    this.refs.front.style.zIndex = 2;
                    this.refs.back.style.transition = "translate 0s";
                    this.refs.back.style.transform = "translateX(20%)";
                    this.refs.back.style.backgroundImage = `url(${this.backgroundImages[0]})`;
                    this.refs.back.style.transition = "transform cubic-bezier(.12,.77,.33,.96) 1.8s";
                    setTimeout(function () {
                        this.refs.back.style.transition = "transform cubic-bezier(.12,.77,.33,.96) 1.5s";
                    }.bind(this), 20)
                }

                this.backgroundImages.push(this.backgroundImages[0]);
                this.backgroundImages.shift();

                this.setState((state) => ({
                    nextButtonDisabled: false
                }))
            }.bind(this), 1800)
        }
    }







    // btn.stop()
    // btn.next(5); // ez mindig meghívódik, fix it
    // + click eventet működésre bírni


    render() {
        btn.next(5);

        return (
            <div className={styles.carousel_wrapper}>
                <div className={styles.carouselImagesWrapper}>
                    <div ref="front" className={styles.lead_image} style={{ zIndex: 2, backgroundImage: `url(${bg1})`, transform: 'translateX(0)'} }></div>
                    <div ref="back" className={styles.lead_image} style={{ zIndex: 1, backgroundImage: `url(${bg2})`, transform: 'translateX(20%)'} }></div>
                </div>
                <div className={styles.carouselButtons_wrapper}>
                    <CircleButton id="1" onClick={(e) => this.carouselButtonClicked(e)} />
                    <CircleButton id="2" onClick={(e) => this.carouselButtonClicked(e)} />
                    <CircleButton id="3" onClick={(e) => this.carouselButtonClicked(e)} />
                    <CircleButton id="4" onClick={(e) => this.carouselButtonClicked(e)} />
                </div>
                <button className={styles.next} onClick={()=>this.loadNext()}>next</button>
            </div>
        );
    }
};

export default Carousel;