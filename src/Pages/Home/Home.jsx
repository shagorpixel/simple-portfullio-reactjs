import React from 'react';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Service from './Components/Service';
import Portfullio from './Components/Portfullio';
import CoreDesign from './Components/CoreDesign';
import Testimonial from './Components/Testimonial';
import Blog from './Components/Blog';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Service></Service>
            <Portfullio></Portfullio>
            <CoreDesign></CoreDesign>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
};

export default Home;