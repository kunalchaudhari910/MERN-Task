import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-sky-400 text-white px-3 py-1 rounded-sm w-fit'
      >
        <BsArrowLeft className='text-1xl' />
      </Link>
    </div>
  );
};

export default BackButton;