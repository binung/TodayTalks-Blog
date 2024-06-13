import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blog from '../components/Blog';
import Newsletter from "../components/Newsletter";

import wpost01 from "../assets/img/blog/weekly_post01.jpg";
import wpost02 from "../assets/img/blog/weekly_post02.jpg";
import wpost03 from "../assets/img/blog/weekly_post03.jpg";
import wpost04 from "../assets/img/blog/weekly_post04.jpg";
import vpost01 from "../assets/img/blog/video_post01.jpg";
import vpost02 from "../assets/img/blog/video_post02.jpg";
import vpost03 from "../assets/img/blog/video_post03.jpg";
import vpost04 from "../assets/img/blog/video_post04.jpg";
import ca01 from "../assets/img/blog/g_categories_img01.png";
import ca02 from "../assets/img/blog/g_categories_img02.png";
import ca03 from "../assets/img/blog/g_categories_img03.png";
import ca04 from "../assets/img/blog/g_categories_img04.png";
import ca05 from "../assets/img/blog/g_categories_img05.png";
import ca06 from "../assets/img/blog/g_categories_img06.png";
import CryptoCurrency from "../components/CryptoCurrency";

const Home = () => {
    const categoryName = "Home";
    return (
        <>


            {/* <!-- spotlight-post-area --> */}
            <section className="spotlight-post-area pt-70 pb-60">
                <div className="spotlight-post-inner-wrap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-70">
                                <div className="spotlight-post-item-wrap">
                                    <div className="section-title-wrap-three mb-30">
                                        <div className="section-title-three">
                                            <h6 className="title">Today’s Spotlight
                                                <span className="section-title-svg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                                        <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                                    </svg>
                                                </span>
                                            </h6>
                                            <div className="section-title-line-three"></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-57">
                                            <div className="spotlight-post big-post">
                                                <div className="spotlight-post-thumb">
                                                    <a href="blog-details.html"><img src={wpost02} alt="" /></a>
                                                </div>
                                                <div className="spotlight-post-content">
                                                    <a href="blog.html" className="post-tag-two">Racing</a>
                                                    <h2 className="post-title bold-underline"><a href="blog-details.html">How To Build A Magazine Layout With CSS Grid Areas</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><i className="flaticon-user"></i>by<a href="author.html">Admin</a></li>
                                                            <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                            <li><i className="flaticon-history"></i>20 Mins</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-43">
                                            <div className="spotlight-post small-post">
                                                <div className="spotlight-post-thumb">
                                                    <a href="blog-details.html"><img src={wpost01} alt="" /></a>
                                                </div>
                                                <div className="spotlight-post-content">
                                                    <a href="blog.html" className="post-tag-two">Action</a>
                                                    <h2 className="post-title"><a href="blog-details.html">Fortnite Ratings are Skyrocketing</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="spotlight-post small-post">
                                                <div className="spotlight-post-thumb">
                                                    <a href="blog-details.html"><img src={wpost03} alt="" /></a>
                                                </div>
                                                <div className="spotlight-post-content">
                                                    <a href="blog.html" className="post-tag-two">Fighter</a>
                                                    <h2 className="post-title"><a href="blog-details.html">Everything You Need To Know About</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="spotlight-post small-post">
                                                <div className="spotlight-post-thumb">
                                                    <a href="blog-details.html"><img src={wpost04} alt="" /></a>
                                                </div>
                                                <div className="spotlight-post-content">
                                                    <a href="blog.html" className="post-tag-two">Gaming</a>
                                                    <h2 className="post-title"><a href="blog-details.html">We Can’t Wait to Try
                                                        This Gaming Area</a></h2>
                                                    <div className="blog-post-meta">
                                                        <ul className="list-wrap">
                                                            <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="popular-post-item-wrap">
                                    <div className="section-title-wrap-three mb-30">
                                        <div className="section-title-three">
                                            <h6 className="title">Our Popular News
                                                <span className="section-title-svg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                                        <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                                    </svg>
                                                </span>
                                            </h6>
                                            <div className="section-title-line-three"></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="ta-overlay-post-two">
                                                <div className="overlay-post-thumb-two">
                                                    <a href="blog-details.html"><img src={ca01} alt="" /></a>
                                                </div>
                                                <div className="overlay-post-content-two">
                                                    <a href="blog.html" className="post-tag post-tag-three">Racing</a>
                                                    <h2 className="post-title"><a href="blog-details.html">Racing Games Browned Butte roadert Cookies Daily Breakfast</a></h2>
                                                    <div className="blog-post-meta white-blog-meta">
                                                        <ul className="list-wrap">
                                                            <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                            <li><i className="flaticon-history"></i>20 Mins</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ta-overlay-post-two">
                                                <div className="overlay-post-thumb-two">
                                                    <a href="blog-details.html"><img src={ca01} alt="" /></a>
                                                </div>
                                                <div className="overlay-post-content-two">
                                                    <a href="blog.html" className="post-tag post-tag-three">Action</a>
                                                    <h2 className="post-title"><a href="blog-details.html">How To Host A WordPress Site On Amazon Lightsail</a></h2>
                                                    <div className="blog-post-meta white-blog-meta">
                                                        <ul className="list-wrap">
                                                            <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                            <li><i className="flaticon-history"></i>20 Mins</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="ta-overlay-post-two">
                                                <div className="overlay-post-thumb-two">
                                                    <a href="blog-details.html"><img src={ca02} alt="" /></a>
                                                </div>
                                                <div className="overlay-post-content-two">
                                                    <a href="blog.html" className="post-tag post-tag-three">Fighter</a>
                                                    <h2 className="post-title"><a href="blog-details.html">The Magic Of February 2024 Wallpapers</a></h2>
                                                    <div className="blog-post-meta white-blog-meta">
                                                        <ul className="list-wrap">
                                                            <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="ta-overlay-post-two">
                                                <div className="overlay-post-thumb-two">
                                                    <a href="blog-details.html"><img src={ca03} alt="" /></a>
                                                </div>
                                                <div className="overlay-post-content-two">
                                                    <a href="blog.html" className="post-tag post-tag-three">Animation</a>
                                                    <h2 className="post-title"><a href="blog-details.html">Customization And Animation</a></h2>
                                                    <div className="blog-post-meta white-blog-meta">
                                                        <ul className="list-wrap">
                                                            <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="ta-overlay-post-two">
                                                <div className="overlay-post-thumb-two">
                                                    <a href="blog-details.html"><img src={ca04} alt="" /></a>
                                                </div>
                                                <div className="overlay-post-content-two">
                                                    <a href="blog.html" className="post-tag post-tag-three">Story</a>
                                                    <h2 className="post-title"><a href="blog-details.html">Better ROI For Your Digital Products</a></h2>
                                                    <div className="blog-post-meta white-blog-meta">
                                                        <ul className="list-wrap">
                                                            <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-30">
                                <CryptoCurrency/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video-post-area video-post-bg" data-background="assets/img/bg/video_post_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-wrap-three mb-40">
                                <div className="section-title-three black-title">
                                    <h6 className="title">Trending Gaming News
                                        <span className="section-title-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                                <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                            </svg>
                                        </span>
                                    </h6>
                                    <div className="section-title-line-three"></div>
                                </div>
                                <div className="view-all-btn view-all-btn-two">
                                    <a href="blog.html" className="link-btn">View All
                                        <span className="svg-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="video-post-item big-post">
                                <div className="video-post-thumb">
                                    <a href="blog-details.html"><img src={vpost04} alt="" /></a>
                                    <a href="https://www.youtube.com/watch?v=1iIZeIy7TqM" className="play-btn popup-video"><FontAwesomeIcon icon="fa-solid fa-play" /></a>
                                </div>
                                <div className="video-post-content">
                                    <a href="blog.html" className="post-tag post-tag-three">Fighter</a>
                                    <h2 className="post-title bold-underline"><a href="blog-details.html">Exciting New Browned Chocolate Gaming Cookies Daily Breakfast</a></h2>
                                    <div className="blog-post-meta white-blog-meta">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-user"></i>by<a href="author.html">Admin</a></li>
                                            <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="video-small-post-wrap">
                                <div className="video-post-item small-post">
                                    <div className="video-post-thumb">
                                        <a href="blog-details.html"><img src={vpost02} alt="" /></a>
                                        <a href="https://www.youtube.com/watch?v=1iIZeIy7TqM" className="play-btn popup-video"><FontAwesomeIcon icon="fa-solid fa-play" /></a>
                                    </div>
                                    <div className="video-post-content">
                                        <a href="blog.html" className="post-tag post-tag-three">Animation</a>
                                        <h2 className="post-title"><a href="blog-details.html">A Guide To Getting Data Visualization Right</a></h2>
                                        <div className="blog-post-meta white-blog-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-user"></i>by<a href="author.html">Admin</a></li>
                                                <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="video-post-item small-post">
                                    <div className="video-post-thumb">
                                        <a href="blog-details.html"><img src={vpost03} alt="" /></a>
                                        <a href="https://www.youtube.com/watch?v=1iIZeIy7TqM" className="play-btn popup-video"><FontAwesomeIcon icon="fa-solid fa-play" /></a>
                                    </div>
                                    <div className="video-post-content">
                                        <a href="blog.html" className="post-tag post-tag-three">Action</a>
                                        <h2 className="post-title"><a href="blog-details.html">Fluid Typography: Predicting A Problem With Your User’s Zoom-In</a></h2>
                                        <div className="blog-post-meta white-blog-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-user"></i>by<a href="author.html">Admin</a></li>
                                                <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="video-post-item small-post">
                                    <div className="video-post-thumb">
                                        <a href="blog-details.html"><img src={vpost01} alt="" /></a>
                                        <a href="https://www.youtube.com/watch?v=1iIZeIy7TqM" className="play-btn popup-video"><FontAwesomeIcon icon="fa-solid fa-play" /></a>
                                    </div>
                                    <div className="video-post-content">
                                        <a href="blog.html" className="post-tag post-tag-three">Racing</a>
                                        <h2 className="post-title"><a href="blog-details.html">Deploying CSS Logical Properties On Web Apps</a></h2>
                                        <div className="blog-post-meta white-blog-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-user"></i>by<a href="author.html">Admin</a></li>
                                                <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="weekly-post-area pt-80 pb-80">
                <div className="container">
                    <div className="weekly-post-inner-wrap">
                        <div className="row justify-content-center">
                            <div className="col-70">
                                <div className="section-title-wrap-three mb-40">
                                    <div className="section-title-three">
                                        <h6 className="title">Weekly Best News
                                            <span className="section-title-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                                    <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                                </svg>
                                            </span>
                                        </h6>
                                        <div className="section-title-line-three"></div>
                                    </div>
                                </div>
                                <div className="weekly-post-item-wrap">
                                    <div className="weekly-post-item">
                                        <div className="weekly-post-thumb">
                                            <a href="blog-details.html"><img src={wpost01} alt="" /></a>
                                        </div>
                                        <div className="weekly-post-content">
                                            <a href="blog.html" className="post-tag">Fighter</a>
                                            <h2 className="post-title"><a href="blog-details.html">Taking The Stress Out Of Design System Management</a></h2>
                                            <div className="blog-post-meta">
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                    <li><i className="flaticon-history"></i>20 Mins</li>
                                                </ul>
                                            </div>
                                            <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                            <div className="view-all-btn">
                                                <a href="blog-details.html" className="link-btn">Read More
                                                    <span className="svg-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weekly-post-item">
                                        <div className="weekly-post-thumb">
                                            <a href="blog-details.html"><img src={wpost02} alt="" /></a>
                                        </div>
                                        <div className="weekly-post-content">
                                            <a href="blog.html" className="post-tag">Racing</a>
                                            <h2 className="post-title"><a href="blog-details.html">Boosting Productivity For Designers With Efficient Tools</a></h2>
                                            <div className="blog-post-meta">
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                    <li><i className="flaticon-history"></i>20 Mins</li>
                                                </ul>
                                            </div>
                                            <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                            <div className="view-all-btn">
                                                <a href="blog-details.html" className="link-btn">Read More
                                                    <span className="svg-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weekly-post-item">
                                        <div className="weekly-post-thumb">
                                            <a href="blog-details.html"><img src={wpost03} alt="" /></a>
                                        </div>
                                        <div className="weekly-post-content">
                                            <a href="blog.html" className="post-tag">Action</a>
                                            <h2 className="post-title"><a href="blog-details.html">How To Prioritize User Security When Collecting Offline Data</a></h2>
                                            <div className="blog-post-meta">
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                    <li><i className="flaticon-history"></i>20 Mins</li>
                                                </ul>
                                            </div>
                                            <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                            <div className="view-all-btn">
                                                <a href="blog-details.html" className="link-btn">Read More
                                                    <span className="svg-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weekly-post-item">
                                        <div className="weekly-post-thumb">
                                            <a href="blog-details.html"><img src={wpost04} alt="" /></a>
                                        </div>
                                        <div className="weekly-post-content">
                                            <a href="blog.html" className="post-tag">Animation</a>
                                            <h2 className="post-title"><a href="blog-details.html">The Anatomy Of Themed Design System Components</a></h2>
                                            <div className="blog-post-meta">
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-calendar"></i>27 August, 2024</li>
                                                    <li><i className="flaticon-history"></i>20 Mins</li>
                                                </ul>
                                            </div>
                                            <p>Browned butter and brown sugar caramelly oodness crispy edgesthick and soft centers and melty little puddles of chocolate y first favorite.</p>
                                            <div className="view-all-btn">
                                                <a href="blog-details.html" className="link-btn">Read More
                                                    <span className="svg-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                            <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-30">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />

        </>
    );
};

export default Home;
