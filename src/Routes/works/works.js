import React from 'react';
import styles from './works.module.scss'
import leadImage from "../../assets/images/pexels-photo-39811.jpeg"
import logo1 from "../../assets/images/cisco.PNG"
import logo2 from "../../assets/images/ddb.PNG"
import logo3 from "../../assets/images/inmarsat.PNG"
import logo4 from "../../assets/images/grey.PNG"
import logo5 from "../../assets/images/isobar.PNG"
import Button from '../../Components/button/button'
import Spinner from '../../Components/spinner/spinner'
import BigFooter from "../../Components/footers/big/bigfooter";
import Lead from '../../Components/Lead/lead'
import Card from '../../Components/card/card'
import s1 from '../../assets/images/s1.jpg'
import BrandLogo from '../../Components/BrandLogo/brand_logo'

const Works = (props) => {

        return (
            <>
                <Lead
                    bgc="#241E29"
                    caption="We're proud of our work"
                    subcaption="Take a look at some of our favourite projects"
                    textColor="#FFF"
                    shrinked="true"
                />
                <section className={styles.works}>
                    <div className={styles.inner}>
                        <div className={`${styles.lead} lead_image`}>
                            <div className={styles.lead_inner}>
                                <img className={`${styles.lead_image}`} src={leadImage} alt="hello" />
                            </div>
                            <a href="#" className={styles.lead_info}>
                                <h2 className={styles.lead_image_title}>NKFIH Redesign</h2>
                                <p className={styles.lead_image_subtitle}>Web development for Dr. Bertalan Mesko</p>
                            </a>
                        </div>
                        <div className={styles.works_grid_wrapper}>

                            <Card size='big' title="a nice work" description='this is some description' pic={s1} linkto="#" />
                            <Card size='big' title="a nice work" description='this is some description' pic={s1} linkto="#" />
                            <Card size='big' title="a nice work" description='this is some description' pic={s1} linkto="#" />
                            <Card size='big' title="a nice work" description='this is some description' pic={s1} linkto="#" />
                            <Card size='big' title="a nice work" description='this is some description' pic={s1} linkto="#" />
                            <Card size='big' title="a nice work" description='this is some description' pic={s1} linkto="#" />
                            <Card size='big' title="a nice work" description='this is some description' pic={s1} linkto="#" />
                            <Card size='big' title="a nice work" description='this is some description' pic={s1} linkto="#" />

                        </div>
                        <div className={styles.works_bottom}>
                            <Button customClass={styles.load_more} text="Load more" />
                            <p className={styles.disclaimer}>
                                All of this contents are published for self-promotional, business-to-business purposes for the exclusive use of our clients. Melkweg explicitly forbids the downloading or re-purposing of any text, audio, visual, programming or design data without prior written consent.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={styles.brands_wrapper}>
                    <div className={styles.inner}>
                    <h2 className={styles.brands_text}>Brands & clients</h2>
                        <div className={styles.logo_grid_wrapper}>
                            <BrandLogo logoSrc={logo1}/>
                            <BrandLogo logoSrc={logo2}/>
                            <BrandLogo logoSrc={logo3}/>
                            <BrandLogo logoSrc={logo4}/>
                            <BrandLogo logoSrc={logo5}/>
                            <BrandLogo logoSrc={logo1}/>
                            <BrandLogo logoSrc={logo2}/>
                            <BrandLogo logoSrc={logo3}/>
                            <BrandLogo logoSrc={logo4}/>
                            <BrandLogo logoSrc={logo5}/>
                        </div>
                    </div>
                </section>
                <BigFooter/>
            </>
        );

};

export default Works;