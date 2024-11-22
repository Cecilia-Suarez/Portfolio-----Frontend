import React from 'react';

const Summary = ({ summary }) => {

  const {name, location, year} = summary

  return (
    <div className='flex flex-col items-center'>
      <p className='text-base'>{year}</p>
      <h5 className='text-lg font-semibold'>{name}</h5>
      <p className='text-base'>{location}</p>
    </div>
  );
};

export default Summary;
