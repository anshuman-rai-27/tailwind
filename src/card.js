import React from 'react';
import card from './assets/card.jpg';
const Card = () => {
  return (
    <>
    <div className=' md:w-[27vw] md:h-[24vw] w-[35vw] h-[40vw]  my-10'>
        <div className='md:h-[17vw] h-[23vw]  overflow-hidden' ><img className='object-contain' src={card}/></div>
        <div className='flex flex-col justify-center md:py-7  md:px-5 px-2  border-solid border-[#bfbfbf] rounded-b-md border-2 md:h-[7vw] h-[17vw]'>
            <div className='2xl:text-lg sm:text-sm text-xs'>AI Character Demo Storyboard</div>
            <div className='text-[#bfbfbf] md:text-base text-xs'>Updated 19 Mar 24</div>
        </div>
    </div>
    </>
  );
}

export default Card;
