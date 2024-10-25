import React from 'react';
import logo from '../images/nn.png'; // Import the logo
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            {/* Logo Section */}
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="h-8" /> {/* Use the imported logo here */}
            </div>

            {/* Buttons Section */}
            <div className="flex space-x-4">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100" onClick={() => navigate('/login')}>Log in</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={()=>navigate('/register')}>Join for free</button>
            </div>
        </nav>
    );
};

export default Navbar;
