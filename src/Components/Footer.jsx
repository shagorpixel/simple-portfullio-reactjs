import { FaTwitter,FaInstagram,FaDribbble,FaFacebook  } from "react-icons/fa";
import footerLogo from '../assets/img/footer-logo.png'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className=" bg-black text-white py-16">
        <div className=" max-w-3xl mx-auto space-y-10">
            <div className=" flex flex-col md:flex-row space-y-2 md:space-y-0 items-center justify-between">
                <ul className=" flex space-x-10">
                  <li><a className=" text-xl font-bold leading-[150%] hover:text-primary transition" href="#">About</a></li>
                  <li><a className=" text-xl font-bold leading-[150%] hover:text-primary transition" href="#">Services</a></li>
                </ul>
                <a href="#"> <img className=" w-40" src={footerLogo} alt="" /></a>
                <ul className=" flex space-x-10">
                  <li><a className=" text-xl font-bold leading-[150%] hover:text-primary transition" href="#">Portfolio</a></li>
                  <li><a className=" text-xl font-bold leading-[150%] hover:text-primary transition" href="#">Blog</a></li>
                </ul>
            </div>
            <div className=" max-w-56 mx-auto space-y-5">
              <p className="text-base font-normal leading-[150%] text-center">Follow me on social media:</p>
              <div className=" space-x-5 text-center flex justify-center items-center">
                <Link to={'/'} className=" text-lg" ><FaInstagram/></Link>
                <Link to={'/'} className=" text-lg" ><FaTwitter /></Link>
                <Link to={'/'} className=" text-lg"><FaDribbble /></Link>
                <Link to={'/'} className=" text-lg"><FaFacebook /></Link>
              </div>
            </div>
        </div>
     </footer>
    );
};

export default Footer;