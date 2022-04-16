import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar d-flex justify-content-between align-items-center bg-dark text-white px-5 py-3'>
            <Link to='/home'><h4 className='text-white'>Personal <span className='fst-italic text-primary'>Gym Trainer</span></h4></Link>

            <div className="nav-items">
                <Link to='checkout'>Checkout</Link>
                <Link to='Blogs'>Blogs</Link>
                <Link to='About'>About</Link>
                <Link to='login'>Login</Link>
            </div>
        </nav >
    );
};

export default Header;