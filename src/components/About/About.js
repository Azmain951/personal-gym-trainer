import React from 'react';

const About = () => {
    return (
        <div className='w-50 mx-auto my-5 border rounded-3 p-5'>
            <div className='myself'>
                <h2 className='mb-4'>This is<span className='text-primary'> Ahmed-Al-Azmain</span>,</h2>
                <p>As of now, My goal is to complete the <span className='text-success'>"Web Development Course" </span> successfully. After finishing this course, I would like to learn node.js, mongodb, express.js to grow as a 'MERN' stack developer.</p>
                <p> Also, As I'm almost at the end of my B.Sc. course, I would like to start my job career as a <span className='text-warning'>'Junior Web Developer'</span> and implement the knowledge I've gained from this course and my B.Sc. degree in CSE.</p>
            </div>
        </div>
    );
};

export default About;