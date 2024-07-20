import React from 'react';
import Windows from '../img/Windows.png';
import './product.css';
import Adobe from '../img/abobe.svg';
import Assasin from '../img/Assassins-Creed-Logo.png';
import Office from '../img/Microsoft Office.png';
import GTA from '../img/Grand Theft Auto V.png';

function Productpage() {
    return (
        <div className='py-5 px-5 md:px-0'>


            <div className='flex bg-gray-200  px-5 py-11 shadow items-center flex-wrap md:flex-nowrap justify-center'>
                <div className='w-64'>
                    <img src={Windows} alt="" />
                </div>
                <div>
                    <div className='text-5xl text-center md:text-left'> Windows 11</div>
                    <div className='mt-5'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum quia a aliquam adipisci magnam itaque, quidem perferendis est, ratione nemo cum rerum tempore qui! Ab laboriosam neque quibusdam odit.</div>

                    <button class="button1 mt-5">
                        Download
                    </button>
                </div>
            </div>

            <div className='flex bg-gray-200 px-5 py-11 shadow items-center mt-5 flex-wrap md:flex-nowrap justify-center'>
                <div className='w-64'>
                    <img src={Adobe} alt="" />
                </div>
                <div>
                    <div className='text-5xl text-center md:text-left'>Adobe XD</div>
                    <div className='mt-5'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum quia a aliquam adipisci magnam itaque, quidem perferendis est, ratione nemo cum rerum tempore qui! Ab laboriosam neque quibusdam odit.</div>

                    <button class="button1 mt-5">
                        Download
                    </button>
                </div>
            </div>

            <div className='flex bg-gray-200 px-5 py-11 shadow items-center mt-5 flex-wrap md:flex-nowrap justify-center'>
                <div className='w-64'>
                    <img src={Office} alt="" />
                </div>
                <div>
                    <div className='text-5xl text-center md:text-left'> Office 2021</div>
                    <div className='mt-5'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum quia a aliquam adipisci magnam itaque, quidem perferendis est, ratione nemo cum rerum tempore qui! Ab laboriosam neque quibusdam odit.</div>

                    <button class="button1 mt-5">
                        Download
                    </button>
                </div>
            </div>

            <div className='flex bg-gray-200 px-5 py-11 shadow items-center mt-5 flex-wrap md:flex-nowrap justify-center'>
                <div className='w-64'>
                    <img src={Assasin} alt="" />
                </div>
                <div>
                    <div className='text-5xl text-center md:text-left'> Assasin Creed IV Black Flag</div>
                    <div className='mt-5'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum quia a aliquam adipisci magnam itaque, quidem perferendis est, ratione nemo cum rerum tempore qui! Ab laboriosam neque quibusdam odit.</div>

                    <button class="button1 mt-5">
                        Download
                    </button>
                </div>
            </div>

            <div className='flex bg-gray-200 px-5 py-11 shadow items-center mt-5 flex-wrap md:flex-nowrap justify-center'>
                <div className='w-64'>
                    <img src={GTA} alt="" />
                </div>
                <div>
                    <div className='text-5xl text-center md:text-left'> GTA V</div>
                    <div className='mt-5'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum quia a aliquam adipisci magnam itaque, quidem perferendis est, ratione nemo cum rerum tempore qui! Ab laboriosam neque quibusdam odit.</div>

                    <button class="button1 mt-5">
                        Download
                    </button>
                </div>
            </div>


        </div>
    );
}

export default Productpage;
