import React from 'react';
import Herosection from './components/Herosection';
import Herosvg from '../src/img/herosvg.svg';
import Homesec2 from './components/homesec2';
import Catagory from './components/Catagory';
import Contact from './components/Contact';
function Home() {
  return (

    // Hero section 
    <div>
      <div className='flex flex-wrap'>

        <div className='md:w-1/2 w-full'>
          <Herosection />
        </div>

        <div className='md:w-1/2 w-full h-[500px] p-10'>
          <img src={Herosvg} alt="Hero_SVG" className='h-full md:ml-5' />
        </div>
      </div>

      {/* Section 2 */}

      <div className='md:mt-5'>
        <Homesec2 />
      </div>

      {/* Category Section  */}

      <div>
         <Catagory />
      </div>

      {/* Contact Section  */}

      <div>
        <Contact />
      </div>

    </div>

  


  );
}

export default Home;
