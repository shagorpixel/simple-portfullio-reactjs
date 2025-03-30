import React from 'react';
import { Testimonials } from '../Data/Testimonials';
// Import Swiper React components
import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation,Pagination,Autoplay} from 'swiper/modules';

const Testimonial = () => {
    return (
    <section className=" bg-secoundary py-12 relative max-w-[1800px] mx-auto">
        <Swiper 
        slidesPerView={1}
        autoplay
        loop
        navigation={{
            clickable:true
        }}
        pagination={
            {clickable: true}
        }
         modules={[Navigation,Pagination,Autoplay]} 
        >
        {
            Testimonials.map((testimonial,index)=>
            <SwiperSlide key={index}>
            <div className=" max-w-3xl mx-auto  space-y-5">
                <h2 className=" text-4xl font-bold leading-[150%] text-center">Testemonials</h2>
                <p className=" text-base font-normal leading-[150%] text-[#1F1F1F] text-center">{testimonial.description}</p>
                <div className=" flex items-center justify-center space-x-4">
                    <img className=" size-16 rounded-full" src={testimonial.Image} alt="" />
                    <p><b>{testimonial.name}</b> / {testimonial.title}</p>
                </div>
        </div>
        </SwiperSlide>
            )
        }
        </Swiper>
  </section>
    );
};

export default Testimonial;