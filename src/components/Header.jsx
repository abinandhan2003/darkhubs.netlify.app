import React from 'react';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-white">
                    <div className='flex items-center justify-between md:block'>
                        <div>
                            <a class="flex title-font font-medium items-center text-gray-900  md:mb-0">
                                <Link to="/">
                                    <img src={Logo} alt="Logo" width={140} />
                                </Link>
                            </a>
                        </div>
                    </div>
                    <nav class="w-full md:w-auto flex md:ml-auto md:flex flex-wrap items-center text-base md:justify-center justify-between text-black font-bold">

                        <Link to="/">
                            <a class="mr-5 hover:text-gray-900">Home</a>
                        </Link>

                        <Link to="/products">
                            <a class="mr-5 hover:text-gray-900">Products</a>
                        </Link>

                        <Link to="/about">
                            <a class="mr-5 hover:text-gray-900">About</a>
                        </Link>

                    </nav>

                    <div className='border border-black'>
                        <button className='px-5 py-2 border hover:bg-black border-b hover:text-white ease-in-out duration-300 text-black hidden md:block'>
                            LOG IN
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
