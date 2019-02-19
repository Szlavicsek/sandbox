import React from 'react';
import styles from "./carousel.module.scss"
import ReactSiema from 'react-siema'
import btn from "../../JsModules/svg_circle"
import CircleButton from '../loadingCircleButton/loadingCircleButton'

const Slide = (props) => <div {...props}></div>;

const carouselButtonClicked = (e, slider) => {
    console.log(e)
    slider.goTo(e.target.id)
    Array.from(document.querySelectorAll(".c-button")).forEach((x, i)=> {
        x.classList.remove("owl_next--active");
    });
    e.target.classList.add("owl_next--active");
};

const Carousel = () => {

    const options = {
        resizeDebounce: 0,
        duration: 800,
        easing: 'ease-in-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        threshold: 20,
        loop: false
    };

    btn.next(5); // ez mindig meghívódik, fix it
    // + click eventet működésre bírni

    let slider

    return (
        <div className={styles.carousel_wrapper}>
            <ReactSiema {...options} ref={siema => slider = siema}>
                <Slide className={styles.siema_item} id={styles.si0} />
                <Slide className={styles.siema_item} id={styles.si1} />
                <Slide className={styles.siema_item} id={styles.si2} />
                <Slide className={styles.siema_item} id={styles.si3} />
            </ReactSiema>
           <div className={styles.carouselButtons_wrapper}>
                <CircleButton id="1" onClick={(e) => carouselButtonClicked(e, slider)} />
                <CircleButton id="2" onClick={(e) => carouselButtonClicked(e, slider)} />
                <CircleButton id="3" onClick={(e) => carouselButtonClicked(e, slider)} />
                <CircleButton id="4" onClick={(e) => carouselButtonClicked(e, slider)} />
            </div>
        </div>
    );
};

export default Carousel;