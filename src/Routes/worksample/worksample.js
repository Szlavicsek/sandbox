import React from 'react';
import styles from './worksample.module.scss'
import img from '../../assets/images/pexels-photo-39811.jpeg'
import Showcase from '../../Components/footers/with_showcase/showcase'
import Lead from '../../Components/Lead/lead'
import s5 from '../../assets/images/s5.jpg'


const Worksample = () => {
    return (
        <>
            <Lead
                bgi={s5}
                caption="ELMŰ \n Redesign"
                subcaption="UX/UI Redesign"
                textColor="#FFF"
                worksample
                hasButtom
            />
            <section className={styles.project_summary_section}>
                <div className={styles.inner}>
                    <div className={styles.project_description}>
                        <div className={styles.description}>
                            <h2 className={styles.description_title}>Redesigning one of Hungary's biggest electricity and gas supplier website with its nearly 2 million user base was an outstanding project.</h2>
                            <p className={styles.description_paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi consequatur cum ea eius esse nesciunt odio placeat quis repudiandae! Amet dicta eius esse laborum odit possimus, qui ullam voluptas. Alias illo laboriosam modi quis recusandae. Aperiam aspernatur ipsum maxime minima minus molestias mollitia omnis provident voluptatibus voluptatum! Debitis exercitationem hic magni modi nisi provident quae sint. Ab cumque, doloribus inventore odit quam quasi quod tempora voluptatibus. Ad, alias aspernatur dicta eligendi et hic id illo itaque iure minus molestias nam nesciunt nihil nisi non odit placeat praesentium quasi qui quia quo rem repellat repellendus rerum sed totam unde ut.</p>
                        </div>
                        <div className={styles.project_data}>
                            <div className={styles.data_snippet}>
                                <h2 className={styles.snippet_title}>Client</h2>
                                <p className={styles.snippet_description}>Elmű-Émász part of Innogy</p>
                            </div>
                            <div className={styles.data_snippet}>
                                <h2 className={styles.snippet_title}>Industry</h2>
                                <p className={styles.snippet_description}>Energy Sector</p>
                            </div>
                            <div className={styles.data_snippet}>
                                <h2 className={styles.snippet_title}>Client</h2>
                                <p className={styles.snippet_description}>Elmű-Émász part of Innogy</p>
                            </div>
                            <div className={styles.data_snippet}>
                                <h2 className={styles.snippet_title}>Year</h2>
                                <p className={styles.snippet_description}>2017 - 2018</p>
                            </div>
                        </div>
                    </div>
                    <a className={styles.project_website_link} href="#">Visit website</a>
                </div>
            </section>

            <section className={styles.stakeholder_section}>
                <div className={styles.inner}>
                    <div className={styles.before_after_wrapper}>
                        <div className={styles.before_after_inner}>
                            <div className={styles.before_after_media}></div>
                        </div>
                    </div>

                    <div className={styles.purple_descriptions_wrapper}>

                        <div className={styles.purple_description}>
                            <div className={styles.purple_description_inner}>
                                <h3 className={styles.stakeholder_title}>Stakeholder interviews</h3>
                                <p className={styles.stakeholder_description}>On one hand the aim of the redesign was to adapt to the global brand appearance of the Innogy family, while on the other hand to create a modern, responsive environment. By melting together every background system into one.</p>
                            </div>
                            <div className={styles.stakeholder_img_container}>
                                <img className={styles.stakeholder_img} src={img} alt=""/>
                            </div>
                        </div>

                        <div className={styles.purple_description}>
                            <div className={styles.stakeholder_img_container}>
                                <img className={styles.stakeholder_img} src={img} alt=""/>
                            </div>
                            <div className={styles.purple_description_inner}>
                                <h3 className={styles.stakeholder_title}>Stakeholder interviews</h3>
                                <p className={styles.stakeholder_description}>On one hand the aim of the redesign was to adapt to the global brand appearance of the Innogy family, while on the other hand to create a modern, responsive environment. By melting together every background system into one.</p>
                            </div>
                        </div>

                        <div className={styles.purple_description}>
                            <div className={styles.purple_description_inner}>
                                <h3 className={styles.stakeholder_title}>Stakeholder interviews</h3>
                                <p className={styles.stakeholder_description}>On one hand the aim of the redesign was to adapt to the global brand appearance of the Innogy family, while on the other hand to create a modern, responsive environment. By melting together every background system into one.</p>
                            </div>
                            <div className={styles.stakeholder_img_container}>
                                <img className={styles.stakeholder_img} src={img} alt=""/>
                            </div>
                        </div>

                        <div className={styles.purple_description}>
                            <div className={styles.stakeholder_img_container}>
                                <img className={styles.stakeholder_img} src={img} alt=""/>
                            </div>
                            <div className={styles.purple_description_inner}>
                                <h3 className={styles.stakeholder_title}>Stakeholder interviews</h3>
                                <p className={styles.stakeholder_description}>On one hand the aim of the redesign was to adapt to the global brand appearance of the Innogy family, while on the other hand to create a modern, responsive environment. By melting together every background system into one.</p>
                            </div>
                        </div>

                        <div className={styles.purple_description}>
                            <div className={styles.purple_description_inner}>
                                <h3 className={styles.stakeholder_title}>Stakeholder interviews</h3>
                                <p className={styles.stakeholder_description}>On one hand the aim of the redesign was to adapt to the global brand appearance of the Innogy family, while on the other hand to create a modern, responsive environment. By melting together every background system into one.</p>
                            </div>
                            <div className={styles.stakeholder_img_container}>
                                <img className={styles.stakeholder_img} src={img} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className={styles.more_interviews}>
                <div className={styles.inner}>
                    <div className={styles.more_descriptions}>
                        <div className={styles.purple_description}>
                            <div className={styles.stakeholder_img_container}>
                                <img className={styles.stakeholder_img} src={img} alt=""/>
                            </div>
                            <div className={styles.purple_description_inner}>
                                <h3 className={styles.stakeholder_title}>Stakeholder interviews</h3>
                                <p className={styles.stakeholder_description}>On one hand the aim of the redesign was to adapt to the global brand appearance of the Innogy family, while on the other hand to create a modern, responsive environment. By melting together every background system into one.</p>
                            </div>
                        </div>

                        <div className={styles.purple_description}>
                            <div className={styles.purple_description_inner}>
                                <h3 className={styles.stakeholder_title}>Stakeholder interviews</h3>
                                <p className={styles.stakeholder_description}>On one hand the aim of the redesign was to adapt to the global brand appearance of the Innogy family, while on the other hand to create a modern, responsive environment. By melting together every background system into one.</p>
                            </div>
                            <div className={styles.stakeholder_img_container}>
                                <img className={styles.stakeholder_img} src={img} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.worksample_bottom}>

                        <div className={styles.bottom_image_wrapper}>
                            <div className={styles.bottom_image_wrapper_inner}>
                                <img className={styles.bottom_image} src={img} alt="workImage"/>
                            </div>
                        </div>

                        <div className={styles.social_row}>
                            <h2 className={styles.question}>Like it? Share it!</h2>
                            <div className={styles.social_icons}>
                                <a className={styles.icon_facebook} href="https://facebook.com" title="facebook"></a>
                                <a className={styles.icon_linkedin} href="https://linkedin.com" title="linkedin"></a>
                                <a className={styles.icon_twitter} href="https://twitter.com" title="twitter"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Showcase />
        </>
    );
};

export default Worksample;
