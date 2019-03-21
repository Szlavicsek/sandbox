import React from 'react';
import { Link } from 'react-router-dom'
import styles from './policy.module.scss'
import s1 from '../../assets/images/s1.jpg'

const Policy = () => {
    return (
        <>
            <div className={styles.policy}>
                <div className={styles.inner}>
                    <form action="/" method="post" className={styles.form}>

                    <h1 className={styles.policy_header}>Privacy Policy</h1>

                    <p className={styles.details}>This privacy policy explains you how Melkweg (&quot;we&quot;, &quot;us&quot;) may collect information from you when you use our website.</p>


                    <p className={styles.title}>Information we collect on this website</p>
                    <p className={styles.details}>We collect information about you if you make use of any of the interactive features within our website that rely on a personalised response, or where you ask us to respond to a query you have, or where you comment on a blog. The information we collect is limited to the details we need to provide the specific service you have asked for. We do not collect sensitive information, such as your political or religious beliefs, ethnic background, sexual preference, health or any other sensitive information.</p>

                    <p className={styles.title}>How we use this information</p>
                    <p className={styles.details}>Except where required by law, we only use the personal information you provide to us to deliver the specific information or service you have requested. For example, if you submit an enquiry in relation to a job or career opportunity through this site, we will only use the email address you provide to us to respond to that request. Without your express consent, we will not use your contact details for any other purpose.</p>

                    <p className={styles.title}>How we store your information</p>
                    <p className={styles.details}>We are committed to ensuring your personal information is kept secure and confidential and not kept for longer than is necessary. From time to time we may ask other members of our group, or third party service providers, to help us manage our information technology systems. Some of these systems may be located in countries overseas. We will only transfer your information to a third party service provider or overseas where we are satisfied that adequate levels of protection are in place to protect the integrity and security of any information being processed and compliance with applicable privacy and data protection laws.</p>

                    <p className={styles.title}>How we deploy cookies</p>
                    <p className={styles.details}>Cookies are small packets of information stored by your web browser when you visit certain websites, including our website. Cookies are generally used by websites to improve your user experience by enabling that website to ‘remember’ you, either strictly for the duration of your visit (using a “Session” cookie which is erased when you close your browser) or for repeat visits (using a “Permanent” cookie). We do not use cookies to store any personally identifiable information about you. You can learn more about cookies from . Our site uses the following types of cookies:</p>

                    <p className={styles.title}>– Strictly necessary cookies</p>
                    <p className={styles.details}>These cookies are essential in order to enable you to move around the site and use its features. These are known as “First Party” cookies. Without these cookies, services like enabling appropriate content based on your type of device cannot be provided.</p>
                    <div className={styles.toggle_wrapper}>
                        <input type="checkbox" id="s1"/>
                        <label className={styles.toggle} htmlFor="s1"><span className={styles.toggle_handler}></span></label>
                    </div>


                    <p className={styles.title}>– Performance cookies</p>
                    <p className={styles.details}>These cookies provide information about how visitors use the site so that we can analyse traffic and understand how our visitors use our site. We use cookies issued by a third party, Google Analytics, for this purpose (“Third Party” cookies). Google Analytics uses its own cookies. These cookies don’t collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how the site works. You can find out more about Google Analytics cookies here: . You can avoid the use of Google Analytics relating to your use of our site by downloading and installing the Browser Plugin available here:</p>
                    <div className={styles.toggle_wrapper}>
                        <input type="checkbox" id="s2"/>
                        <label className={styles.toggle} htmlFor="s2"><span className={styles.toggle_handler}></span></label>
                    </div>

                    <p className={styles.title}>– Functionality cookies</p>
                    <p className={styles.details}>These cookies allow our site to remember choices you make (such as filtering our works) and provide enhanced, more personal features. These cookies will also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customise. They may also be used to provide services you have asked for. The information these cookies collect may be anonymised and they cannot track your browsing activity on other websites.</p>
                    <div className={styles.toggle_wrapper}>
                        <input type="checkbox" id="s3"/>
                        <label className={styles.toggle} htmlFor="s3"><span className={styles.toggle_handler}></span></label>
                    </div>

                    <p className={styles.title}>– Social media cookies</p>
                    <p className={styles.details}>These cookies are used when you share information using a social media sharing button or you link your account or engage with our content on or through a social networking site such as Facebook, Twitter or Google+. The social network will record that you have done this. This information may be linked to targeting/advertising activities. By using this website you consent to us deploying cookies as described above. If you do not wish to accept cookies from our site, or would like to stop permanent cookies being stored on your computer in the future you can change the settings in your web browser to decline and/or delete cookies. See the &quot;Help&quot; section on your browser menu for guidance on how to do this. Note that changing cookie settings may affect certain features within this website.</p>
                    <div className={styles.toggle_wrapper}>
                        <input type="checkbox" id="s4"/>
                        <label className={styles.toggle} htmlFor="s4"><span className={styles.toggle_handler}></span></label>
                    </div>


                    <p className={styles.title}>– Information Sharing and Disclosure</p>
                    <p className={styles.details}>We do not sell or rent any personally identifiable information about you to any third party. We may disclose personally identifiable information in response to legal process, for example in response to a court order or a subpoena, or in response to a law enforcement agency’s request, or where we believe it is necessary to investigate, prevent or take action regarding illegal activities, and as otherwise required by law. Our partners and contractors may have access to personally identifiable information to help carry out the services they are performing for us.</p>


                    <p className={styles.title}>Updates</p>
                    <p className={styles.details}>We may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are aware of any changes.</p>
                    <p className={styles.details}>Last update on 01/06/2018.</p>

                    </form>

                </div>
                <div className={styles.latest_works}>
                    <h3 className={styles.latest_works_title}>Latest works</h3>
                    <div className={styles.works_wrapper}>
                        <Link className={styles.work_media_container} to="/works">
                            <img className={styles.work_media} src={s1} alt=""/>
                            <span className={styles.work_title}>NKFIH Redesign</span>
                        </Link>
                        <Link className={styles.work_media_container} to="/works">
                            <img className={styles.work_media} src={s1} alt=""/>
                            <span className={styles.work_title}>NKFIH Redesign</span>
                        </Link>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <div className={styles.link_wrapper}>
                    <Link className={styles.services_link} to="/agency">Check out our services</Link>
                    <Link className={styles.agency_link} to="/agency">or read about our Agency</Link>
                </div>
            </footer>
        </>
    );
};

export default Policy;