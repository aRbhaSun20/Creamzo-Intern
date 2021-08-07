import React from "react";
import { Link } from "react-router-dom";
import "./Style/style.css";

const FooterBeforeLogin = () => {
    return (
        <React.Fragment>
            <footer className="footerContainer">
                <div className="footer-left">
                    <p className="links">
                        <Link className="footerLinkBeforeLogin" exact to="/terms">Terms</Link>
                        <Link className="footerLinkBeforeLogin" exact to="/collections">Collections</Link>
                        <Link className="footerLinkBeforeLogin" exact to="/contact">Contact</Link>
                        <Link className="footerLinkBeforeLogin" exact to="/careers">Careers</Link>
                    </p>
                </div>
                <div className="footerRight">
                    <div className="footerIcons">
                        <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                        <a href="https://www.facebook.com/"><i className="fa fa-twitter" /></a>
                        <a href="https://www.facebook.com/"><i className="fa fa-linkedin" /></a>
                        <a href="https://www.facebook.com/"><i className="fa fa-github" /></a>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default FooterBeforeLogin;