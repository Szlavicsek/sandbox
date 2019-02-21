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
            activeSlideId: 0,
            nextButtonDisabled: false,
        }
    }

    loadNext(event) {

        if (!this.state.nextButtonDisabled) {
            // Ha már letelt a 750ms-os zár

            if (event && Number(event.target.id) === this.state.activeSlideId) {
                // Ha az éppen menő slide gombjára lett kattintva
                // console.log('clicked but on the same button')


            } else if (event) {
                // Ha másra kattintottunk mint az éppen menő
                // console.log('clicked, not the same')


            } else {
                //magától meghívódik
                console.log("not event")
                const updatedActiveSlideId = this.state.activeSlideId === this.backgrounds.length-1 ? 0 : this.state.activeSlideId + 1

                this.setState((state) => ({
                    activeSlideId: updatedActiveSlideId
                }));


                console.log(this.state.activeSlideId)


            }



            this.setState((state) => ({
                nextButtonDisabled: true
            }));

            setTimeout(function () {
                this.setState((state) => ({
                    nextButtonDisabled: false
                }));
            }.bind(this), 750) // a transition fele

        }
    }



    componentDidMount() {
        btn.next(7, this.loadNext.bind(this));
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
                    <div ref="0" className={styles.lead_image} style={{ zIndex: 6, backgroundImage: `url(${this.backgrounds[0]})`, transform: 'translateX(0)'} }></div>
                    <div ref="1" className={styles.lead_image} style={{ zIndex: 5, backgroundImage: `url(${this.backgrounds[1]})`, transform: 'translateX(20%)'} }></div>
                    <div ref="2" className={styles.lead_image} style={{ zIndex: 4, backgroundImage: `url(${this.backgrounds[2]})`, transform: 'translateX(20%)'} }></div>
                    <div ref="3" className={styles.lead_image} style={{ zIndex: 3, backgroundImage: `url(${this.backgrounds[3]})`, transform: 'translateX(20%)'} }></div>
                    <div ref="4" className={styles.lead_image} style={{ zIndex: 2, backgroundImage: `url(${this.backgrounds[4]})`, transform: 'translateX(20%)'} }></div>
                    <div ref="5" className={styles.lead_image} style={{ zIndex: 1, backgroundImage: `url(${this.backgrounds[5]})`, transform: 'translateX(20%)'} }></div>
                </div>
                <div className={styles.carouselButtons_wrapper}>

                    <CircleButton id="0" activeSlideId={this.state.activeSlideId} click={(e) => this.loadNext(e)} />
                    <CircleButton id="1" activeSlideId={this.state.activeSlideId} click={(e) => this.loadNext(e)} />
                    <CircleButton id="2" activeSlideId={this.state.activeSlideId} click={(e) => this.loadNext(e)} />
                    <CircleButton id="3" activeSlideId={this.state.activeSlideId} click={(e) => this.loadNext(e)} />
                    <CircleButton id="4" activeSlideId={this.state.activeSlideId} click={(e) => this.loadNext(e)} />
                    <CircleButton id="5" activeSlideId={this.state.activeSlideId} click={(e) => this.loadNext(e)} />
                </div>
            </div>
        );
    }
};

export default Carousel;