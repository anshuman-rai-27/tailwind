import React , {useState}from 'react';
import Popup from './pop_box';
const Blank_Card = () => {
    const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className=' md:w-[27vw] md:h-[24vw] w-[35vw] h-[40vw] my-10 bg-[#f5f6f0] rounded-md justify-center items-center flex'>
        {/* <img className=' self-center h-9' src={plus}/> */}
        <button 
        onClick={togglePopup} >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#bfbfbf" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
</button >
<Popup isOpen={isOpen} onClose={togglePopup} />
    </div>
    </>
  );
}

export default Blank_Card;
