import { faCircleCheck, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { id, name, img, description, perks, pricing } = service;
    const navigate = useNavigate();

    const handleEnroll = (e) => {
        e.preventDefault();
        navigate('/checkout')
    }

    return (
        <div className='col'>
            <div className="card h-100 text-center">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title text-capitalize">{name}</h4>
                    <hr />
                    <h3>From<span className='text-primary'> ${pricing}</span>/Month</h3>
                    <p className="card-text">{description.slice(0, 200)}</p>
                    <hr />
                    <div className='text-start'>
                        {
                            perks.map(perk => <p><FontAwesomeIcon className='me-2 text-success' icon={faCircleCheck}></FontAwesomeIcon>{perk}</p>)
                        }
                    </div>
                </div>
                <div className="card-footer p-0">
                    <button onClick={handleEnroll} className='enroll btn btn-dark w-100'>Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;