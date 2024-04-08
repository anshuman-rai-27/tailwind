import React, { useState, useEffect } from 'react';
import clock from './assets/clock-solid.svg';
const Offer = () => {

  const initialCountdownSeconds = 360; // 6 minutes in seconds
  const [countdownSeconds, setCountdownSeconds] = useState(initialCountdownSeconds);

  // Function to update the timer display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Function to start the countdown timer
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCountdownSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerInterval);
  }, []); // 

  return (
    <>
    <div className='h-25 w-full bg-[#f5cd92] flex flex-row p-1 space-x-2'>
        <div className='bg-[#eec07c] m-1 rounded-[25px] p-1 flex space-x-5 items-center'><img src={clock} className='h-[1vw] mx-1 my-0.' />One-Time Offer</div>
        <div className='m-1 p-1'>Your AI Storyboarding Bundle Discount expires in </div>
        <div className='m-1 p-1 bg-[#fbdcb4] text-[#e67e88]'>{formatTime(countdownSeconds)}</div>
        <div className='bg-[#e79ba2] m-1 p-1 rounded-md px-4'>Claim Discount</div>
    </div>
    </>
  );
}

export default Offer;
