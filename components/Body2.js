import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import offer from '../public/images/offer.png';
import starsOffer from '../public/images/starsOffer.png';
 

const Body2 = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
})
    return (
        
        <div className="py-8 flex  justify-around space-x-20">
          <div className="relative py-5 my-8 flex items-center justify-between ">
                <div className="relative mr-10 py-5 w-1/2  font-bold text-[#291F71] text-justify text-xl" data-aos="fade-right">
                    <p>By Buying Our<span className="text-red-600"> BUNDLE OFFER</span>, You Save More!!</p>
                    <div className=" ">

                      <div className="relative p-4 mx-10 border-r-8 border-b-8 border-gray-300 rounded-2xl" >
                          <p>1 Courses= $ 30</p>
                          <p>5 Courses ($25 each)= $ 125</p>
                          <p>10 Courses ($19 each)= $ 190</p>
                          <p>25 Courses ($17 each)= $ 425</p>
                          <p>50 Courses ($15 each)= $ 750</p>
                        <div className="absolute top-0 right-0   ">
                          <Image src={starsOffer} 
                          width={500} 
                          height={300}
                          className="drop-shadow-xl md:drop-shadow-xl"/>
                        </div>
                      </div>
                  
                    </div>  
                  

                </div>
                <div className="mr-8 " data-aos="zoom-out-down">
                    <Image 
                    src={offer}
                    width={400}
                    height={400}
                    className="drop-shadow-xl md:drop-shadow-xl p-8"
                    />
                </div>    
            
             </div>
        </div>  
    );
};

export default Body2;
