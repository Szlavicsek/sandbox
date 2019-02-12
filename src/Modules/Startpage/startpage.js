import React from 'react';
import Header from "../../Components/Header/header"
import Carousel from "../../Components/Carousel/carousel"
import styles from "./startpage.module.scss"

const Startpage = () => {
    return (
        <div className={styles.startpageWrapper}>
            <Header />
            <Carousel />
        </div>
    );
};

export default Startpage;