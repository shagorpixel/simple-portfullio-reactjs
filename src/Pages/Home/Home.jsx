import React from 'react';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Service from './Components/Service';
import Portfullio from './Components/Portfullio';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Service></Service>
            <Portfullio></Portfullio>
        </div>
    );
};

export default Home;