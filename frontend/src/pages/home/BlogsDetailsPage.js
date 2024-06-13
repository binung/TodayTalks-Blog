import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import BlogDetailComponent from "../../components/BlogDetailComponent";
import RelatedPostsComponent from "../../components/RelatedPostsComponent";

const BlogsDetails = () => {
    return (
        <>
            {/* <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home<span> <FontAwesomeIcon icon="fa-solid fa-angles-right" /></span></Link></li>
                                        <li className="breadcrumb-item" aria-current="page"><Link to="/blog">Blogs <span> <FontAwesomeIcon icon="fa-solid fa-angles-right" /></span></Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Smashing Podcast Episode 58 With Debbie What Is CX Design?</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <BlogDetailComponent />

            <RelatedPostsComponent />
        </>
    );
};

export default BlogsDetails;
