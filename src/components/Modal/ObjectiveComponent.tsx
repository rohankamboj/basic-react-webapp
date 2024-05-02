import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';

const ObjectiveComponent = ({ handleClose }) => {
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

      <div className='flex gap-4 flex-col p-6'>
        <input
          type='text'
          placeholder='Title'
          className='p-4 text-lg border w-full'
        />

        <div className='bg-gray-200 p-2'>
          <p className='uppercase font-semibold'> Objectives</p>
          <p>Describe what you want to accomplish</p>
        </div>

        <div className='flex justify-between  items-center'>
          <div className=' flex gap-2 w-1/4 items-center'>
            <XMarkIcon className='w-4 h-4' />
            <p className='uppercase'>Align To</p>
          </div>
          <input
            type='text'
            placeholder='Not Aligned to any OKR'
            className='p-2 text-lg border w-1/2'
          />
        </div>
      </div>
    </div>
  );
};

export default ObjectiveComponent;
