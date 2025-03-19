import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  galleries: [],  // For storing gallery items
  loading: false,
  success: false,
  error: null,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    createGallery: (state, action) => {
      state.galleries.push(action.payload); // Add new gallery item to the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    updateGallery: (state, action) => {
      state.galleries = state.galleries.map((gallery) =>
        gallery._id === action.payload._id ? action.payload : gallery
      ); // Update the gallery item in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    deleteGallery: (state, action) => {
      state.galleries = state.galleries.filter(
        (gallery) => gallery._id !== action.payload._id
      ); // Remove the gallery item from the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    getAllGalleries: (state, action) => {
      state.galleries = action.payload; // Store all gallery items in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
  },
});

export const {
  createGallery,
  updateGallery,
  deleteGallery,
  getAllGalleries,
} = gallerySlice.actions;

export default gallerySlice.reducer;
