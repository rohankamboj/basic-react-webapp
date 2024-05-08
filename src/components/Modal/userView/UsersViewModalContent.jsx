import React from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
const UsersViewModalContent = ({ handleClose, data }) => {
  return (
    <div className='flex-grow flex flex-col gap-y-5 overflow-y-auto bg-white pb-2'>
      <div className='bg-purple-600 p-6 flex justify-between'>
        <p className='text-base font-bold text-white'>Add Objective</p>
        <button
          className='border rounded-full w-4 h-4'
          type='button'
          onClick={handleClose}
        >
          <XMarkIcon className='text-white' aria-hidden='true' />
        </button>
      </div>

      <div>
        {data.map.map((item, index) => (
          <div key={index + 1} className='flex flex-col gap-2 p-4'>
            <p className='text-bold'>date: {item.date}</p>
            <p className='text-bold'>On: {item.on}</p>
            <p className='text-bold'>Teams: {item.teams}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersViewModalContent;
