import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>

        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Home</a></li>
                <li>
                <a>Listed Book</a>
                </li>
                <li><a>Pages to Read</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl font-extrabold">Boi Poka</a>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
            <ul className="menu menu-horizontal px-1">
            <li><NavLink to={"/"} className='btn btn-outline text-yellow-800 ml-3'>Home</NavLink></li>
            <li>
                
                <summary className='btn btn-outline text-yellow-800 ml-3'>Listed Book</summary>
               
            </li>
            <li className='btn btn-outline text-yellow-800 ml-3'><a>Pages to Read</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn btn-warning">Sign in</a>
            <a className="btn btn-primary ml-3">Sign Up</a>
        </div>
        </div>
            
        </div>
    );
};

export default NavBar;