import React from 'react';
import styles from "./carousel.module.scss"
import ReactSiema from 'react-siema'

const Slide = (props) => <div {...props}></div>;

const Carousel = () => {

    const options = {
        resizeDebounce: 0,
        duration: 800,
        easing: 'ease-in-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        threshold: 0,
        loop: false
    }

    let slider

    return (
        <div className={styles.carousel}>
            <ReactSiema {...options} ref={siema => slider = siema}>
                <Slide className={styles.siema_item} id={styles.si1} />
                <Slide className={styles.siema_item} id={styles.si2} />
                <Slide className={styles.siema_item} id={styles.si3} />
                <Slide className={styles.siema_item} id={styles.si4} />
            </ReactSiema>
            <div className={styles.carouselButtons_wrapper}>
                <button className={styles.carouselButton} onClick={() => slider.goTo(0)}></button>
                <button className={styles.carouselButton} onClick={() => slider.goTo(1)}></button>
                <button className={styles.carouselButton} onClick={() => slider.goTo(2)}></button>
                <button className={styles.carouselButton} onClick={() => slider.goTo(3)}></button>
            </div>
        </div>
    );
};

export default Carousel;