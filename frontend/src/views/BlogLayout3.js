import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Blog from '../components/Blog';
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";

import post01 from "../assets/img/blog/1.jpg";
import post02 from "../assets/img/blog/2.jpg";
import post03 from "../assets/img/blog/3.jpg";
import post04 from "../assets/img/blog/4.jpg";
import post05 from "../assets/img/blog/5.jpg";
import post06 from "../assets/img/blog/6.jpg";
import post07 from "../assets/img/blog/7.jpg";

const BlogLayout3 = () => {
    // const categoryName = "BlogLayout3";
    return (
        <>
            <Breadcrumb />

            {/* <!-- blog-area --> */}
            <section className="blog-area pt-60 pb-60">
                <div className="container">
                    <div className="author-inner-wrap">
                        <div className="row justify-content-center">
                            <div className="col-70">
                                <div className="weekly-post-item-wrap-three">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="weekly-post-three">
                                                <div className="weekly-post-thumb">
                                                    <a href="blog-details.html"><img src={post01} alt="" /></a>
                                                    <a href="blog.html" className="post-tag">Politics</a>
                                                </div>
                                                <div className="weekly-post-content">
                                                    <h2 className="post-title"><a href="blog-details.html">Fluid Sizing Instead Of Multiple Media Queries?</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                            <li><FontAwesomeIcon icon="fa-regular fa-clock" />20 Mins</li>
                                                        </ul>
                                                    </div>
                                                    <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="weekly-post-three">
                                                <div className="weekly-post-thumb">
                                                    <a href="blog-details.html"><img src={post02} alt="" /></a>
                                                    <a href="blog.html" className="post-tag">Technology</a>
                                                </div>
                                                <div className="weekly-post-content">
                                                    <h2 className="post-title"><a href="blog-details.html">Overcoming Imposter Syndrome By Developing Your Own Guiding</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                            <li><FontAwesomeIcon icon="fa-regular fa-clock" />20 Mins</li>
                                                        </ul>
                                                    </div>
                                                    <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="weekly-post-three">
                                                <div className="weekly-post-thumb">
                                                    <a href="blog-details.html"><img src={post03} alt="" /></a>
                                                    <a href="blog.html" className="post-tag">Sports</a>
                                                </div>
                                                <div className="weekly-post-content">
                                                    <h2 className="post-title"><a href="blog-details.html">A New Pattern For The Jamstack: Segmented Rendering</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                            <li><FontAwesomeIcon icon="fa-regular fa-clock" />20 Mins</li>
                                                        </ul>
                                                    </div>
                                                    <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="weekly-post-three">
                                                <div className="weekly-post-thumb">
                                                    <a href="blog-details.html"><img src={post04} alt="" /></a>
                                                    <a href="blog.html" className="post-tag">Fashion</a>
                                                </div>
                                                <div className="weekly-post-content">
                                                    <h2 className="post-title"><a href="blog-details.html">Resolving Conflicts Between Designers And Engineers</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                            <li><FontAwesomeIcon icon="fa-regular fa-clock" />20 Mins</li>
                                                        </ul>
                                                    </div>
                                                    <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="weekly-post-three">
                                                <div className="weekly-post-thumb">
                                                    <a href="blog-details.html"><img src={post05} alt="" /></a>
                                                    <a href="blog.html" className="post-tag">fIGHTER</a>
                                                </div>
                                                <div className="weekly-post-content">
                                                    <h2 className="post-title"><a href="blog-details.html">The Growing Need For Effective Password Management</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                            <li><FontAwesomeIcon icon="fa-regular fa-clock" />20 Mins</li>
                                                        </ul>
                                                    </div>
                                                    <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="weekly-post-three">
                                                <div className="weekly-post-thumb">
                                                    <a href="blog-details.html"><img src={post06} alt="" /></a>
                                                    <a href="blog.html" className="post-tag">Appitizer</a>
                                                </div>
                                                <div className="weekly-post-content">
                                                    <h2 className="post-title"><a href="blog-details.html">Smashing Podcast Episode 58 With Debbie What Is CX Design?</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                            <li><FontAwesomeIcon icon="fa-regular fa-clock" />20 Mins</li>
                                                        </ul>
                                                    </div>
                                                    <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="weekly-post-three">
                                                <div className="weekly-post-thumb">
                                                    <a href="blog-details.html"><img src={post07} alt="" /></a>
                                                    <a href="blog.html" className="post-tag">Technology</a>
                                                </div>
                                                <div className="weekly-post-content">
                                                    <h2 className="post-title"><a href="blog-details.html">Fine-Grained Access Handling And Data Management With Row-Level Security</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                            <li><FontAwesomeIcon icon="fa-regular fa-clock" />20 Mins</li>
                                                        </ul>
                                                    </div>
                                                    <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="weekly-post-three">
                                                <div className="weekly-post-thumb">
                                                    <a href="blog-details.html"><img src={post06} alt="" /></a>
                                                    <a href="blog.html" className="post-tag">Travel</a>
                                                </div>
                                                <div className="weekly-post-content">
                                                    <h2 className="post-title"><a href="blog-details.html">A Comprehensive Checklist For Running Design Workshops</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                            <li><FontAwesomeIcon icon="fa-regular fa-clock" />20 Mins</li>
                                                        </ul>
                                                    </div>
                                                    <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="weekly-post-three">
                                                <div className="weekly-post-thumb">
                                                    <a href="blog-details.html"><img src={post07} alt="" /></a>
                                                    <a href="blog.html" className="post-tag">sPORTS</a>
                                                </div>
                                                <div className="weekly-post-content">
                                                    <h2 className="post-title"><a href="blog-details.html">How To Design An Effective Area User Onboarding Flow</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                            <li><FontAwesomeIcon icon="fa-regular fa-clock" />20 Mins</li>
                                                        </ul>
                                                    </div>
                                                    <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="weekly-post-three">
                                                <div className="weekly-post-thumb">
                                                    <a href="blog-details.html"><img src={post03} alt="" /></a>
                                                    <a href="blog.html" className="post-tag">cRYPTO</a>
                                                </div>
                                                <div className="weekly-post-content">
                                                    <h2 className="post-title"><a href="blog-details.html">How To Protect Your App With A Model Based On JSONDiff</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><FontAwesomeIcon icon="fa-regular fa-calendar" />27 August, 2024</li>
                                                            <li><FontAwesomeIcon icon="fa-regular fa-clock" />20 Mins</li>
                                                        </ul>
                                                    </div>
                                                    <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination-wrap mt-30">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination list-wrap">
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-30"></div>
                        </div>
                    </div>
                </div>
            </section>
            <Newsletter/>
        </>
    );
};

export default BlogLayout3;
