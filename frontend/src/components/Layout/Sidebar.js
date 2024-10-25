// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <span>🏠</span>
            <Link to="/home" className="text-gray-700">Home</Link>
          </li>
          <li className="flex items-center space-x-3">
            <span>📰</span>
            <Link to="/job_apply" className="text-gray-700">Job_Apply</Link>
          </li>
          <li className="flex items-center space-x-3">
            <span>📞</span>
            <Link to="/job_Hiring" className="text-gray-700">Job_Hiring</Link>
          </li>
          <li className="flex items-center space-x-3">
            <span>🏷️</span>
            <Link to="/funding" className="text-gray-700">Fundings</Link>
          </li>
          <li className="flex items-center space-x-3">
            <span>💡</span>
            <Link to="/events" className="text-gray-700">events</Link>
          </li>
         
          <li className="flex items-center space-x-3">
            <span>👍</span>
            <Link to="/legaldata" className="text-gray-700">LegalData</Link>
          </li>
          <li className="flex items-center space-x-3">
            <span>👍</span>
            <Link to="/findata" className="text-gray-700">FinancialData</Link>
          </li>

        </ul>
      </nav>
    </div>
    
  );
};

export default Sidebar;
