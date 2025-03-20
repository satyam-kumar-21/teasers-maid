import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar';
import { Editor } from '@tinymce/tinymce-react';

function Services() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    image: null,
  });
  const [isAddingService, setIsAddingService] = useState(false);
  const [isEditingService, setIsEditingService] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [updatedFormData, setUpdatedFormData] = useState({
    heading: '',
    description: '',
    image: null,
  });

  const apiUrl = "https://teasers-backend-host.vercel.app";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${apiUrl}/service/get-all-services`);
        setServices(response.data);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/service/delete-service/${id}`);
      setServices(services.filter(service => service._id !== id));
    } catch (error) {
      setError('Error deleting service');
    }
  };

  const handleOpenAddService = () => {
    setIsAddingService(true);
  };

  const handleCloseAddService = () => {
    setIsAddingService(false);
    setFormData({
      heading: '',
      description: '',
      image: null,
    });
  };

  const handleOpenEditService = (service) => {
    setEditingService(service);
    setUpdatedFormData({
      heading: service.heading,
      description: service.description, // Pre-load existing HTML content
      image: null, // Handle image if needed
    });
    setIsEditingService(true);
  };

  const handleCloseEditService = () => {
    setIsEditingService(false);
    setEditingService(null);
    setUpdatedFormData({
      heading: '',
      description: '',
      image: null,
    });
  };

  const handleInputChange = (e) => {
    if (isEditingService) {
      setUpdatedFormData({
        ...updatedFormData,
        [e.target.name]: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleImageChange = (e) => {
    if (isEditingService) {
      setUpdatedFormData({
        ...updatedFormData,
        image: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('heading', formData.heading);
      formDataToSend.append('description', formData.description); // The rich text content (HTML string)
      formDataToSend.append('image', formData.image);

      const response = await axios.post(`${apiUrl}/service/create-service`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setServices([...services, response.data]);
      handleCloseAddService();
    } catch (error) {
      setError('Error creating new service');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('heading', updatedFormData.heading);
      formDataToSend.append('description', updatedFormData.description); // The rich text content (HTML string)
      formDataToSend.append('image', updatedFormData.image);

      const response = await axios.put(`${apiUrl}/service/update-service/${editingService._id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Update the service in the state
      const updatedServices = services.map(service =>
        service._id === editingService._id ? response.data : service
      );
      setServices(updatedServices);
      handleCloseEditService();
    } catch (error) {
      setError('Error updating service');
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
          <h2 className="text-3xl font-bold mb-4 text-white">Manage Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service => (
              <div key={service._id} className="bg-gray-800 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-bold mb-2 text-white">{service.heading}</h3>
                <p className="text-white mb-2" dangerouslySetInnerHTML={{ __html: service.description }}></p>
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.heading}
                    className="rounded-lg object-cover h-48 w-full mb-4"
                  />
                )}
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleOpenEditService(service)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Service Dialog */}
      {isEditingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-100 w-3/4 md:max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-black">Edit Service</h2>
              <form onSubmit={handleUpdate}>
                <div className="mb-4">
                  <label htmlFor="heading" className="block text-gray-700 text-sm font-bold mb-2">Heading</label>
                  <input
                    type="text"
                    id="heading"
                    name="heading"
                    value={updatedFormData.heading}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                  <Editor
                    apiKey="cm9nvfslzhkydmi4aepyvc9o19x9cytyzde015wkqbusa3p8"
                    value={updatedFormData.description}
                    onEditorChange={(value) => setUpdatedFormData({ ...updatedFormData, description: value })}
                    init={{
                      height: 300,
                      menubar: true,
                      plugins: [
                        'advlist', 'autolink', 'lists', 'charmap', 'print', 'preview', 'anchor',
                        'searchreplace', 'wordcount', 'visualblocks', 'code', 'textcolor' // Keep textcolor and other necessary plugins
                      ],
                      toolbar:
                        'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist outdent indent | removeformat | forecolor | backcolor | preview', // Removed 'link' and 'image'
                      content_style: 'body { font-family:Arial, sans-serif; font-size:14px }',
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    onClick={handleCloseEditService}
                    className="mr-2 bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Update Service
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

export default Services;
