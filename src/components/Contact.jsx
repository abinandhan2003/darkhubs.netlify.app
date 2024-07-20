import React from 'react';
import Qr from '../img/qr.png';

function Contact() {
    return (
        <div className='py-10 flex items-center justify-between flex-wrap px-7 md:px-7'>

            <div className='flex w-full md:w-1/2'>
                <div className='text-7xl font-extrabold text-gray-600'>
                   <span className='font-thin'> Let's build <br /> Something </span> <br /> Great together. 
                </div>
            </div>
            <div className='bg-white flex w-full md:w-1/2 justify-center items-center mt-5 md:mt-0'>
                    <img src={Qr} alt="" className='w-[400px]'/>
            </div>



        </div>
    );
}

export default Contact;
