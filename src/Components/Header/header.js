import React from 'react';
import styles from "./header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <a className={styles.logo} href="#">
                </a>
                <div className={styles.links}>
                    <a className={styles.link} href="#">Works</a>
                    <a className={styles.link} href="#">Agency</a>
                    <a className={styles.link} href="#">Contact</a>
                </div>
            </div>
        </header>
    );
};

export default Header;