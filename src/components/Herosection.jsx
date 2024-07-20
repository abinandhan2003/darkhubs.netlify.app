import React from 'react';
import '../components/typetext';
import '../components/googlefont.css'
import { Link } from 'react-router-dom';

function Herosection() {
    return (
        <div className='flex flex-col pt-20 px-5 md:px-0' id='herofont'>
            <div className='md:text-7xl text-5xl font-bold'>
                We Provide <span className='text-yellow-500'>,</span> <br /> Digital resource <br /> To all People <span className='text-yellow-500'> ... </span>
            </div>

            <div className='text-xl mt-5 ml-2 text-black'> We Don't support any piracy</div>


            <Link to="/products">
            <button class="learn-more mt-3">
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
            </button>
            </Link>

        </div>


    );
}

export default Herosection;
