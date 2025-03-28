import { services } from "../Data/Service";

const Service = () => {
    return (
        <section className="py-12">
        <div className="container px-3 mx-auto space-y-12 pb-8">
          <div className=" max-w-4xl mx-auto text-center space-y-6 ">
            <h2 className=" leading-[150%] font-bold text-4xl">Services</h2>
            <p className=" font-normal text-base leading-[150%]">Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p>
          </div>
          {/* Service Wrapper Start */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">

            {
                services.map((service,index)=>
                    <div key={index} className=" text-center sm:text-left space-y-3">
              <img className=" size-12 mx-auto md:mx-0" src={service.image} alt="" />
              <h3 className=" text-lg font-bold leading-[130%]">Usability Testing</h3>
              <p className=" text-sm font-normal leading-[150%]">I specialize in web development and design, creating visually appealing, user-friendly digital experiences.</p>
            </div>
                )
            }
            
          </div>
        {/* Service Wrapper End */}
        </div>
      </section>
    );
};

export default Service;