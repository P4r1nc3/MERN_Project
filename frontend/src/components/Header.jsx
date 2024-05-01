import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
      <div className='bg-white shadow'>
        <div className='flex justify-between items-center max-w-7xl mx-auto px-6 py-3'>
          <Link to='/' className='text-gray-900'>
            <h1 className='text-xl font-bold'><span className="text-blue-500">Task</span>Master</h1>
          </Link>
          <ul className='flex gap-4 items-center'>
            {currentUser ? (
                <>
                  <Link to='/tasks' className='text-gray-900 hover:text-blue-500'>
                    <li className="flex items-center">Tasks</li>
                  </Link>
                  <Link to='/profile' className='flex items-center'>
                    <li><img src={currentUser.profilePicture} alt='profile' className='h-10 w-10 rounded-full object-cover hover:ring-2 hover:ring-blue-500' /></li>
                  </Link>
                </>
            ) : (
                <>
                    <Link to='/sign-in' className='text-gray-900 hover:text-blue-500'>
                      <li className="flex items-center">Sign In</li>
                    </Link>
                    <Link to='/sign-up' className='bg-blue-500 text-white rounded-2xl px-3 py-1 hover:bg-blue-400 transition duration-300'>
                        <li className="flex items-center">Sign Up</li>
                    </Link>
                </>
            )}
          </ul>
        </div>
      </div>
  );
}
