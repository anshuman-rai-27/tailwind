import React from 'react';
import ProgressCircle from './circular_progress_bar';
const Nav = () => {
    return (
        <>
            <div className='flex my-2 items-center justify-between  h-15'>
                <div className='flex space-x-5 items-center mx-3'>
                    <div className='bg-black text-white rounded-full text-3xl p-1 w-[3vw] flex justify-center items-center'>B</div>
                    <div className='text-3xl'>Project Dashboard</div>
                </div>
                <div className='flex items-center space-x-4 py-1'>
                    <form class="max-w-96 w-80 mx-auto ">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search my storyboards" required />
                        </div>
                    </form>

                    <div className='border-[#b3dfff] border-solid border-2 p-2 rounded-md bg-[#dcf1fe] flex items-center'><ProgressCircle percent={4}/> Quick Start</div>
                    <div className='border-black border-solid border-2 rounded-full text-1xl p-2 pl-3 w-10 flex justify-between items-center bg-[#f6d7cc]'>A</div>
                    <div className='bg-black h-9 w-9 justify-center items-center flex rounded-l-full'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                    </svg></div>
                </div>
            </div>
        </>
    );
}

export default Nav;
