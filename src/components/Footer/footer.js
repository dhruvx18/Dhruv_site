import React from 'react';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footerTop">
                <div className="footerInfo">
                    <h2 className="footerName">Dhruv</h2>
                    <p className="footerRole">Software Engineer</p>
                </div>
            </div>

            <hr className="footerLine" />

            <p className="footerCopyright">
                © {currentYear} Built by Dhruv
            </p>
        </footer>
    );
};

export default Footer;