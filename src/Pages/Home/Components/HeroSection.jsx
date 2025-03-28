import React from 'react';
import heroImage from '../../../assets/img/hero-image.png'
const HeroSection = () => {
    return (
        <section className=' bg-secoundary pt-6'>
             <div className="container px-3 mx-auto grid grid-cols-12 items-center space-y-16 md:space-y-0">
            <div className=" space-y-4 col-span-12 md:col-span-5 ">
                <h4 className=" text-[#1F1F1F] font-normal text-xl">UX Designer</h4>
                <h2 className=" font-bold  text-5xl leading-[150%]">Hi There, I’m <br />
                  <span className=" text-primary">John Smith</span></h2>
                <p className=" text-base font-normal leading-[150%]">Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.</p>
                <div className=" space-x-4">
                  <button className=" bg-black text-white font-bold text-base px-8 py-2">Hire Me</button>
                  <button className=" hover:bg-black hover:text-white font-bold text-base px-8 py-2 border border-black transition">Portfolio</button>
                </div>
            </div>
            <div className=" col-span-12 md:col-span-7">
              <img className=" w-full" src={heroImage} alt="" />
            </div>
        </div>
        </section>
    );
};

export default HeroSection;