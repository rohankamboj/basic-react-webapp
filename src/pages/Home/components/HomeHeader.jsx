import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useLocation } from 'react-router-dom';

const HomeHeader = () => {
  const { pathname, ...rest } = useLocation();
  console.log({ rest });
  return (
    <div className='flex justify-between w-full items-center'>
      <p className='text-xl uppercase w-48'>{pathname.split('/')[1]}</p>
      <div className='relative bg-white rounded-md border border-gray-200 '>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <MagnifyingGlassIcon
            className='h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </div>
        <input
          id='search'
          name='search'
          className=' outline-none bg-white p-2 ml-8 border-0 focus:border-0 focus:ring-0 focus:outline-none '
          placeholder='Search user, skill or team'
          type='search'
        />
      </div>
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

export default HomeHeader;
