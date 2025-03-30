import React from 'react';
import { blogs } from '../Data/blogs';

const Blog = () => {
    return (
        <section className="py-16 bg-[#F7F7F7] max-w-[1800px] mx-auto">
        <div className="container px-3 mx-auto space-y-12 pb-8">
          <div className=" max-w-3xl mx-auto text-center space-y-5 ">
            <h2 className=" leading-[150%] font-bold text-4xl">Design Insights and Inspiration</h2>
            <p className=" font-normal text-base leading-[150%]">Discover industry insights, expert tips, and design inspiration. Stay updated with the latest trends in web design and user experience.</p>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-14 ">
            {
                blogs.map((blog,index)=>
                <div key={index} className=" space-y-6 bg-white">
                    <img className=" w-full" src={blog.image} alt={blog.title} />
                    <div className=" space-y-2 p-4">
                        <h6 className=" text-xs leading-[150%]">{blog.date} / UX</h6>
                        <h3 className=" text-base leading-[130%] font-bold">{blog.title}</h3>
                        <p className=" text-sm font-normal leading-[150%]">{blog.description}</p>
                        <button className=" text-xs  leading-[150%]"><span className="font-bold">Read More</span> <span className=" font-normal"></span><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
              </div>
                )
            }
            
          </div>

        </div>
      </section>
    );
};

export default Blog;