import React, { useState } from 'react';
import axios from 'axios';
import { MailIcon, PhoneIcon, ExternalLinkIcon } from '@heroicons/react/outline';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' , mobile:''});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const apiUrl = "http://127.0.0.1:3000";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post(`${apiUrl}/contact/submit`, formData);

      if (response.status === 200) {
        setMessage(response.data.message);
        setFormData({ name: '', email: '', message: '', mobile:'' });
      } else {
        setMessage('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessage('Failed to send message');
    } finally {
      setSubmitting(false);
    }
  };

  return (

    
    <section id='contact' className="bg-white dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Address
              </h3>
              <p className="text-gray-700 dark:text-white mb-4">
                Select Maid, 258, First Floor, Hari Nagar Ashram, Mathura Road, New Delhi 110014
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <PhoneIcon className="h-6 w-6 text-pink-500 dark:text-white" />
                <span className="text-gray-700 dark:text-white">Phone: (+91) 7290021461</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <MailIcon className="h-6 w-6 text-pink-500 dark:text-white" />
                <span className="text-gray-700 dark:text-white">Email: selectmaid@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://wa.me/+917290021461" target="_blank" rel="noopener noreferrer" className="text-pink-500 dark:text-white hover:text-pink-400">
                  <ExternalLinkIcon className="h-6 w-6" />
                  <span className="ml-2">WhatsApp Us</span>
                </a>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-800 dark:text-white font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-800 dark:text-white font-semibold mb-2">
                    Mobile no.
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-800 dark:text-white font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-800 dark:text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-400"
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
                {message && <p className="mt-2 text-sm text-gray-700 dark:text-white">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
