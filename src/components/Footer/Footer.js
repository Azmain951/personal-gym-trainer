import React from 'react';

const Footer = () => {
    const date = new Date();

    return (
        <div className='d-flex justify-content-between px-5 pt-5 pb-3 bg-dark text-white'>
            <p className='text-uppercase'>&copy; copyright {date.getFullYear()}.all rights reserved.</p>
            <p>Website Designed by AFRIDI AZMAIN</p>
        </div>
    );
};

export default Footer;