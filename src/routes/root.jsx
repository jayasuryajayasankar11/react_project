import React, { useContext, useState } from 'react'
import { FaBars, FaLaptopCode } from 'react-icons/fa';
import RefactordApp from '../RefactoredApp';
import { Outlet, NavLink } from 'react-router-dom';
import { ThemeContext , themes } from '../Context/ThemeContext';

export default function Root() {

    const [darkMode , setDarkMode] = useState("");

    const {changeTheme} =useContext(ThemeContext);

    const handleChangeTheme = () => {
        setDarkMode(!darkMode);
        changeTheme(darkMode ? themes.light : themes.dark);
    };
    return (
        <>
            <nav class="navbar bg-primary text-light mb-3">
                <div class="navbar-logo">
                    <a class="navbar-brand">
                        <span class="logo" onClick={handleChangeTheme}><FaLaptopCode /></span> Education</a>
                    <button class="navbar-toggler btn btn-sm btn-close-white">
                        <FaBars />
                    </button>
                </div>
                <div class="navbar-collapse">
                    <ul class="navbar-nav me-auto">
                        {/* <!-- todo: Update pages  > --> */}
                        {/*                         
                        <li className="nav-item">
                        <a class="nav-link" href={`/home/`}>Home</a>
                            <Link to={`/home/`}>
                                Home
                            </Link>
                        </li> */}

                        <NavLink
                            to={`home`}
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                        >Home</NavLink>

                        {/* <li className="nav-item">
                        <a class="nav-link" href={`/about/`}>About</a>
                            <Link to={`/about/`}>
                                About
                            </Link>
                        </li> */}
                        <NavLink to={`about`}
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                            About
                        </NavLink>

                        {/* <li className="nav-item">
                        <a class="nav-link" href={`/Contact/`}>Contact</a>
                            <Link to={`/Contact/`}>
                                Contact
                            </Link>
                        </li> */}

                        <NavLink to={`/contact/`}
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                            Contact
                        </NavLink>

                        {/* <li className="nav-item">
                        <a class="nav-link" href={`/logIn/`}>Log in</a>
                            <Link to={`/logIn/`}>
                                Log In
                            </Link>
                        </li> */}

                        <NavLink to={`login`}
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                            Login
                        </NavLink>

                        {/* <li className="nav-item">
                        <a class="nav-link" href={`/register/`}>Register</a>
                            <Link to={`/register/`}>
                                Register
                            </Link>
                        </li> */}

                        <NavLink to={`register`}
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                            Register
                        </NavLink>
                    </ul>
                </div>
            </nav>
            {/* <RefactordApp/> */}
            <Outlet />

        </>
    );
}
