import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-12 py-4 bg-white shadow-sm w-full'>
        
        {/* Logo */}
        <div>
            <h1 className="text-xl font-bold text-gray-700">
                Startup 3
            </h1>
        </div>

        {/* Center Menu */}
        <div className='flex items-center gap-8 text-gray-600 font-medium'>
            <Link to="/" className='hover:text-black'>Home</Link>
            <Link to="/Feature" className='hover:text-black'>Features</Link>
            <Link to="/Blog" className='hover:text-black'>Blog</Link>
            <Link to="/Shop" className='hover:text-black'>Shop</Link>

            {/* Search Icon */}
            <span className='cursor-pointer text-lg'>🔍</span>
        </div>

        {/* Right Side */}
        <div className='flex items-center gap-6'>
            <Link 
              to="/Login" 
              className='text-gray-600 hover:text-black'
            >
              Sign in
            </Link>

            <Link 
              to="/Register"
              className='bg-purple-500 text-white px-5 py-2 rounded-full hover:bg-purple-600 transition'
            >
              Sign Up
            </Link>
        </div>

     </nav>
  )
}

export default Navbar