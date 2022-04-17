import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();

    return (
        <div className='d-lg-flex d-sm-block justify-content-between px-5 py-4 bg-dark text-white'>
            <p className='text-uppercase mb-0'>&copy; copyright <span className='text-primary'>{date.getFullYear()}</span> . all rights reserved.</p>
            <p className='mb-0'>Website Designed by <span className='text-primary'>AFRIDI AZMAIN</span></p>
        </div>
    );
};

export default Footer;