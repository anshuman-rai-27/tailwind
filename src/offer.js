import React, { useState, useEffect } from 'react';
import clock from './assets/clock-solid.svg';
import './styles.css';
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
    <div className='md:h-25 bg-[#f5cd92] flex md:p-1 md:space-x-2 md:text-base text-[1.75vw] items-center justify-start  '>
        <div className='bg-[#eec07c] m-1 rounded-[25px] p-1 flex space-x-5 items-center w-[27vw] md:w-[11vw]'><img src={clock} className='md:h-[1vw] h-2 mx-1 md:my-0.' />One-Time Offer</div>
        <div className='md:m-1 p-1 w-[50vw] md:w-[28vw] '><pre>Your AI Storyboarding Bundle Discount expires in</pre></div>
        <div className='md:m-1 p-1 bg-[#fbdcb4] text-[#e67e88]'>{formatTime(countdownSeconds)}</div>
        <div className='bg-[#e79ba2] m-1 p-1 rounded-md px-4 w-[23vw] md:w-[10vw]'><pre>Claim Discount</pre></div>
    </div>
     </>
  );
}

export default Offer;
