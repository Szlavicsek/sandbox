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
            highscore: 5,
            currentSlideId: 0,
            nextButtonDisabled: false,
        }
    }

    loadNext(event) {

        if (!this.state.nextButtonDisabled) {
            // Ha már letelt a 750ms-os zár

            btn.afterburn = -1;
            btn.progress = -1;


            if (!event || Number(event.target.id) !== this.state.currentSlideId) {
                let updatedCurrentSlideId;
                const previousSlideId = this.state.currentSlideId;

                if (event) {
                    updatedCurrentSlideId = Number(event.target.id);

                } else {
                    //magától meghívódik
                    updatedCurrentSlideId = this.state.currentSlideId === this.backgrounds.length-1 ? 0 : this.state.currentSlideId + 1;
                }
                const updatedZIndex = this.state.highscore + 1;

                const setStuff = () => {

                    const $prevSlide_inner = this.refs["inner" + previousSlideId];
                    const $prevSlide_outer = this.refs["outer" + previousSlideId];
                    const $currentSlide_inner = this.refs["inner" + this.state.currentSlideId];
                    const $currentSlide_outer = this.refs["outer" + this.state.currentSlideId];


                    $currentSlide_inner.style.transform = "translateX(0)";
                    $currentSlide_inner.style.transition = "transform cubic-bezier(.12,.77,.33,.96) 1.5s, width 1.5s";
                    $prevSlide_inner.style.transform = "translateX(-20%)";
                    $prevSlide_inner.style.width = "0%";

                    setTimeout(function () {

                        $prevSlide_inner.style.transition = "transform 0s";
                        $prevSlide_inner.style.transform = "translateX(20%)";
                        $prevSlide_inner.style.width = "100%";


                        $prevSlide_outer.style.highscore = this.state.zIndex;

                        this.setState({
                            nextButtonDisabled: false
                        });

                    }.bind(this), 1500)
                }

                this.setState({
                    currentSlideId: updatedCurrentSlideId,
                    nextButtonDisabled: true,
                    highscore: updatedZIndex
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

                    <div ref="outer0" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "5"}}>
                        <div ref="inner0" className="container" style={{transform: "translateX(0%)"}}>
                            <img className="image" src={this.backgrounds[0]} style={{visibility: "visible"}} alt="lead0" />
                        </div>
                    </div>

                    <div ref="outer1" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "4"}}>
                        <div ref="inner1" className="container" style={{transform: "translateX(20%)"}}>
                            <img className="image" src={this.backgrounds[1]} style={{visibility: "visible"}} alt="lead1" />
                        </div>
                    </div>

                    <div ref="outer2" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "3"}}>
                        <div ref="inner2" className="container" style={{transform: "translateX(20%)"}}>
                            <img className="image" src={this.backgrounds[2]} style={{visibility: "visible"}} alt="lead2" />
                        </div>
                    </div>

                    <div ref="outer3" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "2"}}>
                        <div ref="inner3" className="container" style={{transform: "translateX(20%)"}}>
                            <img className="image" src={this.backgrounds[3]} style={{visibility: "visible"}} alt="lead3" />
                        </div>
                    </div>

                    <div ref="outer4" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "1"}}>
                        <div ref="inner4" className="container" style={{transform: "translateX(20%)"}}>
                            <img className="image" src={this.backgrounds[4]} style={{visibility: "visible"}} alt="lead4" />
                        </div>
                    </div>

                    <div ref="outer5" className={`lead ${this.props.scrolled ? "shrinkedLeadWrapper" : ""}`} style={{zIndex: "0"}}>
                        <div ref="inner5" className="container" style={{transform: "translateX(20%)"}}>
                            <img className="image" src={this.backgrounds[5]} style={{visibility: "visible"}} alt="lead5" />
                        </div>
                    </div>

                </div>

                <div className={styles.carouselButtons_wrapper}>

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