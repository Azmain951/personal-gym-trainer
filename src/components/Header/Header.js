import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = async (e) => {
        e.preventDefault();
        await signOut(auth);
    }
    return (
        <nav className='sticky-top navbar d-flex justify-content-between align-items-center bg-dark text-white px-5 py-3'>
            <Link to='/home'><h4 className='text-white'>Personal <span className='fst-italic text-primary'>Gym Trainer</span></h4></Link>

            <div className="nav-items">
                <Link to='checkout'>Checkout</Link>
                <Link to='Blogs'>Blogs</Link>
                <Link to='About'>About</Link>
                {user ?
                    <button onClick={handleSignOut} className='btn btn-link'>Sign Out</button>
                    : <Link to='login'>Login</Link>}
            </div>
        </nav >
    );
};

export default Header;