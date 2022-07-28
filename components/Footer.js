import React from 'react';
import Image from 'next/image'
import footerlogo from '../public/images/footerlogo.png';


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-[#0c3a71] text-white flex justify-center">
                <div className="flex-1">
                    <a className="link link-hover text-2xl">About Supervision Solutions</a>
                    <a className="link link-hover text-2xl">Initiatives</a>
                    <a className="link link-hover text-2xl">Instructor Qualifications</a>
                    <a className="link link-hover text-2xl">Regulations and Compliance</a>
                    <a className="link link-hover text-2xl">Resources</a>
                    <a className="link link-hover text-2xl">Terms and Conditions</a>
                    <a className="link link-hover text-2xl">FAQ</a>
                    <a className="link link-hover text-2xl">Privacy and Policy</a>
                    <a className="link link-hover text-2xl">Contact Us</a>
                    <a className="link link-hover text-2xl">email.edu@gmail.com</a>
                </div>
                <div className="flex-1">
                    <div className="grid grid-flow-row gap-4">
                        <Image src={footerlogo} alt="homeIcon" />
                        <p className='text-3xl'>© Indoteslax</p>
                    </div>
                </div>
                <div className="flex-1">
                </div>
            </footer>
        </div>
    );
};

export default Footer;