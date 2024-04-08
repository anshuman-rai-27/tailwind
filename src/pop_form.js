import React, { useState } from 'react';

const Form = () => {
  const [text, setText] = useState('');
  const [frameOption, setFrameOption] = useState('16:9');

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleFrameOptionChange = (event) => {
    setFrameOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can do something with the form data
    console.log('Text:', text);
    console.log('Frame Option:', frameOption);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full  mt-8">
      <div className="mb-4">
        <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">Storyboard Name</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={handleTextChange}
          className="border border-gray-300 rounded-sm py-2 px-3 w-full"
          placeholder="e.g. Default Project Storyboard"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="frameOption" className="block text-sm font-medium text-gray-700 mb-1">Frame Size</label>
        <select
          id="frameOption"
          value={frameOption}
          onChange={handleFrameOptionChange}
          className="border border-gray-300 rounded-sm py-2 px-3 w-full"
        >
          <option value="16:9">Landscape(16:9)</option>
          <option value="4:3">Standard(4:3)</option>
          <option value="1:1">Square(1:1)</option>
        </select>
      </div>
      <div className="my-4 -mx-10 border-[1px] border-solid border-[#f2f3ed] w-[30vw]  relative"></div>
      <div className='flex justify-between items-center'>
        <div>


        <label className="flex items-center cursor-pointer">
      {/* Hidden input to manage the toggle state */}
      <input
        type="checkbox"
        className="hidden "
        checked={isChecked}
        onChange={handleToggle}
      />
      {/* Custom toggle switch */}
      <div className={`relative w-8 h-4 rounded-full border-black border-solid border-2 bg-red flex items-center`}>
        <div className={`absolute w-2 h-2 mx-1 rounded-full transition-transform duration-300 ease-in-out bg-black ${isChecked ? 'transform translate-x-full' : ''}`}></div>
      </div>
      {/* Optional label text */}
      <span className="ml-2 text-sm font-medium text-gray-700">Ai Assistant</span>
    </label>



        </div>
      <button type="submit" className="bg-[#dededc] hover:bg-black text-white font-semibold py-2 px-4 rounded-md">Create Storyboard</button>
      </div>
      
    </form>
  );
};

export default Form;
