import axios from "axios";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
} from "../Reducers/blogReducer";  // Assuming the reducer file is in the same location

const backendUrl = "https://teasers-backend-host.vercel.app"; // Replace with your actual backend URL

// Handle errors in a reusable way
const handleError = (error, actionName) => {
  console.error(`Error ${actionName}:`, error);
};

// Action to create a new blog post
export const createBlogAction = (blogData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${backendUrl}/blog/create-blog`,
      blogData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file uploads
        },
      }
    );
    dispatch(createBlog(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Creating Blog");
  }
};

// Action to update an existing blog post
export const updateBlogAction = (blogId, blogData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${backendUrl}/blog/update-blog/${blogId}`,
      blogData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file uploads
        },
      }
    );
    dispatch(updateBlog(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Updating Blog");
  }
};

// Action to delete a blog post
export const deleteBlogAction = (blogId) => async (dispatch) => {
  try {
    await axios.delete(`${backendUrl}/blog/delete-blog/${blogId}`);
    dispatch(getAllBlogsAction()); // Refresh the list after deletion
    return { success: true };
  } catch (error) {
    handleError(error, "Deleting Blog");
  }
};

// Action to fetch all blog posts
export const getAllBlogsAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${backendUrl}/blog/get-all-blogs`);
    dispatch(getAllBlogs(response.data)); // Dispatch the action to update Redux state
  } catch (error) {
    handleError(error, "Fetching All Blogs");
  }
};
