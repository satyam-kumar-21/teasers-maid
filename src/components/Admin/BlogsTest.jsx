import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar';
import BlogCard from '../BlogCard';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  });
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [isEditingBlog, setIsEditingBlog] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const apiUrl = "https://teasers-backend-host.vercel.app";

  // Fetch all blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blog/get-all-blogs`);
        setBlogs(response.data);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchBlogs();
  }, []);

  // Handle blog deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/blog/delete-blog/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      setError('Error deleting blog');
    }
  };

  // Open add blog form
  const handleOpenAddBlog = () => {
    setIsAddingBlog(true);
  };

  // Close add blog form
  const handleCloseAddBlog = () => {
    setIsAddingBlog(false);
    setFormData({
      title: '',
      description: '',
      image: null,
    });
  };

  // Open edit blog form
  const handleOpenEditBlog = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      description: blog.description,
      image: null, // Handle image if needed
    });
    setIsEditingBlog(true);
  };

  // Close edit blog form
  const handleCloseEditBlog = () => {
    setIsEditingBlog(false);
    setEditingBlog(null);
    setFormData({
      title: '',
      description: '',
      image: null,
    });
  };

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image change for form
  const handleImageChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setFormData({
      ...formData,
      [name]: file,
    });
  };

  // Handle form submission for adding a new blog
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
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
      setError('Error creating new blog');
    }
  };

  // Handle form submission for updating an existing blog
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('image', formData.image);

      const response = await axios.put(`${apiUrl}/blog/update-blog/${editingBlog._id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const updatedBlogs = blogs.map(blog =>
        blog._id === editingBlog._id ? response.data : blog
      );
      setBlogs(updatedBlogs);
      handleCloseEditBlog();
    } catch (error) {
      setError('Error updating blog');
    }
  };

  // Render error message if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the component structure
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-grow ml-64 bg-gray-700 min-h-screen">
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Manage Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map(blog => (
              <div key={blog._id} className="relative">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
                  <h3 className="text-xl font-bold text-gray-800 mt-2">{blog.title}</h3>
                  <p className="text-gray-600">{blog.description}</p>
                  <div className="flex justify-between mt-2">
                    <button
                      onClick={() => handleOpenEditBlog(blog)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </div>
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
                  <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
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
                  <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
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
                    onClick={handleCloseEditBlog}
                    className="mr-2 bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Update Blog
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
