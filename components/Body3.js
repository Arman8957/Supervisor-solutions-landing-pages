import React from 'react';
import Image from 'next/image';
import lineBg from '../public/images/lineBg.png';
import Course1 from '../public/images/Course1.png';
import Course2 from '../public/images/Course2.png';
import Course3 from '../public/images/Course3.png';


const Body3 = () => {
    return (
        <div className="">
            <div className="">
              <div className="relative bg-gradient-to-r from-[#e6ebf1] to-[#D9E3F1] p-8 mr-10 py-5 w-2/5  font-md text-[#291F71] text-justify text-md  mx-10 border-l-8 border-b-8 border-[#1F497B] rounded-0">
                  <p className="text-lg font-bold">Drug-Free Workplace Training</p>
                  <p className="text-left">Are you in need of supervisor training to ensure your business is drug-free compliant? Offering a comprehensive program including relevant content to comply with regulations, our easy-to-follow course will ensure your supervisors are completely trained to the appropriate level. </p>
                 <div className=" absolute  -bottom-16 -right-20 ">
                  <Image src={Course2}
                  width={150} height={150}
                  objectFit="cover"
                  className="border-4 border-sky-200 rounded-full"/>
                 </div>

              </div>

              <div className="top-0 right-0  w-full">
                      <Image 
                      src={lineBg}
                      width=""
                      height=""
                      className="" />
              </div>
            
            </div>  

        </div>
    );
};

export default Body3;