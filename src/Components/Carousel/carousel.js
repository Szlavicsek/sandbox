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

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.backgrounds = [bg0, bg1, bg2, bg3, bg4, bg5];
        this.state = {
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
                const updatedTopZIndex = this.state.topZIndex + 2

                if (event) {
                    updatedCurrentSlideId = Number(event.target.id);
                } else {
                    updatedCurrentSlideId = this.state.currentSlideId === this.backgrounds.length-1 ? 0 : this.state.currentSlideId + 1;
                }

                const setStuff = () => {



                    const $frontSide_inner = this.refs["inner" + previousSlideId];
                    const $backSide_inner = this.refs["inner" + this.state.currentSlideId];

                    $frontSide_inner.style.transition = "width 0s, transform 0s";
                    $backSide_inner.style.transition = "width 0s, transform 0s";
                    $frontSide_inner.style.transform = "translateX(0%)";
                    $backSide_inner.style.transform = "translateX(10%)";
                    $frontSide_inner.style.width = "100%";
                    $backSide_inner.style.width = "100%";
                    $frontSide_inner.style.zIndex = this.state.topZIndex
                    $backSide_inner.style.zIndex = this.state.topZIndex-1

                    setTimeout(function () {
                        $frontSide_inner.style.transition = "all cubic-bezier(.1,.6,.3,.96) 1.5s";
                        $backSide_inner.style.transition = "all cubic-bezier(.1,.6,.3,.96) 1.5s";
                        $frontSide_inner.style.transform = "translateX(-10%)";
                        $frontSide_inner.style.width = "0%";
                        $backSide_inner.style.transform = "translateX(0%)";
                    }, 10)

                };

                this.setState({
                    currentSlideId: updatedCurrentSlideId,
                    topZIndex: updatedTopZIndex
                }, setStuff);
            }
        }
    }



    componentDidMount() {
        btn.next(3, this.loadNext.bind(this));
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
                <div className={styles.carouselImagesWrapper}>

                    <div ref="outer0" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "10"}}>
                        <div ref="inner0" className="container" style={{transform: "translateX(0%)"}}>
                            <img ref="img0" className="image" src={this.backgrounds[0]} alt="lead0" />
                        </div>
                    </div>

                    <div ref="outer1" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "9"}}>
                        <div ref="inner1" className="container" style={{transform: "translateX(10%)"}}>
                            <img ref="img1" className="image" src={this.backgrounds[1]} alt="lead1" />
                        </div>
                    </div>

                    <div ref="outer2" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "8"}}>
                        <div ref="inner2" className="container" style={{transform: "translateX(10%)"}}>
                            <img ref="img2" className="image" src={this.backgrounds[2]} alt="lead2" />
                        </div>
                    </div>

                    <div ref="outer3" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "7"}}>
                        <div ref="inner3" className="container" style={{transform: "translateX(10%)"}}>
                            <img ref="img3" className="image" src={this.backgrounds[3]} alt="lead3" />
                        </div>
                    </div>

                    <div ref="outer4" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "6"}}>
                        <div ref="inner4" className="container" style={{transform: "translateX(10%)"}}>
                            <img ref="img4" className="image" src={this.backgrounds[4]} alt="lead4" />
                        </div>
                    </div>

                    <div ref="outer5" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "5"}}>
                        <div ref="inner5" className="container" style={{transform: "translateX(10%)"}}>
                            <img ref="img5" className="image" src={this.backgrounds[5]} alt="lead5" />
                        </div>
                    </div>

                </div>

                <div className={`${styles.carouselButtons_wrapper} ${this.props.scrolled ? styles.hiddenControls : ""}`}>

                    <CircleButton id="0" activeSlideId={this.state.currentSlideId} click={(e) => this.loadNext(e)} />
                    <CircleButton id="1" activeSlideId={this.state.currentSlideId} click={(e) => this.loadNext(e)} />
                    <CircleButton id="2" activeSlideId={this.state.currentSlideId} click={(e) => this.loadNext(e)} />
                    <CircleButton id="3" activeSlideId={this.state.currentSlideId} click={(e) => this.loadNext(e)} />
                    <CircleButton id="4" activeSlideId={this.state.currentSlideId} click={(e) => this.loadNext(e)} />
                    <CircleButton id="5" activeSlideId={this.state.currentSlideId} click={(e) => this.loadNext(e)} />
                </div>
            </div>
        );
    }
};

export default Carousel;