import React from 'react';
import moneyBack from '../../images/moneyBack.png'

const MoneyBack = () => {
    return (
        <div className='d-flex m-5 py-5'>
            <div className='w-50'>
                <img className='w-75' src={moneyBack} alt="" />
            </div>
            <div className='my-auto'>
                <h1 className='text-uppercase mb-4'>Your Results, Guaranteed</h1>
                <p className='mb-3'>If you commit and do everything within my coaching program and don't see and feel noticeable results after 12 weeks I will refund you your entire investment.</p>
                <p className='mb-3'>No questions asked, we just simply part as friends, not that I've ever had to give anyone a refund before.</p>
                <p className='mb-3'>That's how sure I am that this will be the BEST transformation you've ever experienced before.</p>
            </div>
        </div>
    );
};

export default MoneyBack;