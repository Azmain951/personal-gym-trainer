import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = async (e) => {
        e.preventDefault();
        await signOut(auth);
        toast.success('Sign Out Successfully');
    }
    return (
        <Navbar className='sticky-top' bg="dark" variant="dark" expand="lg">
            <Container fluid className='px-4 py-1'>
                <Navbar.Brand as={Link} className='d-flex' to="/"><img src={logo} alt="" height={32} /><h4 className='text-white ms-2'>Personal <span className='fst-italic text-primary'>Gym Trainer</span></h4></Navbar.Brand>
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