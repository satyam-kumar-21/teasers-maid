// src/components/admin/Admin.jsx
import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';

const Admin = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const welcomeMessage = "Welcome to the Admin Dashboard";

  const formattedDate = currentTime.toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const formattedTime = currentTime.toLocaleTimeString(undefined, {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-grow ml-64">
        <main className="flex items-center justify-center min-h-screen p-4 mt-0 bg-gray-800">
          <div className="bg-gray-900 p-6 rounded shadow-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">{welcomeMessage}</h2>
            <p className="text-xl text-gray-300 mb-2">
              {formattedDate}
            </p>
            <p className="text-xl text-gray-300">
              {formattedTime}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
