import React from 'react';
import Form from './pop_form';
const Popup = ({ isOpen, onClose }) => {


    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-700 bg-opacity-50">
                    <div className="bg-white md:p-6 rounded-lg shadow-lg md:h-[25vw] md:w-[30vw] h-[80vw] w-[80vw] md:pl-10 pl-5">
                        <div className='flex justify-between items-center space-x-10 mt-5'>
                            <div className='md:text-2xl font-semibold md:mb-4 items-center flex'>New Storyboard</div>
                            <button
                                className="px-2 py-2 rounded-full bg-[#f5f6f0] items-center flex justify-between "
                                onClick={onClose}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        </div>
                        <Form />

                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
