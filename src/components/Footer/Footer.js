import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();

    return (
        <div className='d-flex justify-content-between px-5 py-4 bg-dark text-white mt-5'>
            <p className='text-uppercase mb-0'>&copy; copyright {date.getFullYear()}.all rights reserved.</p>
            <p className='mb-0'>Website Designed by AFRIDI AZMAIN</p>
        </div>
    );
};

export default Footer;