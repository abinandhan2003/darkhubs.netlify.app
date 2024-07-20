import React from 'react';
import './Category.css';
import Adobe from '../img/abobe.svg';
import Windows from '../img/Windows.png';
import Games from '../img/Assassins-Creed-Logo.png';
import { Link } from 'react-router-dom';


function Catagory() {
  return (
    <div>
      <div className='md:pb-20 px-7 md:px-7'>
        <div className='text-7xl font-extrabold text-gray-600'>
          Category
        </div>

        <div className='flex w-full flex-wrap md:flex-nowrap justify-center mr-10 md:mr-0 mt-8  gap-5'>


          <div className='md:w-1/3 w-full ml-20 md:ml-0'>
            <div class="card">
              <div class="card-img">
                <img src={Adobe} alt="" />
              </div>
              <div class="card-title"> Media Softwares</div>
              <div class="card-subtitle">Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
              <hr class="card-divider" />
              <div class="card-footer">
                <div class="card-price"><span>$</span>Free</div>
                <button class="card-btn">
                  <Link to="/products">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                  </Link>
                </button>
              </div>
            </div>

          </div>


          <div className='md:w-1/3 w-full ml-20 md:ml-0'>
            <div class="card">
              <div class="card-img">
                <img src={Games} alt="" />
              </div>
              <div class="card-title">Games</div>
              <div class="card-subtitle">Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
              <hr class="card-divider" />
              <div class="card-footer">
                <div class="card-price"><span>$</span> Free</div>
                <button class="card-btn">
                  <Link to="/products">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                  </Link>
                </button>
              </div>
            </div>

          </div>


          <div className='md:w-1/3 w-full ml-20 md:ml-0'>

            <div class="card">
              <div class="card-img">
                <img src={Windows} alt="" />
              </div>
              <div class="card-title">Operating System</div>
              <div class="card-subtitle">Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
              <hr class="card-divider" />
              <div class="card-footer">
                <div class="card-price"><span>$</span>Free</div>
                <button class="card-btn">
                  <Link to="/products">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                  </Link>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Catagory;
