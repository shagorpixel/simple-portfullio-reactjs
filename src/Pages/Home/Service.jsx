import { services } from "./Data/Service";
const Service = () => {
    return (
        <section class="py-12">
        <div class="container px-3 mx-auto space-y-12 pb-8">
          <div class=" max-w-4xl mx-auto text-center space-y-6 ">
            <h2 class=" leading-[150%] font-bold text-4xl">Services</h2>
            <p class=" font-normal text-base leading-[150%]">Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p>
          </div>
          {/* Service Wrapper Start */}
          <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">

            {
                services.map((service,index)=>
                    <div key={index} class=" text-center sm:text-left space-y-3">
              <img class=" size-12 mx-auto md:mx-0" src={service.image} alt="" />
              <h3 class=" text-lg font-bold leading-[130%]">Usability Testing</h3>
              <p class=" text-sm font-normal leading-[150%]">I specialize in web development and design, creating visually appealing, user-friendly digital experiences.</p>
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