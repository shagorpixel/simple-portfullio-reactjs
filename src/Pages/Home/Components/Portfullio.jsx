import { PortFullios } from "../Data/Portfolios";
import { MdArrowOutward } from "react-icons/md";
const Portfullio = () => {

    return (
        <section className=" py-8">
        <div className=" text-center  bg-secoundary pt-10 pb-32">
          <div className=" max-w-3xl space-y-3 mx-auto">
            <h2 className=" font-bold leading-[150%] text-4xl">My Portfolio</h2>
            <p className=" font-normal text-base leading-[150%] text-[#1F1F1F]">Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p>
          </div>
        </div>
        {/* portfullio Wrapper Start */}
        <div className="container mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-6 gap-12 -mt-20">
            {
                PortFullios.map((portfullio,index)=>
                    <div key={index} className=" space-y-6">
                <img className=" w-full" src={portfullio.image} alt="" />
                <div className=" flex items-end justify-between">
                  <div className=" space-y-2">
                    <h2 className=" text-xl font-bold leading-[150%]">{portfullio.title}</h2>
                    <p className=" text-sm leading-[150%]">{portfullio.category}</p>
                  </div>
                  <div className=" h-9 w-9 bg-primary flex items-center justify-center rounded-full">
                    <span className=" text-white text-xl font-semibold cursor-pointer"><MdArrowOutward /></span>
                  </div>
                </div>
              </div>
                )
            }
            
        </div>
        {/* portfullio Wrapper End */}
    
      </section>
    );
};

export default Portfullio;