import React from 'react';
import ProgressCircle from './circular_progress_bar';
const Nav = () => {
    return (
        <>
            <div className='flex md:my-2 items-center my-3 justify-between md:h-15'>
                <div className='flex md:space-x-5 space-x-1 items-center md:mx-3 mx-1'>
                    <div className='bg-black text-white rounded-full md:text-3xl text-xs md:p-1 p-[0.25vw] md:w-[3vw] w-4 flex justify-center items-center'>B</div>
                    <div className='md:text-3xl text-xs w-[30vw]'>Project Dashboard</div>
                </div>
                <div className='flex items-center md:space-x-4 md:py-1 space-x-1'>
                    <form class="md:max-w-96 md:w-80  md:mx-auto ">
                        <label for="default-search" class="md:mb-2 md:text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center md:ps-3 ps-1 pointer-events-none">
                                <svg class="md:w-4 md:h-4 w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block md:w-full w-[20vw] md:p-2 md:ps-10 ps-4 md:text-sm text-xs text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search my storyboards" required />
                        </div>
                    </form>

                    <div className='border-[#b3dfff] border-solid border-2 md:p-2 rounded-md bg-[#dcf1fe] flex items-center text-xs md:text-base w-[26vw] py-[o.75vw] px-[0.2vw] md:w-[10vw]'><ProgressCircle percent={4}/> Quick Start</div>
                    <div className='border-black border-solid border-2 rounded-full md:text-1xl text-xs md:p-2 md:w-10 w-5 flex justify-center items-center bg-[#f6d7cc]'>A</div>
                    <div className='bg-black md:h-9 md:w-9 justify-center items-center flex rounded-l-full'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                    </svg></div>
                </div>
            </div>
        </>
    );
}

export default Nav;
