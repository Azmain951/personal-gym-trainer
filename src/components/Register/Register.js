import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';

const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        registerLoading,
        registerError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate(from, { replace: true });
    }

    if (registerLoading || updating) {
        return <Loading></Loading>;
    }

    return (
        <div className='container w-50 border mt-5 rounded pb-3'>
            <h2 className='text-center mt-4'>Register</h2>
            <Form onSubmit={handleRegister} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <input className='btn btn-primary border-0' type="submit" value="Register" />
            </Form>
            <p className='mt-2 w-75 mx-auto'>Already have an account? <Link to='/login'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;