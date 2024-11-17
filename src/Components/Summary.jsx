import React, { useState } from 'react';

const Summary = ({ summary }) => {

  const {name, location, year} = summary
  const [show, setShow] = useState(false);

  const toggleLocation = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className='flex flex-col items-center'>
      <h3>{year}</h3>
      <h2>{name}</h2>
      <h4>{location}</h4>
      
      {/*<svg
        onClick={toggleLocation} className="w-6 h-6 text-gray-800 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
      </svg>

      {show && }*/}
    </div>
  );
};

export default Summary;
