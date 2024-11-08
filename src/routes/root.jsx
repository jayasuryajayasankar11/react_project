import React from 'react'
import { FaBars, FaLaptopCode } from 'react-icons/fa';
import RefactordApp from '../RefactoredApp';
import { Outlet, Link } from 'react-router-dom';

export default function root() {
    return (
        <>
            <nav class="navbar bg-primary text-light mb-3">
                <div class="navbar-logo">
                    <a class="navbar-brand">
                        <span class="logo" ><FaLaptopCode /></span> Education</a>
                    <button class="navbar-toggler btn btn-sm btn-close-white">
                        <FaBars />
                    </button>
                </div>
                <div class="navbar-collapse">
                    <ul class="navbar-nav me-auto">
                        {/* <!-- todo: Update pages  > --> */}
                        
                        <li className="nav-item">
                        {/* <a class="nav-link" href={`/home/`}>Home</a> */}
                            <Link to={`/home/`}>
                                Home
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                        {/* <a class="nav-link" href={`/about/`}>About</a> */}
                            <Link to={`/about/`}>
                                About
                            </Link>
                        </li>
                       
                        <li className="nav-item">
                        {/* <a class="nav-link" href={`/Contact/`}>Contact</a> */}
                            <Link to={`/Contact/`}>
                                Contact
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                        {/* <a class="nav-link" href={`/logIn/`}>Log in</a> */}
                            <Link to={`/logIn/`}>
                                Log In
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                        {/* <a class="nav-link" href={`/register/`}>Register</a> */}
                            <Link to={`/register/`}>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <RefactordApp/> */}
            <Outlet />

        </>
    );
}
