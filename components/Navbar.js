import React from 'react';
import Image from 'next/image';
import logo from '../public/images/logo.svg';
import sidebanner from '../public/images/sidebanner.png';

const Navbar = () => {
    return (
      
      <div className="relative bg-gradient-to-r from-blue-400 to-blue-800  w-full  ">
      <div className="flex items-start  justify-between  py-1 ">
      <div className="px-8">
        <Image 
         src={logo}
         width={320} 
         height={120}
         className= "cursor-pointer shadow-xl"
        /> 
      </div>
     
      <div className='flex items-start  justify-center'>
         <div className="header-nav px-10 text-2xl font-semibold"> 
         <nav className="text-slate-50 pt-8">
             <ul className="flex space-x-8  ">
             <li className=" hover:text-[#231955] "><a href="#">Courses</a></li>
             <li className=" hover:text-[#231955]  "><a href="#">Cart</a></li>
             <li className=" hover:text-[#231955]  "><a href="#">User</a></li>
             </ul>  
         </nav>
         </div>               
 
         <Image src={sidebanner} className='absolute top-0 left-0 object-cover h-full' width="" height=""/>
         
      </div>
      </div>
      <div className="absolute bottom-2/4 left-2/4 -translate-x-2/4 text-slate-100 text-3xl text-center font-semibold">
          <h1>Helping Businesses Remain Compliant With Their Training</h1>
         </div>
   </div>
    );
};

export default Navbar;