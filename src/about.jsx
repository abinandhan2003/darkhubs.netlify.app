import React from 'react';
import Profile from './img/profile.svg';
import './visit.css';

function About() {
    return (
        <div className='py-5'>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={Profile} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-5xl text-3xl mb-4 text-gray-600 font-extrabold"> I'm Abi <span className='blur hover:blur-none duration-300'>Nandhan</span>
                        </h1>
                        <p class="mb-8 leading-relaxed bg-white">As a frontend developer with a deep appreciation for elegant and performant web interfaces, I specialize in crafting exceptional user experiences using the dynamic React library and the versatile styling capabilities of Tailwind CSS. With a track record of delivering pixel-perfect, responsive web applications, I bring a blend of creativity and technical expertise to every project.</p>
                        <div class="flex justify-center">
                          
                            <a href="https://abi-web.netlify.app/">
                            <button class="ui-btn">
                                <span>
                                    Vist Me    
                                </span>
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
