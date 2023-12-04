import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
        {/* Footer Start */}
            <div
            className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
            data-wow-delay="0.1s"
            >
            <div className="container py-5">
                <div className="row g-5">
                <div className="col-lg-6 col-md-6">
                    <h4 className="text-white mb-3">Story App</h4>
                    <Link className="btn btn-link" to="/">
                    Home
                    </Link>
                    <Link className="btn btn-link" to="/themes">
                    Themes
                    </Link>
                    <Link className="btn btn-link" to="/story">
                    Stories
                    </Link>
                    <Link className="btn btn-link" to="/register">
                    Register
                    </Link>
                </div>
                <div className="col-lg-6 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2">
                    <i className="fa fa-map-marker-alt me-3" />
                    123 Street example,Canada
                    </p>
                    <p className="mb-2">
                    <i className="fa fa-phone-alt me-3" />
                    00343943993
                    </p>
                    <p className="mb-2">
                    <i className="fa fa-envelope me-3" />
                    info@storyapp.com
                    </p>
                    <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href="">
                        <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-outline-light btn-social" href="">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-outline-light btn-social" href="">
                        <i className="fab fa-youtube" />
                    </a>
                    <a className="btn btn-outline-light btn-social" href="">
                        <i className="fab fa-linkedin-in" />
                    </a>
                    </div>
                </div>
             
              
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    ©{" "}
                    <a className="border-bottom" href="#">
                        StoryApp
                    </a>
                    , All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                    <Link  to="/">Home</Link>
                        <Link  to="/adminLogin">Admin Login</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        {/* Footer End */}
        </>
    )
}