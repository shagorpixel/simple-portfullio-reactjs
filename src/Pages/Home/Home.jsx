import React, { Suspense } from 'react';
import HeroSection from './Components/HeroSection'
const About =  React.lazy(()=>import('./Components/About'));
const Service = React.lazy(()=>import('./Components/Service'));
const Portfullio =  React.lazy(()=>import('./Components/Portfullio'));
const CoreDesign = React.lazy(()=>import('./Components/CoreDesign'));
const Testimonial = React.lazy(()=>import('./Components/Testimonial'));
const Blog = React.lazy(()=>import('./Components/Blog'));
const Contact = React.lazy(()=>import('./Components/Contact'));
import Loading from '../../Components/Loading';

const Home = () => {
    return (
        <>

            <HeroSection></HeroSection>

            <Suspense fallback={<Loading></Loading>}>
            <About></About>
            </Suspense>

            <Suspense fallback={<Loading></Loading>}>
            <Service ></Service>
            </Suspense>

            <Suspense fallback={<Loading></Loading>}>
            <Portfullio></Portfullio>
            </Suspense>
            
            <Suspense fallback={<Loading></Loading>}>
            <CoreDesign></CoreDesign>
            </Suspense>

            <Suspense fallback={<Loading></Loading>}>
            <Testimonial></Testimonial>
            </Suspense>

            <Suspense fallback={<Loading></Loading>}>
            <Blog></Blog>
            </Suspense>

            <Suspense fallback={<Loading></Loading>}>
            <Contact></Contact>
            </Suspense>
        </>
    );
};

export default Home;