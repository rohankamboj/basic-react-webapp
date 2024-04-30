import { IdentificationIcon } from '@heroicons/react/20/solid';

const Okrs = () => {
  return (
    <div className='flex flex-col gap-4 w-full h-[60vh] justify-center items-center'>
      <IdentificationIcon className='w-60 h-60 text-gray-500' />
      <p className='text-md'>You dont have any OKR yet in Q3 2023</p>
      <button
        type='button'
        className='bg-blue-500 text-white px-6 py-2 rounded-md'
        onClick={() => alert('Add Objective clicked!')}
      >
        Add Objective
      </button>
    </div>
  );
};

export default Okrs;
