import React from 'react';
import Header from './components/Header';
import Backgroundparticle from './bg-particles';
import { Outlet } from 'react-router-dom';
import './components/googlefont.css';
import Footer from './components/Footer';

function Layout() {
    return (
        <div id='body' className='scroll-smooth'>


            {/* Particle background  */}
            <div className='relative'>
                <Backgroundparticle />
            </div>

            {/* page Layout  */}

            <div className='sticky mt-0 md:mx-56'>

                <div className='w-full md:border-b-2 md:border-gray-500 shadow-md md:shadow-none'>
                    <Header />
                </div>

                <div className=''>
                    <Outlet />
                </div>

                <div className='py-10'>
                    <Footer />
                </div>

            </div>


        </div>
    );
}

export default Layout;
