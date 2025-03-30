import { FaTwitter,FaInstagram,FaDribbble,FaFacebook  } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="py-16 bg-secoundary max-w-[1800px] mx-auto">
            <div className="container px-3 mx-auto space-y-12 md:space-y-0 pb-8 grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
                <div className=" text-[#1F1F1F] space-y-20">
                <div className=" space-y-4">
                    <h2 className=" text-lg font-bold leading-[150%]">Get in Touch</h2>
                    <p className=" font-normal leading-[150%] text-base ">Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.</p>
                </div>
                <div className=" space-y-6">
                    <p>
                    <span className=" mr-2 leading-[15%]"><i className="fa-solid fa-phone-volume"></i></span>
                    <span>+1205 5872 321</span>
                    </p>
                    <p>
                    <span className=" mr-2 leading-[15%]"><i className="fa-solid fa-envelope"></i></span>
                    <span>contact@sarajonesdesign.com</span>
                    </p>
                    <p>
                    <span className=" mr-2 leading-[15%]"><i className="fa-solid fa-location-dot"></i></span>
                    <span>1234 Design Street,Creativeville, Webland,Imaginary State, 98765</span>
                    </p>
                </div>
                <div className=" flex items-center space-x-4">
                    <a href="#" className=" size-7  flex items-center justify-center bg-white rounded-full">
                    <FaTwitter />
                    </a>
                    <a href="#" className=" size-7  flex items-center justify-center bg-white rounded-full">
                    <FaInstagram />
                    </a>
                    <a href="#" className=" size-7  flex items-center justify-center bg-white rounded-full">
                    <FaDribbble />
                    </a>
                    <a href="#" className=" size-7  flex items-center justify-center bg-white rounded-full">
                    <FaFacebook />
                    </a>
                </div>
                </div>
                <form className=" space-y-4" action="#">
                    <input className=" w-full p-3 rounded text-sm bg-white" type="text" placeholder="First Name" />
                    <input className=" w-full p-3 rounded text-sm bg-white" type="email" placeholder="Email" />
                    <input className=" w-full p-3 rounded text-sm bg-white" type="email" placeholder="Phone Number" />
                    <textarea className=" w-full h-40 rounded text-sm p-3 bg-white" placeholder="Your message" name="" id=""></textarea>
                    <button className=" bg-black text-white font-bold text-base px-6 py-2 ">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;