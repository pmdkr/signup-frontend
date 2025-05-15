// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // ✅ Correct import

const Header = () => {
    // Get token from localStorage
    const token = localStorage.getItem('token');
    let user = null;

    if (token) {
        try {
            const decoded = jwtDecode(token); // ✅ Use jwtDecode
            user = decoded;
            console.log(user);
        } catch (err) {
            console.error('Invalid token', err);
        }
    }

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
                        Login
                    </NavLink>

                    {/* Show user firstname from decoded token if logged in */}
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
