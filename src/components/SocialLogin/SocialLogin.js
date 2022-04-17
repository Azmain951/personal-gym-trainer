import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png'
import github from '../../images/github.png'


const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;

    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    if (googleUser || githubUser) {
        navigate(from, { replace: true });
    }

    if (googleError || githubError) {
        errorMessage = <p className='text-danger'>Error: {googleError?.message || githubError?.message} </p>;
    }

    return (
        <div>
            <div className='w-75 mx-auto mb-3 d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='m-0 px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>

            <div className='w-75 mx-auto'>
                {errorMessage}
            </div>

            <div className='w-75 mx-auto mb-3 d-flex justify-content-center gap-4'>
                <button onClick={() => signInWithGoogle()} className='w-75 btn btn-dark'><img className='me-1' src={google} height={28} alt="" /> Google Sign in</button>
                <button onClick={() => signInWithGithub()} className='w-75 btn btn-dark'><img className='me-1' src={github} alt="" height={28} /> Github Sign in</button>
            </div>
        </div >
    );
};

export default SocialLogin;