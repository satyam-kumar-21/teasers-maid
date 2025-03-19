import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar';

function NewUpdates() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    image: null,
  });
  const [newUpdates, setNewUpdates] = useState([]);
  const [isAddingUpdate, setIsAddingUpdate] = useState(false);
  const [isEditingUpdate, setIsEditingUpdate] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const apiUrl = 'https://teasers-backend-host.vercel.app';

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get(`${apiUrl}/new-update/get-all-new-updates`);
        setNewUpdates(response.data);
      } catch (error) {
        setError('Error fetching new updates');
      }
    };

    fetchUpdates();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/new-update/delete-new-update/${id}`);
      setNewUpdates(newUpdates.filter((update) => update._id !== id));
    } catch (error) {
      setError('Error deleting new update item');
    }
  };

  const handleOpenAddUpdate = () => {
    setIsAddingUpdate(true);
  };

  const handleCloseAddUpdate = () => {
    setIsAddingUpdate(false);
    setFormData({
      heading: '',
      description: '',
      image: null,
    });
  };

  const handleOpenEditUpdate = (update) => {
    setEditingId(update._id);
    setFormData({
      heading: update.heading,
      description: update.description,
      image: null,
    });
    setIsEditingUpdate(true);
  };

  const handleCloseEditUpdate = () => {
    setIsEditingUpdate(false);
    setEditingId(null);
    setFormData({
      heading: '',
      description: '',
      image: null,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('heading', formData.heading);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('image', formData.image);

      const response = await axios.post(
        `${apiUrl}/new-update/create-new-update`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setNewUpdates([...newUpdates, response.data]);
      handleCloseAddUpdate();
    } catch (error) {
      setError('Error creating new update');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('heading', formData.heading);
      formDataToSend.append('description', formData.description);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const response = await axios.put(
        `${apiUrl}/new-update/update-new-update/${editingId}`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setNewUpdates(
        newUpdates.map((update) =>
          update._id === editingId ? response.data : update
        )
      );
      handleCloseEditUpdate();
    } catch (error) {
      setError('Error updating new update');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-grow ml-64 bg-gray-700 min-h-screen">
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Manage New Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newUpdates.map((update) => (
              <div key={update._id} className="bg-gray-800 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-bold mb-2 text-white">{update.heading}</h3>
                <p className="text-gray-300 mb-4">{update.description}</p>
                {update.image && (
                  <img
                    src={update.image} // Assuming image is a URL fetched from backend
                    alt={update.heading}
                    className="rounded-lg object-cover h-48 w-full mb-4"
                  />
                )}
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete(update._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleOpenEditUpdate(update)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button
              onClick={handleOpenAddUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add New Update
            </button>
          </div>
        </div>
      </div>

      {/* Add New Update Dialog */}
      {isAddingUpdate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-100 w-3/4 md:max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-black">Add New Update</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="heading" className="block text-gray-700 text-sm font-bold mb-2">Heading</label>
                  <input
                    type="text"
                    id="heading"
                    name="heading"
                    value={formData.heading}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleCloseAddUpdate}
                    className="mr-2 bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Update Dialog */}
      {isEditingUpdate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-100 w-3/4 md:max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-black">Edit Update</h2>
              <form onSubmit={handleUpdate}>
                <div className="mb-4">
                  <label htmlFor="heading" className="block text-gray-700 text-sm font-bold mb-2">Heading</label>
                  <input
                    type="text"
                    id="heading"
                    name="heading"
                    value={formData.heading}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleCloseEditUpdate}
                    className="mr-2 bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewUpdates;
