import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Add Link here


const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      {/* Left side: Logo */}
      <div className="flex items-center space-x-4">
        <div className="bg-black text-white font-bold text-lg p-2">
          NetworkNest
        </div>
       
      </div>

      {/* Right side: Create Post, Notification, Avatar */}
      <div className="flex items-center space-x-6">
        <button
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50"
          onClick={() => {
            navigate('/create_post');
          }}
        >
          Create Post
        </button>
        

        {/* User Avatar */}
        <Link to='/profile'>
        <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
        👤
        </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
