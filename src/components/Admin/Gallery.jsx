import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar';

function Gallery() {
  const [galleries, setGalleries] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    description: '',
    image: null,
  });
  const [isAddingGallery, setIsAddingGallery] = useState(false);
  const [isEditingGallery, setIsEditingGallery] = useState(false);
  const [editingGalleryId, setEditingGalleryId] = useState(null);

  const apiUrl = "https://teasers-backend-host.vercel.app";

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await axios.get(`${apiUrl}/gallery/all-galleries`); // Replace with your actual API endpoint
        setGalleries(response.data) ;
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchGalleries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/gallery/delete-gallery/${id}`); // Replace with your actual API endpoint
      setGalleries(galleries.filter(gallery => gallery._id !== id));
    } catch (error) {
      setError('Error deleting gallery item');
    }
  };

  const handleOpenAddGallery = () => {
    setIsAddingGallery(true);
  };

  const handleCloseAddGallery = () => {
    setIsAddingGallery(false);
    setFormData({
      description: '',
      image: null,
    });
  };

  const handleOpenEditGallery = (gallery) => {
    setIsEditingGallery(true);
    setEditingGalleryId(gallery._id);
    setFormData({
      description: gallery.description,
      image: null,
    });
  };

  const handleCloseEditGallery = () => {
    setIsEditingGallery(false);
    setEditingGalleryId(null);
    setFormData({
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

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('description', formData.description);
      formDataToSend.append('image', formData.image);

      const response = await axios.post(`${apiUrl}/gallery/upload-gallery`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setGalleries([...galleries, response.data]);
      handleCloseAddGallery();
    } catch (error) {
      setError('Error creating new gallery');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('description', formData.description);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const response = await axios.put(`${apiUrl}/gallery/update-gallery/${editingGalleryId}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setGalleries(galleries.map(gallery => (gallery._id === editingGalleryId ? response.data : gallery)));
      handleCloseEditGallery();
    } catch (error) {
      setError('Error updating gallery');
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
          <h2 className="text-3xl font-bold mb-4 text-white">Manage Galleries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleries.map(gallery => (
              <div key={gallery._id} className="bg-gray-800 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-bold mb-2 text-white">{gallery.description}</h3>
                {gallery.image && (
                  <img
                    src={gallery.image} // Assuming image is a URL fetched from backend
                    alt={gallery.description}
                    className="rounded-lg object-cover h-48 w-full mb-4"
                  />
                )}
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete(gallery._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleOpenEditGallery(gallery)}
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
              onClick={handleOpenAddGallery}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add New Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Add New Gallery Dialog */}
      {isAddingGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-100 w-3/4 md:max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-black">Add New Gallery</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                    placeholder="Enter description"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleCloseAddGallery}
                    className="mr-2 bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Gallery
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Gallery Dialog */}
      {isEditingGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-100 w-3/4 md:max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-black">Edit Gallery</h2>
              <form onSubmit={handleUpdate}>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                    placeholder="Enter description"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleCloseEditGallery}
                    className="mr-2 bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Update Gallery
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

export default Gallery;
