import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();

    return (
        <div className='sticky-bottom d-flex justify-content-between px-5 py-4 bg-dark text-white'>
            <p className='text-uppercase mb-0'>&copy; copyright {date.getFullYear()}.all rights reserved.</p>
            <p className='mb-0'>Website Designed by AFRIDI AZMAIN</p>
        </div>
    );
};

export default Footer;