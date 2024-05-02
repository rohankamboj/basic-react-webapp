import { IdentificationIcon } from '@heroicons/react/20/solid';
import AddObjectiveButton from '../../../../components/common/AddObjectiveButton';

const Okrs = () => {
  return (
    <div className='flex flex-col gap-4 w-full h-[60vh] justify-center items-center'>
      <IdentificationIcon className='w-60 h-60 text-gray-500' />
      <p className='text-md'>You dont have any OKR yet in Q3 2023</p>
      <AddObjectiveButton />
    </div>
  );
};

export default Okrs;
