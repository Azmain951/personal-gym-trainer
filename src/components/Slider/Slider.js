import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider1.png';
import slider2 from '../../images/slider2.png';
import slider3 from '../../images/slider3.png';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div>
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-uppercase fst-italic'>Perfect Shape Perfect Life</h3>
                        <h1 className=' text-uppercase'>Get Fit Now!</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-uppercase fst-italic'>Perfect Shape Perfect Life</h3>
                        <h1 className=' text-uppercase'>Get Fit Now!</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-uppercase fst-italic'>Perfect Shape Perfect Life</h3>
                        <h1 className=' text-uppercase'>Get Fit Now!</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;