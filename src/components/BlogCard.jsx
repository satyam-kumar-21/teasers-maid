// BlogCard.js
import React from 'react';

const BlogCard = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-0 rounded-lg shadow-md">
      <div className="mb-4">
        <img
          className="w-full h-64 object-cover rounded-lg shadow-lg"
          src={imageUrl}
          alt="blog"
          style={{ padding: 0, margin: 0 }}
        />
      </div>
      <div className="flex items-center mb-4 px-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-700 px-4 pb-2 dark:text-white leading-relaxed">{description}</p>
    </div>
  );
};

export default BlogCard;
