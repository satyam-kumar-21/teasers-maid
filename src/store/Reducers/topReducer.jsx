import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topTeasers: [],  // For storing top teaser items
  loading: false,
  success: false,
  error: null,
};

export const topTeaserSlice = createSlice({
  name: "topTeasers",
  initialState,
  reducers: {
    createTopTeaser: (state, action) => {
      state.topTeasers.push(action.payload); // Add new top teaser item to the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    updateTopTeaser: (state, action) => {
      state.topTeasers = state.topTeasers.map((teaser) =>
        teaser._id === action.payload._id ? action.payload : teaser
      ); // Update the top teaser item in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    deleteTopTeaser: (state, action) => {
      state.topTeasers = state.topTeasers.filter(
        (teaser) => teaser._id !== action.payload._id
      ); // Remove the top teaser item from the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    getAllTopTeasers: (state, action) => {
      state.topTeasers = action.payload; // Store all top teaser items in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
  },
});

export const {
  createTopTeaser,
  updateTopTeaser,
  deleteTopTeaser,
  getAllTopTeasers,
} = topTeaserSlice.actions;

export default topTeaserSlice.reducer;
