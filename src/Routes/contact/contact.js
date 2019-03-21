import React, { Component } from 'react';
import styles from './contact.module.scss'
import Button from '../../Components/button/button'
import helloimage from "../../assets/images/helloimage.png";
import office from "../../assets/images/og-services.jpg";
import workPic from "../../assets/images/pexels-photo-39811.jpeg";
import Showcase from '../../Components/footers/with_showcase/showcase'
import Lead from '../../Components/Lead/lead'
import s4 from '../../assets/images/s4.jpg'



class Contact extends Component {

    onFocusHandler(e) {
        console.log('focused')
        if (!e.target.previousSibling.classList.contains(styles.focused)) {
            e.target.previousSibling.classList.add(styles.focused);
            e.target.parentElement.classList.add(styles.input_active)
        }
    }

    onBlurHandler(e) {
        console.log('blurred')
        if (e.target.value.trim() === "") {
            e.target.previousSibling.classList.remove(styles.focused)
        }
        e.target.parentElement.classList.remove(styles.input_active)
    }

    selectHandler(e) {
        if (!e.target.parentElement.parentElement.classList.contains(styles.focused)) {
            e.target.parentElement.parentElement.classList.add(styles.focused)
        }
    }

    render() {
        return (

            <>
                <Lead
                    bgc="#FFF"
                    caption="Every relationship starts with a simple hello 👋"
                    subcaption="It might just be the start of something memorable"
                    textColor="#000"
                    shrinked="true"
                />

                <section className={styles.contact_data}>
                    <div className={styles.inner}>
                        <div className={styles.media_wrapper}>
                            <div className={styles.media_wrapper_inner}>
                                <img className={styles.media_image} src={office} alt=""/>
                            </div>
                        </div>
                        <div className={styles.contact_list_wrapper}>

                            <div className={styles.contact_box}>
                                <div className={`${styles.contact_box_inner} `}>
                                    <h5 className={styles.contact_title}>Visit us</h5>
                                    <ul className={styles.contact_list}>
                                        <li className={styles.contact_list_element}>Free parking on site</li>
                                        <li className={styles.contact_list_element}><a href="#">1036 Pacsirtamező utca 41-43.
                                            Budapest, Hungary</a></li>
                                        <li className={styles.contact_list_element}>+36 30 242 3588</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.contact_box}>
                                <div className={`${styles.contact_box_inner} `}>
                                    <h5 className={styles.contact_title}>Write us</h5>
                                    <ul className={styles.contact_list}>
                                        <li className={styles.contact_list_element}>We reply usually within 24 hours</li>
                                        <li className={styles.contact_list_element}><a href="#">hello@melkweg.hu</a></li>
                                        <li className={styles.contact_list_element}><a href="#">jobs@melkweg.hu</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.contact_box}>
                                <div className={`${styles.contact_box_inner} `}>
                                    <h5 className={styles.contact_title}>Follow us</h5>
                                    <ul className={styles.contact_list}>
                                        <li className={styles.contact_list_element}><a href="#">Behance</a></li>
                                        <li className={styles.contact_list_element}><a href="#">Dribbble</a></li>
                                        <li className={styles.contact_list_element}><a href="#">Facebook</a></li>
                                        <li className={styles.contact_list_element}><a href="#">Instagram</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className={styles.form_section}>
                    <div className={styles.form_inner}>
                        <h1 className={styles.form_header}>Say hi</h1>
                        <div className={styles.form_container}>
                            <form action="/" method="post" id={styles.form}>

                                <div className={styles.input_wrapper}>
                                    <label className={styles.label} htmlFor={styles.name}>Your name *</label>
                                    <input onFocus={(e)=>this.onFocusHandler(e)} onBlur={(e)=>this.onBlurHandler(e)} className={styles.input_field} id={styles.name} type="text" required autoComplete="off"/>
                                </div>

                                <div className={styles.input_wrapper}>
                                    <label className={styles.label} htmlFor={styles.email}>Your email *</label>
                                    <input onFocus={(e)=>this.onFocusHandler(e)} onBlur={(e)=>this.onBlurHandler(e)} className={styles.input_field} id={styles.email} type="text" required autoComplete="off"/>
                                </div>

                                <div className={styles.input_wrapper}>
                                    <span className={styles.label}>What are you looking for? *</span>
                                    <select className={styles.selectbox} onFocus={(e)=>this.onFocusHandler(e)} onBlur={(e)=>this.onBlurHandler(e)} required>
                                        <option onClick={(e)=>this.selectHandler(e)} value="value">Nice website pls</option>
                                        <option onClick={(e)=>this.selectHandler(e)} value="value">option 2</option>
                                        <option onClick={(e)=>this.selectHandler(e)} value="value">option 3</option>
                                        <option onClick={(e)=>this.selectHandler(e)} value="value">option 4</option>
                                    </select>
                                </div>

                                <div className={styles.input_wrapper}>
                                    <label className={styles.label} htmlFor={styles.message}>Your message *</label>
                                    <textarea onFocus={(e)=>this.onFocusHandler(e)} onBlur={(e)=>this.onBlurHandler(e)} className={styles.input_field} id={styles.message} type="textarea" rows="10" cols="200" required/>
                                </div>

                                <div className={styles.accept_policy}>
                                    <input id={styles.acceptPolicy} type="checkbox" required/>
                                    <label htmlFor={styles.acceptPolicy}>I accept Melkweg's Privacy Policy</label>
                                </div>

                                <Button customClass={styles.submitButton} text="Send Message" type="submit"/>
                                <Button customClass={styles.cancelButton} text="Cancel"/>

                            </form>
                        </div>
                    </div>
                </section>

                <section className={styles.hello_image_container}>
                    <img className={styles.hello_image} src={helloimage} alt="helloimage"/>
                </section>

                <Showcase/>
            </>

        );
    }
};

export default Contact;