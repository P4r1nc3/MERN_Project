import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-white shadow'>
      <div className='flex justify-between items-center max-w-6xl mx-auto px-6 py-3'>
        <Link to='/' className='text-gray-900'>
          <h1 className='text-xl font-bold'>TODO</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/' className='text-gray-900 hover:text-blue-500'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='text-gray-900 hover:text-blue-500'>
            <li>About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-8 w-8 rounded-full object-cover hover:ring-2 hover:ring-blue-500' />
            ) : (
              <li className='text-gray-900 hover:text-blue-500'>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
