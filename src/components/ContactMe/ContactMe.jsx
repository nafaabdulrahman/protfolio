import React from 'react';
import "./ContactMe.css"

function ContactMe() {
    return (
        <div className="contact" id="contact">
            <h2 className='text-center text-light'>Get in Touch</h2>
            <p>
                Feel free to contact me at{' '}
                <a href="mailto:nafabardila@gmail.com">
                    nafabardila@gmail.com
                </a>
                . I'm looking forward to hearing from you!
            </p>
        </div>
    );
}

export default ContactMe;