import React from 'react';
import { Testimonials } from '../Data/Testimonials';

const Testimonial = () => {
    return (
    <section className=" bg-secoundary py-12 relative ">
        
        {
            Testimonials.map((testimonial,index)=>
            <div key={index} className=" max-w-3xl mx-auto  space-y-5">
                <h2 className=" text-4xl font-bold leading-[150%] text-center">Testemonials</h2>
                <p className=" text-base font-normal leading-[150%] text-[#1F1F1F] text-center">{testimonial.description}</p>
                <div className=" flex items-center justify-center space-x-4">
                    <img className=" size-16" src={testimonial.Image} alt="" />
                    <p><b>{testimonial.name}</b> / {testimonial.title}</p>
                </div>
        </div>
            )
        }
  </section>
    );
};

export default Testimonial;