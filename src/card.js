import React from 'react';
import card from './assets/card.jpg';
const Card = () => {
  return (
    <>
    <div className=' w-[27vw] h-[24vw] my-10'>
        <div className='h-[17vw] overflow-hidden' ><img className='object-contain' src={card}/></div>
        <div className='flex flex-col justify-center py-7  px-5  border-solid border-[#bfbfbf] rounded-b-md border-2 '>
            <div>AI Character Demo Storyboard</div>
            <div className='text-[#bfbfbf]'>Updated 19 Mar 24</div>
        </div>
    </div>
    </>
  );
}

export default Card;
