import React from 'react';
import Footer from '../Footer/Footer';
import MoneyBack from '../MoneyBack/MoneyBack';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <MoneyBack></MoneyBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;