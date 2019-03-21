import React from 'react';
import styles from './jobs.module.scss'
import office from "../../assets/images/og-services.jpg";
import { Link } from 'react-router-dom'
import Showcase from '../../Components/footers/with_showcase/showcase'
import Lead from '../../Components/Lead/lead'
import s2 from '../../assets/images/s2.jpg'


const Jobs = (props) => {

    return (

        <div className={styles.jobs}>
            <Lead
                bgc="#FFF"
                caption="We’re always looking for \n junior and senior talents"
                subcaption="Let’s do great work together"
                textColor="#000"
                shrinked="true"
            />

            <div className={`${styles.carousel} lead_image`}>
                <div className={styles.media_wrapper_inner}>
                    <div className={styles.carousel}></div>
                </div>
            </div>
            <div className={styles.inner}>
                <div className={`${styles.text_list_wrapper}`}>

                    <div className={`${styles.text_box}`}>
                        <div className={styles.text_inner}>
                            <h5 className={styles.title}>Our mission</h5>
                            <p className={styles.text}>We’re here to produce work that makes an impact. That means working with ambitious and talented people who share that aspiration.</p>
                        </div>
                    </div>

                    <div className={`${styles.text_box}`}>
                        <div className={styles.text_inner}>
                            <h5 className={styles.title}>Company culture</h5>
                            <p className={styles.text}>To balance the busyness of working in tech, we’ve created a cosy studio space with three happy office dogs, bringing endless satisfaction to the team. </p>
                        </div>
                    </div>

                    <div className={`${styles.text_box}`}>
                        <div className={styles.text_inner}>
                            <h5 className={styles.title}>Studio office</h5>
                            <p className={styles.text}>To balance the busyness of working in tech, we’ve created a cosy studio space with three happy office dogs, bringing endless satisfaction to the team. </p>
                        </div>
                    </div>

                    <div className={`${styles.text_box}`}>
                        <div className={styles.text_inner}>
                            <h5 className={styles.title}>A usual week</h5>
                            <p className={styles.text}>We’re here to produce work that makes an impact. That means working with ambitious and talented people who share that aspiration.</p>
                        </div>
                    </div>

                    <div className={`${styles.text_box}`}>
                        <div className={styles.text_inner}>
                            <h5 className={styles.title}>Main benefits</h5>
                            <p className={styles.text}>In order to make the best work, collaboration is paramount. Our studio culture is open and relaxed, the ideal environment for harnessing creativity.</p>
                        </div>
                    </div>

                    <div className={`${styles.text_box}`}>
                        <div className={styles.text_inner}>
                            <h5 className={styles.title}>Getting here</h5>
                            <p className={styles.text}>To balance the busyness of working in tech, we’ve created a cosy studio space with three happy office dogs, bringing endless satisfaction to the team. </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.open_positions}>
                <div className={styles.inner}>
                    <h1 className={styles.positions_header}>Open Positions</h1>
                    <div className={styles.positions_container}>
                        <Link className={styles.job_link} to="#">
                            <span className={styles.job_name}>Backend Developer</span>
                            <div className={styles.job_arrow}></div>
                        </Link>
                        <Link className={styles.job_link} to="#">
                            <span className={styles.job_name}>Senior UX Designer</span>
                            <div className={styles.job_arrow}></div>
                        </Link>
                        <p className={styles.job_p}>Not on the list? Sorry, we currently dont have any Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda autem dolore esse fugiat quae reprehenderit sequi. Possimus, similique!</p>
                    </div>

                </div>
            </div>
            <Showcase />
        </div>

    );
};

export default Jobs;