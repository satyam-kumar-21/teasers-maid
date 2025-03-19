import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar';

function Review() {
  const [ratings, setRatings] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rating: '',
    image: null,
  });
  const [isAddingRating, setIsAddingRating] = useState(false);
  const [isEditingRating, setIsEditingRating] = useState(false);
  const [editingRatingId, setEditingRatingId] = useState(null);

  const apiUrl = "https://teasers-backend-host.vercel.app";

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await axios.get(`${apiUrl}/rating/get-all-ratings`);
        setRatings(response.data);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };

    fetchRatings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/rating/delete-rating/${id}`);
      setRatings(ratings.filter(rating => rating._id !== id));
    } catch (error) {
      setError('Error deleting rating: ' + error.message);
    }
  };

  const handleOpenAddRating = () => {
    setIsAddingRating(true);
  };

  const handleCloseAddRating = () => {
    setIsAddingRating(false);
    setFormData({
      name: '',
      description: '',
      rating: '',
      image: null,
    });
  };

  const handleOpenEditRating = (rating) => {
    setIsEditingRating(true);
    setEditingRatingId(rating._id);
    setFormData({
      name: rating.name,
      description: rating.description,
      rating: rating.rating,
      image: null, // Assume editing image functionality is separate or optional
    });
  };

  const handleCloseEditRating = () => {
    setIsEditingRating(false);
    setEditingRatingId(null);
    setFormData({
      name: '',
      description: '',
      rating: '',
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
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('rating', formData.rating);
      formDataToSend.append('image', formData.image);

      const response = await axios.post(`${apiUrl}/rating/create-rating`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setRatings([...ratings, response.data]);
      handleCloseAddRating();
    } catch (error) {
      setError('Error creating new rating: ' + error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('rating', formData.rating);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const response = await axios.put(`${apiUrl}/rating/update-rating/${editingRatingId}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setRatings(ratings.map(rating => (rating._id === editingRatingId ? response.data : rating)));
      handleCloseEditRating();
    } catch (error) {
      setError('Error updating rating: ' + error.message);
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
          <h2 className="text-3xl font-bold mb-4 text-white">Manage Ratings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ratings.map(rating => (
              <div key={rating._id} className="bg-gray-800 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-bold mb-2 text-white">{rating.name}</h3>
                <p className="text-lg font-bold mb-2 text-white">{rating.description}</p>
                <p className="text-xl font-bold mb-2 text-white">Rating: {rating.rating}</p>
                {rating.image && (
                  <img
                    src={rating.image}
                    alt={rating.name}
                    className="rounded-lg object-cover h-48 w-full mb-4"
                  />
                )}
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete(rating._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleOpenEditRating(rating)}
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
              onClick={handleOpenAddRating}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add New Rating
            </button>
          </div>
        </div>
      </div>

      {/* Add New Rating Dialog */}
      {isAddingRating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-100 w-3/4 md:max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-black">Add New Rating</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
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
                    rows="4"
                    placeholder="Enter description"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    min="1"
                    max="5"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Profile pic</label>
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
                    onClick={handleCloseAddRating}
                    className="mr-2 bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Rating
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Rating Dialog */}
      {isEditingRating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-100 w-3/4 md:max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-black">Edit Rating</h2>
              <form onSubmit={handleUpdate}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
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
                    rows="4"
                    placeholder="Enter description"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    min="1"
                    max="5"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Profile pic</label>
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
                    onClick={handleCloseEditRating}
                    className="mr-2 bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Update Rating
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

export default Review;
