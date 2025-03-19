import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [], // For storing all blog items
  loading: false,
  success: false,
  error: null,
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // Action to create a new blog post
    createBlog: (state, action) => {
      state.blogs.push(action.payload); // Add new blog item to the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    // Action to update an existing blog post
    updateBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) =>
        blog._id === action.payload._id ? action.payload : blog
      ); // Update the specific blog item in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    // Action to delete a blog post
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog._id !== action.payload._id); // Remove the deleted blog item from the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    // Action to fetch all blog posts
    getAllBlogs: (state, action) => {
      state.blogs = action.payload; // Store all blog items in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
  },
});

export const {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
} = blogSlice.actions;

export default blogSlice.reducer;
