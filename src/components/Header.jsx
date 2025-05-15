// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    // Get user info from Redux store
    const user = useSelector(state => state.user.user);

    return (
        <header className="bg-white shadow sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <Link to="/" className="text-xl font-bold text-blue-600">MyApp</Link>
                <nav className="space-x-4 flex items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-semibold" : "text-gray-700 hover:text-blue-500"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-semibold" : "text-gray-700 hover:text-blue-500"
                        }
                    >
                        Contact Us
                    </NavLink>

                    {/* Show user firstname if logged in */}
                    {user && (
                        <span className="ml-6 font-medium text-gray-700">
                            {user.firstname}
                        </span>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
