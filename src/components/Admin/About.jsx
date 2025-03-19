import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar';

function About() {
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    description1: '',
    description2: '',
    image: null,
  });
  const [aboutData, setAboutData] = useState(null);
  const apiUrl = "https://teasers-backend-host.vercel.app";

  // Fetch existing about data when the component mounts
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/about/get-about`);
        setAboutData(response.data);
      } catch (error) {
        setError('Error fetching about data');
      }
    };
    fetchAboutData();
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('description1', formData.description1);
      formDataToSend.append('description2', formData.description2);
      formDataToSend.append('image', formData.image);

      const url = aboutData
        ? `${apiUrl}/about/update-about/${aboutData._id}`
        : `${apiUrl}/about/create-about`;

      const method = aboutData ? 'put' : 'post';

      const response = await axios({
        method,
        url,
        data: formDataToSend,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setAboutData(response.data);
      setShowModal(false);
    } catch (error) {
      setError('Error updating data');
    }
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-grow ml-64 bg-gray-700 min-h-screen">
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Current About Content</h2>
          {aboutData ? (
            <div className="flex items-start mb-4">
              <div className="mr-4">
                <p className="text-xl text-gray-100 dark:text-white">{aboutData.description1}</p><br />
                <p className="text-xl text-gray-100 dark:text-white">{aboutData.description2}</p>
              </div>
              {aboutData.image && (
                <img
                  className="h-auto w-64 rounded-lg object-cover"
                  src={aboutData.image}
                  alt="About"
                />
              )}
            </div>
          ) : (
            <p className="text-xl text-gray-100 dark:text-white">No content available.</p>
          )}
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {aboutData ? 'Update About' : 'Create About'}
          </button>
        </div>

        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <form onSubmit={handleSubmit}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="mb-4">
                      <label htmlFor="description1" className="block text-gray-700 text-sm font-bold mb-2">
                        Description 1
                      </label>
                      <textarea
                        id="description1"
                        name="description1"
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        placeholder="Enter description 1"
                        value={formData.description1}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="description2" className="block text-gray-700 text-sm font-bold mb-2">
                        Description 2
                      </label>
                      <textarea
                        id="description2"
                        name="description2"
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        placeholder="Enter description 2"
                        value={formData.description2}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                        Image Upload
                      </label>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        onChange={handleImageChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        accept="image/*"
                        required
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      {aboutData ? 'Update' : 'Create'}
                    </button>
                    <button
                      onClick={() => setShowModal(false)}
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
