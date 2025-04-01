import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/Logo.png'
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

function Items({toggleItems}) {
    const navItems = [
        
        {
            path:'/',
            name:'Home'
        },
        {
            path:'/blog',
            name:'Blog'
        },
        {
            path:'/portfullio',
            name:'Portfullio'
        },
        
        {
            path:'/services',
            name:'Services'
        }
    ]
    return (
        <ul id="list_items" className=" flex md:flex-row flex-col items-center justify-center py-5 md:space-x-8  px-3 md:px-0 md:bg-transparent "> 
              {
                navItems.map((item,index)=>
                    <li key={index} onClick={toggleItems}>
                        {/* <Link className=" font-bold text-lg hover:text-primary transition" to={item.path}>{item.name}</Link> */}
                        <NavLink to={item.path}
                        
                        className={({ isActive }) =>
                            isActive ? " text-primary font-bold text-lg hover:text-primary transition" : "font-bold text-lg hover:text-primary transition"
                          }
                        
                        >
                            {item.name}
                            
                        </NavLink>
                        
                        </li>
                )
              }
        </ul>
    )
}

const Nav = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const toggleItems = ()=>{
        setIsMenuOpen(prev=> !prev)
    }
    const [isScroll,setIsScroll] = useState(false)
    const scrollHandle = ()=>{
        if(window.scrollY>50){
            setIsScroll(true)
        }else{
            setIsScroll(false)
        }
        
    }
    useEffect(()=>{
        window.addEventListener('scroll',scrollHandle)
    },[])

    return (
        <nav  className={`sticky z-50 left-0 top-0 bg-secoundary ${isScroll?'shadow-md':''} max-w-[1800px] mx-auto` }>
        <div className=" container mx-auto px-3 flex items-center justify-between ">
          <Link>
            <img className=' w-[136px]' src={logo} alt="" />
          </Link>
            {/* Dextop menu */}
            <div className=' hidden md:block'>
            <Items></Items>
            </div>
            {/* Dextop menu End */}
            {/* Mobile Items Start */}
            <div className={` fixed left-0 top-0  h-screen  w-full bg-black/80 transform flex md:hidden items-center justify-center text-white transition ${isMenuOpen ? 'translate-x-0' :'translate-x-full'}`}>
            <Items toggleItems={toggleItems} ></Items>
            <div onClick={toggleItems} className='text-4xl font-semibold cursor-pointer absolute right-2 top-1'>
            <IoIosClose />
            </div>
            <div>
            {/* Mobile Items End */}
            </div>
            <div>

            </div>
            </div>
            {/* Dextop Items End */}
            <button className=" bg-black text-white font-bold text-base px-6 py-2 hidden md:block">Let’s Talk</button>
            <button onClick={toggleItems} className=" text-lg md:hidden cursor-pointer"><FaBars /></button>
        </div>
    </nav>
    );
};

export default Nav;