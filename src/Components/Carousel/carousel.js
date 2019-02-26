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
        }
    }

    loadNext(event) {

        if (!this.state.nextButtonDisabled) {
            // Ha már letelt a 750ms-os zár

            if (/*!event || Number(event.target.id) !== this.state.currentSlideId */ event) {
                btn.afterburn = -1;
                btn.progress = -1;

                let updatedCurrentSlideId;
                const previousSlideId = this.state.currentSlideId;

                if (event) {
                    updatedCurrentSlideId = Number(event.target.id);
                } else {
                    updatedCurrentSlideId = this.state.currentSlideId === this.backgrounds.length-1 ? 0 : this.state.currentSlideId + 1;
                }
                updatedCurrentSlideId = this.state.currentSlideId === this.backgrounds.length-1 ? 0 : this.state.currentSlideId + 1;



                const setStuff = () => {

                    const $frontSide_inner = this.refs["inner0"];
                    const $backSide_inner = this.refs["inner1"];

                    async function phase1(that) {
                        console.log(that)
                        $frontSide_inner.style.transition = "width 0s, transform 0s";
                        $backSide_inner.style.transition = "transform 0s";
                        $frontSide_inner.style.transform = "translateX(0%)";
                        $backSide_inner.style.transform = "translateX(10%)";
                        $frontSide_inner.style.width = "100%";
                        $backSide_inner.style.width = "100%";
                        that.refs["img0"].style.backgroundImage = `url(${that.backgrounds[previousSlideId]})`;
                        that.refs["img1"].style.backgroundImage = `url(${that.backgrounds[that.state.currentSlideId]})`;
                        $frontSide_inner.style.willChange = "transform, background-image";
                        $backSide_inner.style.willChange = "transform, background-image";
                    }

                    function phase2() {
                        setTimeout(function () {
                            $frontSide_inner.style.transition = "all cubic-bezier(.1,.6,.3,.96) 1.5s";
                            $backSide_inner.style.transition = "all cubic-bezier(.1,.6,.3,.96) 1.5s";
                            $frontSide_inner.style.transform = "translateX(-10%)";
                            $frontSide_inner.style.width = "0%";
                            $backSide_inner.style.transform = "translateX(0%)";
                            $frontSide_inner.style.willChange = "transform, background-image";
                            $backSide_inner.style.willChange = "transform, background-image";
                        }, 10)
                    }

                    phase1(this).then(phase2)

                };

                this.setState({
                    currentSlideId: updatedCurrentSlideId,
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
                            <div ref="img0" className="image" style={{backgroundImage: `url(${this.backgrounds[0]})`}}> </div>
                        </div>
                    </div>

                    <div ref="outer1" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "9"}}>
                        <div ref="inner1" className="container" style={{transform: "translateX(10%)"}}>
                            <div ref="img1" className="image" style={{backgroundImage: `url(${this.backgrounds[1]})`}}> </div>
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