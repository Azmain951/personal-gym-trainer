import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Reset Password Email Sent')
        }
        else {
            toast.error('Please enter an email!!!')
        }

    }

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
        toast.success("Successfully logged in");
    }

    if (loading) {
        return <Loading></Loading>;
    }

    if (error || resetError) {
        errorMessage = <p className='text-danger'>Error: {error?.message || resetError?.message} </p>
    }

    return (
        <div className='container w-50 border my-5 rounded pb-3'>
            <h2 className='text-center mt-4'>Login</h2>
            <Form onSubmit={handleLogin} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {errorMessage}
                <Button variant="dark" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-2 w-75 mx-auto'>Forget Password? <button onClick={resetPassword} className='btn btn-link text-danger p-0 m-0'>Reset Password</button></p>
            <p className='mt-2 w-75 mx-auto'>New to Personal Gym Trainer? <Link to='/register'>Join Here</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;