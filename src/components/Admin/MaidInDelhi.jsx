import React from 'react';
import AdminSidebar from './AdminSidebar';

const MaidInDelhi = () => {
  // Dummy data for the maid
  const maid = {
    id: 1,
    name: 'Sita Devi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula ullamcorper, rhoncus dui vel, blandit tellus.',
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-grow ml-64 bg-gray-700 min-h-screen p-8">
        {/* Content Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Maid in Delhi</h1>
          <div className="text-white">
            {/* Maid Image, Title, Description */}
            <div className="flex items-center mb-4">
              <img
                src={maid.image}
                alt={maid.name}
                className="rounded-full w-16 h-16 object-cover mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{maid.name}</h2>
                <p className="text-gray-300">{maid.description}</p>
              </div>
            </div>
            {/* Buttons: Update, Delete, Add */}
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Update
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                Delete
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                Add
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MaidInDelhi;
