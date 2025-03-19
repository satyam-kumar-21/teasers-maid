// src/components/admin/AdminSidebar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/admin/login');
  };

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed shadow-lg overflow-y-auto">
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/admin/about" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 block rounded text-center transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/admin/new-updates" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 block rounded text-center transition duration-300">
                New Updates
              </Link>
            </li>
            <li>
              <Link to="/admin/gallery" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 block rounded text-center transition duration-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/admin/review" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 block rounded text-center transition duration-300">
                Review
              </Link>
            </li>
            <li>
              <Link to="/admin/services" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 block rounded text-center transition duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/admin/branches" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 block rounded text-center transition duration-300">
                Branches
              </Link>
            </li>
            <li>
              <Link to="/admin/blog" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 block rounded text-center transition duration-300">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/admin/top-teasers" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 block rounded text-center transition duration-300">
                Top Teasers
              </Link>
            </li>

          
          </ul>
        </nav>
        <div className="mt-auto">
          <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-500 py-2 px-4 block w-full text-center rounded transition duration-300 mt-6"
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
