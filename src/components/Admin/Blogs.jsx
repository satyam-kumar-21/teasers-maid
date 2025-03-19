import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar';

function Blogs() {
  const [error, setError] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    image: null,
  });
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [isEditingBlog, setIsEditingBlog] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const apiUrl = "https://teasers-backend-host.vercel.app"; // Your API endpoint

  // Fetch all blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blog/get-all-blogs`);
        setBlogs(response.data); // Save blogs to state
      } catch (error) {
        setError('Error fetching blogs');
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/blog/delete-blog/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id)); // Remove the deleted blog from state
    } catch (error) {
      setError('Error deleting blog item');
    }
  };

  const handleOpenAddBlog = () => {
    setIsAddingBlog(true);
  };

  const handleCloseAddBlog = () => {
    setIsAddingBlog(false);
    setFormData({
      heading: '',
      description: '',
      image: null,
    });
  };

  const handleOpenEditBlog = (blog) => {
    setEditingId(blog._id);
    setFormData({
      heading: blog.heading,
      description: blog.description,
      image: null,
    });
    setIsEditingBlog(true);
  };

  const handleCloseEditBlog = () => {
    setIsEditingBlog(false);
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

      const response = await axios.post(`${apiUrl}/blog/create-blog`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setBlogs([...blogs, response.data]);
      handleCloseAddBlog();
    } catch (error) {
      setError('Error creating blog');
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

      const response = await axios.put(`${apiUrl}/blog/update-blog/${editingId}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setBlogs(blogs.map(blog => blog._id === editingId ? response.data : blog));
      handleCloseEditBlog();
    } catch (error) {
      setError('Error updating blog');
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
          <h2 className="text-3xl font-bold mb-4 text-white">Manage Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map(blog => (
              <div key={blog._id} className="bg-gray-800 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-bold mb-2 text-white">{blog.heading}</h3>
                <p className="text-gray-300 mb-4">{blog.description}</p>
                {blog.image && (
                  <img
                    src={blog.image} // Assuming image is a URL fetched from backend
                    alt={blog.heading}
                    className="rounded-lg object-cover h-48 w-full mb-4"
                  />
                )}
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleOpenEditBlog(blog)}
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
              onClick={handleOpenAddBlog}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add New Blog
            </button>
          </div>
        </div>
      </div>

      {/* Add New Blog Dialog */}
      {isAddingBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-100 w-3/4 md:max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-black">Add New Blog</h2>
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
                    onClick={handleCloseAddBlog}
                    className="mr-2 bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Blog Dialog */}
      {isEditingBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-100 w-3/4 md:max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-black">Edit Blog</h2>
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
                    onClick={handleCloseEditBlog}
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

export default Blogs;
