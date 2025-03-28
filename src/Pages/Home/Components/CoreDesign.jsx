import React from 'react';
import { CoreDesigns } from '../Data/CoreDesigns';
const CoreDesign = () => {
    return (
        <section  className=" py-8">
        <div className="container px-3 mx-auto space-y-12 pb-8">
          <div className=" max-w-4xl mx-auto text-center space-y-6">
            <h2 className=" leading-[150%] font-bold text-4xl">Core Design Skills</h2>
            <p className=" font-normal text-base leading-[150%]">I excel in essential design skills, creating visually stunning and functional digital experiences. From UI design to UX research, my passion is to craft effective and memorable digital solutions.</p>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-x-28 gap-y-7 max-w-[1440px] mx-auto">
           
          {
            CoreDesigns.map((coreDesign,index)=>
            <div key={index}>
              <h3 className=" font-bold text-base leading-[150%] mb-3">{coreDesign.name}</h3>
              <div className=" flex items-center justify-between w-full">
                <div className=" w-11/12 h-2 bg-[#E1E1E1] relative ">
                <div style={{width:`${coreDesign.skillPercentence}%`}} className=' h-full absolute left-0 top-0 bg-black'></div>
                </div>
                <div className=" w-1/12">
                  <h3 className=" text-right font-bold text-sm leading-[150%]">{coreDesign.skillPercentence}%</h3>
                </div>
              </div>
            </div>
            )
          }            
          </div>
        </div>
      </section>
    );
};

export default CoreDesign;