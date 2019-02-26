import React, {Component} from 'react';
import styles from "./carousel.module.scss"
import btn from "../../JsModules/svg_circle"
import CircleButton from '../loadingCircleButton/loadingCircleButton'
import bg0 from '../../images/s1.jpg'
import bg1 from '../../images/s2.jpg'
import bg2 from '../../images/s3.jpg'
import bg3 from '../../images/s4.jpg'
import bg4 from '../../images/s5.jpg'
import bg5 from '../../images/s6.jpg'

import v0 from '../../images/v1.mp4'
import v1 from '../../images/v2.mp4'
import v2 from '../../images/v3.mp4'
import v3 from '../../images/v4.mp4'
import v4 from '../../images/v5.mp4'
import v5 from '../../images/v6.mp4'

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.backgrounds = [v0, v1, v2, v3, v4, v5];
        this.state = {
            nextButtonDisabled: false,
            currentSlideId: 0,
            topZIndex: 10
        }
    }

    loadNext(event) {
        if (!this.state.nextButtonDisabled) {
            // Ha már letelt a 750ms-os zár

            if (!event || Number(event.target.id) !== this.state.currentSlideId) {
                btn.afterburn = -1;
                btn.progress = -1;

                let updatedCurrentSlideId;
                const previousSlideId = this.state.currentSlideId;
                const updatedTopZIndex = this.state.topZIndex + 2;

                if (event) {
                    updatedCurrentSlideId = Number(event.target.id);
                } else {
                    updatedCurrentSlideId = this.state.currentSlideId === this.backgrounds.length-1 ? 0 : this.state.currentSlideId + 1;
                }

                const setStuff = () => {

                    const $frontSide_inner = this.refs["inner" + previousSlideId];
                    const $backSide_inner = this.refs["inner" + this.state.currentSlideId];



                    setTimeout(function () {
                        $frontSide_inner.style.transition = "all cubic-bezier(.1,.6,.3,.96) 1.5s";
                        $backSide_inner.style.transition = "all cubic-bezier(.1,.6,.3,.96) 1.5s";
                        $frontSide_inner.style.transform = "translateY(-10%)";
                        $frontSide_inner.style.height = "0%";
                        $backSide_inner.style.transform = "translateY(0%)";
                    }, 10)

                    setTimeout(function () {
                        this.setState((state) =>({
                            nextButtonDisabled: false
                        }))
                    }.bind(this), 1500)

                };

                this.setState({
                    currentSlideId: updatedCurrentSlideId,
                    topZIndex: updatedTopZIndex,
                    nextButtonDisabled: true
                }, setStuff);
            }
        }
    }



    componentDidMount() {
        btn.next(5, this.loadNext.bind(this));
    }


    // btn.stop()
    // + click eventet működésre bírni


    render() {

        // if (this.props.scrolled) {
        //     btn.stop()
        // }
        // console.log("scrolled is " + this.props.scrolled)


        return (
            <div className={styles.carousel_wrapper}>
                <div className={styles.carousel_bg_and_controls}>

                    <div ref="outer0" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "10"}}>
                        <div ref="inner0" className={styles.container} style={{transform: "translateY(0%)"}}>
                            {/*<img ref="hero0" className={styles.contentMedia} src={this.backgrounds[0]} alt="hero1"/>*/}
                            <video ref="hero0" className={styles.contentMedia} autoPlay>
                                <source src={this.backgrounds[0]} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div ref="outer1" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "9"}}>
                        <div ref="inner1" className={styles.container} style={{transform: "translateY(10%)"}}>
                            {/*<img ref="hero1" className={styles.contentMedia} src={this.backgrounds[1]} alt="hero2"/>*/}
                            <video ref="hero1" className={styles.contentMedia}>
                                <source src={this.backgrounds[1]} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div ref="outer2" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "8"}}>
                        <div ref="inner2" className={styles.container} style={{transform: "translateY(10%)"}}>
                            {/*<img ref="hero0" className={styles.contentMedia} src={this.backgrounds[0]} alt="hero1"/>*/}
                            <video ref="hero2" className={styles.contentMedia}>
                                <source src={this.backgrounds[2]} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div ref="outer3" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "7"}}>
                        <div ref="inner3" className={styles.container} style={{transform: "translateY(10%)"}}>
                            {/*<img ref="hero1" className={styles.contentMedia} src={this.backgrounds[1]} alt="hero2"/>*/}
                            <video ref="hero3" className={styles.contentMedia}>
                                <source src={this.backgrounds[3]} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div ref="outer4" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "6"}}>
                        <div ref="inner4" className={styles.container} style={{transform: "translateY(10%)"}}>
                            {/*<img ref="hero0" className={styles.contentMedia} src={this.backgrounds[0]} alt="hero1"/>*/}
                            <video ref="hero4" className={styles.contentMedia}>
                                <source src={this.backgrounds[4]} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div ref="outer5" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "5"}}>
                        <div ref="inner5" className={styles.container} style={{transform: "translateY(10%)"}}>
                            {/*<img ref="hero1" className={styles.contentMedia} src={this.backgrounds[1]} alt="hero2"/>*/}
                            <video ref="hero5" className={styles.contentMedia}>
                                <source src={this.backgrounds[5]} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div className={`${styles.carouselButtons_wrapper}`}>
                        {this.backgrounds.map((x, i) => {
                           return <CircleButton key={i} id={i} activeSlideId={this.state.currentSlideId} click={(e) => this.loadNext(e)}/>
                        })}
                    </div>
                </div>


            </div>
        );
    }
};

export default Carousel;