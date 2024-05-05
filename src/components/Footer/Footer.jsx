import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
    return (
        <div className='footer'>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/nafa-abdul-rahman" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/nafaabdulrahman" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                </a>
                <a href="https://www.instagram.com/nafaabdulrahman/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon" />
                </a>
                <a href="mailto:nafaabdulrahman@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="icon" />
                </a>
            </div>
            <p className="copyright display-4" style={{ fontSize: 'small', marginTop: "30px" }}>© 2024 Nafa Abdul Rahman. All rights reserved.</p>
        </div>
    );
}

export default Footer;
