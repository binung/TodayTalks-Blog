import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Blog from '../components/Blog';
import Newsletter from "../components/Newsletter";
import LocationIcon from "../assets/img/icon/contact_icon01.svg";
import MailIcon from "../assets/img/icon/contact_icon02.svg";
import PhoneIcon from "../assets/img/icon/contact_icon03.svg";
import ContactImage from "../assets/img/images/contact_img.jpg";

const Contact = () => {
    // const categoryName = "Contact";
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home <span> <FontAwesomeIcon icon="fa-solid fa-angles-right" /></span></a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact With Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="contact-area pt-80 pb-50">
                <div className="container">
                    <div className="contact-info-wrap">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-6">
                                <div className="contact-info-item">
                                    <div className="icon">
                                        <img src={LocationIcon} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Location</h5>
                                        <p>2118 Thornridge Cir. Syracuse</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="contact-info-item">
                                    <div className="icon">
                                        <img src={MailIcon} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="title">E-mail</h5>
                                        <p>Info@ghoradimgmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="contact-info-item">
                                    <div className="icon">
                                        <img src={PhoneIcon} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Phone</h5>
                                        <p>+123 98598 000, +123 8855 2222</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="contact-img">
                                <img src={ContactImage} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <h4 className="title">Drop Us a Message</h4>
                                <p>Have a question? Need help? Don't hesitate, drop us a line</p>
                                <form id="contact-form" action="https://themegenix.net/html/zaira/assets/mail.php" method="POST">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <input type="text" name="name" placeholder="Name*"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <input type="email" name="email" placeholder="E-mail*"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-grp">
                                        <input type="number" name="phone" placeholder="Phone*"/>
                                    </div>
                                    <div className="form-grp">
                                        <textarea name="message" placeholder="Message*"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-two">Submit Now</button>
                                </form>
                                <p className="ajax-response mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
            
        </>
    );
};

export default Contact;
