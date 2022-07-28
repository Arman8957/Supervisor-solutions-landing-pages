import React from 'react';
import Image from 'next/image';
import laptop from '../public/images/laptop.png';
import  wave01 from '../public/images/wave01.png';



const Body = () => {
    return (
        <div className="py-2 my-20 ">
            <div className="flex item-center  justify-around">
                <div className="px-5 w-1/3 font-bold text-[#06356CF7] text-justify text-lg ">
                    <p className="">Are you considering where you can source your next Department of Transportation(DOT) or Drug Free Workplace training from?</p>
 
                    <p className="">Are you concerned about your business compliance, and would welcome some professional guidance,  including training and materials? Here at Supervisor Solutions,
                        we offer all the training courses you require to ensure your business is compliant. Our course materials cover the most stringent regulations, giving you that ultimate peace of mind. </p>
                        <div className="border-1 border-[#1F497B] bg-sky-600 hover:bg-sky-700">
                            <button type="button" className="">Find Out More...</button>
                        </div>
                
                
                </div>
                <div className="pr-10">
                    <Image
                     src={laptop}
                     width={600}
                     height={500}
                     className="drop-shadow-md md:drop-shadow-xl p-8" />
                </div>

            </div>
            <div className="py-8 my-8">
                <Image src={wave01}
                width=""
                height="500"
                objectFit="cover" 
                className="w-full"
                />
            </div>



            
        </div>
    );
};

export default Body;