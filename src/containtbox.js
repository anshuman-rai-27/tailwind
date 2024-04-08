import React from 'react';
import Content from "./content";

const ContentBox = () => {
    return (
        <>
            <div className='bg-[#f5f6f0] py-10 '>
                <div className='flex justify-between space-x-5 items-center mx-10'>
                <div className='flex space-x-5'>
                    <div className='border-black border-solid border-2 rounded-full text-1xl p-2 pl-3 w-10 flex justify-between items-center bg-[#f6d7cc]'>A</div>
                    <div className='text-2xl items-center flex'>Adam Copper Team</div>
                </div>
                <button className='bg-black rounded-md text-white py-2 px-3'>New Project</button>
                </div>
                <Content/>
            </div>
        </>
    );
}

export default ContentBox;
