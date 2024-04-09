import React from 'react';
import Content from "./content";

const ContentBox = () => {
    return (
        <>
            <div className='bg-[#f5f6f0] md:py-10 py-4 '>
                <div className='flex justify-between md:space-x-5 items-center md:mx-10 mx-5'>
                <div className='flex md:space-x-5 space-x-2'>
                    <div className='border-black border-solid border-2 rounded-full md:text-1xl text-sm md:p-2 md:w-10 w-6 flex justify-center items-center bg-[#f6d7cc]'>A</div>
                    <div className='md:text-2xl text-sm items-center flex'>Adam Copper Team</div>
                </div>
                <button className='bg-black rounded-md text-white md:py-2 md:px-3 px-1 py-1 md:text-base text-sm'>New Project</button>
                </div>
                <Content/>
            </div>
        </>
    );
}

export default ContentBox;
