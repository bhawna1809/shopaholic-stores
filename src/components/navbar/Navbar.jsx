import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    const wrtieReview = () =>
        {

alert("hello");
        }
    return (
        <header className='w-full bg-black-500 text-black-800 px-16 py-4 border-b border-neutral-200'>
            <div className="w-full flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className='text-2xl font-bold'>
                    Shopaholics Store
                </Link>

                {/* Nav items and button */}
                <div className="flex items-center gap-10">
                    {/* Nav Items */}
                    <ul className="list-none flex items-center gap-6 text-base text-neutral-600 font-medium">
                        <li>
                            <Link to="/" className='block py-2 px-2rounded-md hover:ease-in-out duration-300'>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/reviews" className='block py-2 px-2 rounded-md hover:ease-in-out duration-300'>
                                Reviews
                            </Link>
                        </li>
                    </ul>

                    {/* Button */}
                    <button  onClick={wrtieReview} className="block py-2 px-2 rounded-md hover:ease-in-out duration-300">
                        Cart <FaShoppingCart className='bg-white-500 inline' />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar