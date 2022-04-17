import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = async (e) => {
        e.preventDefault();
        await signOut(auth);
        toast.success('Sign Out Successfully');
    }
    return (
        // <nav className='sticky-top navbar d-flex justify-content-between align-items-center bg-dark text-white px-5 py-3'>
        //     <Link to='/home'><h4 className='text-white'>Personal <span className='fst-italic text-primary'>Gym Trainer</span></h4></Link>

        //     <div className="nav-items">
        //         <Link to='checkout'>Checkout</Link>
        //         <Link to='Blogs'>Blogs</Link>
        //         <Link to='About'>About</Link>
        //         {user ?
        //             <button onClick={handleSignOut} className='sign-out bg-dark'>Sign Out</button>
        //             : <Link to='login'>Login</Link>}
        //     </div>
        // </nav >


        <Navbar className='sticky-top' bg="dark" variant="dark" expand="lg">
            <Container fluid className='px-5 py-1'>
                <Navbar.Brand as={Link} to="/"><h4 className='text-white'>Personal <span className='fst-italic text-primary'>Gym Trainer</span></h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-items ms-auto">
                        <Nav.Link as={Link} to='/checkout'>Checkout</Nav.Link>
                        <Nav.Link as={Link} to='/Blogs'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        {
                            user ?
                                <button onClick={handleSignOut} className='sign-out bg-dark'>Sign Out</button>
                                : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
};

export default Header;