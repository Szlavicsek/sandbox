import React from 'react';
import styles from './agency.module.scss'
import Button from '../../Components/button/button'
import leadImage from "../../assets/images/pexels-photo-39811.jpeg";
import leadVideo from "../../assets/images/v1.mp4";
import Card from '../../Components/card/card'
import BigFooter from '../../Components/footers/big/bigfooter'
import Lead from '../../Components/Lead/lead'
import og from '../../assets/images/og-services.jpg'


const Agency = (props) => {
    return (

        <>
            <Lead
                bgc="#6E00FF"
                caption="Branding, UX/UI Design & \n Development"
                subcaption="Strong advertising & media agency background with 15+ years of experience"
                textColor="#FFF"
                shrinked="true"
            />
            <section className={styles.services}>
                <div className={styles.inner}>
                    <div className={`${styles.media_wrapper} lead_image`}>
                        <div className={styles.media_inner}>
                            <img className={styles.agency_landing_image} src={og} alt="imgleft"/>
                        </div>
                    </div>
                    <h1 className={styles.services_header}>Services</h1>
                    <div className={styles.services_list_wrapper}>

                        <div className={styles.services_box}>
                            <div className={styles.services_box_inner}>
                                <h5 className={styles.service_title}>Strategy</h5>
                                <ul className={styles.service_list}>
                                    <li className={styles.service_list_element}><span>– </span>Brand identity</li>
                                    <li className={styles.service_list_element}><span>– </span>Digital strategy</li>
                                    <li className={styles.service_list_element}><span>– </span>Creative concept</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.services_box}>
                            <div className={styles.services_box_inner}>
                                <h5 className={styles.service_title}>Strategy</h5>
                                <ul className={styles.service_list}>
                                    <li className={styles.service_list_element}><span>– </span>Research, IA design</li>
                                    <li className={styles.service_list_element}><span>– </span>UX/UI design</li>
                                    <li className={styles.service_list_element}><span>– </span>Prototyping</li>
                                    <li className={styles.service_list_element}><span>– </span>Visual design</li>
                                    <li className={styles.service_list_element}><span>– </span>Interaction design</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.services_box}>
                            <div className={styles.services_box_inner}>
                                <h5 className={styles.service_title}>Strategy</h5>
                                <ul className={styles.service_list}>
                                    <li className={styles.service_list_element}><span>– </span>Websites</li>
                                    <li className={styles.service_list_element}><span>– </span>Custom web applications</li>
                                    <li className={styles.service_list_element}><span>– </span>Mobile applications</li>
                                    <li className={styles.service_list_element}><span>– </span>Games & digital solutions</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.services_box}>
                            <div className={styles.services_box_inner}>
                                <h5 className={styles.service_title}>Strategy</h5>
                                <ul className={styles.service_list}>
                                    <li className={styles.service_list_element}><span>– </span>Animation</li>
                                    <li className={styles.service_list_element}><span>– </span>Film making</li>
                                    <li className={styles.service_list_element}><span>– </span>TVC</li>
                                    <li className={styles.service_list_element}><span>– </span>Branded & social content</li>
                                    <li className={styles.service_list_element}><span>– </span>Sound & photo studio</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <Button customClass={styles.button} text="Get in touch" />
                </div>
            </section>

            <section className={styles.team}>
                <div className={styles.whymelkweg}>
                    <h6 className={styles.why_header}>Why Melkweg?</h6>
                </div>
                <div className={styles.inner}>
                    <h1 className={styles.team_header}>Our team</h1>
                    <div className={styles.team_leaders_wrapper}>
                        <Card size="big" title="Gergő Gazsy" description="Managing Director" pic={leadImage}/>
                        <Card size="big" title="Zoltán Beke" description="Creative Director, Founder" pic={leadImage}/>
                        <Card size="big" title="László Gergely" description="Technical Director" pic={leadImage}/>
                    </div>
                    <div className={styles.team_members_wrapper}>
                        <Card size="small" title="Robert Erdélyi" description="Business Director" pic={leadImage}/>
                        <Card size="small" title="Robert Erdélyi" description="Business Director / Content specialist" pic={leadImage}/>
                        <Card size="small" title="László Schelhammer" description="Account / Project manager" pic={leadImage}/>
                        <Card size="small" title="Ágnes Fehér" description="Junior Project manager" pic={leadImage}/>
                        <Card size="small" title="Gábor Vitáris" description="Head of Product Design" pic={leadImage}/>
                        <Card size="small" title="Dorottya Porkoláb" description="Details" pic={leadImage}/>
                        <Card size="small" title="Your Name" description="Details" pic={leadImage}/>
                        <Card size="small" title="Dani Pucz" description="Details" pic={leadImage}/>
                        <Card size="small" title="André Gábor" description="Details" pic={leadImage}/>
                        <Card size="small" title="Gábor Szabó" description="Details" pic={leadImage}/>
                        <Card size="small" title="Your Name" description="Details" pic={leadImage}/>
                        <Card size="small" title="Csorba Mátyás" description="Details" pic={leadImage}/>
                        <Card size="small" title="Péter Pataki" description="Details" pic={leadImage}/>
                        <Card size="small" title="Zoltán Nádai" description="Details" pic={leadImage}/>
                        <Card size="small" title="András Fürstner" description="Details" pic={leadImage}/>
                        <Card size="small" title="Firstname Lastname" description="Details" pic={leadImage}/>
                        <Card size="small" title="Firstname Lastname" description="Details" pic={leadImage}/>
                        <Card size="small" title="Firstname Lastname" description="Details" pic={leadImage}/>
                        <Card size="small" title="Firstname Lastname" description="Details" pic={leadImage}/>
                        <Card size="small" title="Firstname Lastname" description="Details" pic={leadImage}/>
                        <Card size="small" title="Firstname Lastname" description="Details" pic={leadImage}/>
                        <Card size="small" title="Firstname Lastname" description="Details" pic={leadImage}/>
                    </div>
                </div>
            </section>

            <section className={styles.story_wrapper}>
                <div className={styles.inner}>
                    <h2 className={styles.story_header}>Story</h2>
                    <p className={styles.story_paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid autem blanditiis commodi ex exercitationem expedita fuga fugiat laboriosam maiores minima molestias, nobis non obcaecati optio praesentium sed sunt tenetur vero voluptate. Consequatur fugiat labore minus repudiandae rerum sit vero? Ab, eius, voluptate? Dolorum facere hic impedit qui totam veniam.</p>
                    <p className={styles.story_paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum, cumque harum illum in incidunt, modi necessitatibus non obcaecati perferendis similique tempora voluptatibus voluptatum. Assumenda aut blanditiis fugit harum ipsam iste nihil odit possimus repellendus.</p>
                </div>
            </section>
            <BigFooter />
        </>

    );
};

export default Agency;