import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (googleUser) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='w-75 mx-auto mb-3 d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='m-0 px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>

            <div className='w-75 mx-auto mb-3 d-flex justify-content-center gap-4'>
                <button onClick={() => signInWithGoogle()} className='w-75 btn btn-secondary'>Google Sign in</button>
                <button className='w-75 btn btn-secondary'>Github Sign in</button>
            </div>
        </div >
    );
};

export default SocialLogin;