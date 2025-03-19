import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ratings: [], // Store the list of all ratings
  loading: false,
  success: false,
  error: null,
};

export const ratingSlice = createSlice({
  name: "ratings",
  initialState,
  reducers: {
    createRating: (state, action) => {
      state.ratings.push(action.payload); // Add the new rating to the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    updateRating: (state, action) => {
      state.ratings = state.ratings.map((rating) =>
        rating._id === action.payload._id ? action.payload : rating
      ); // Update the specific rating in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    deleteRating: (state, action) => {
      state.ratings = state.ratings.filter((rating) => rating._id !== action.payload._id); // Remove deleted rating
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    getAllRatings: (state, action) => {
      state.ratings = action.payload; // Store all ratings in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
  },
});

export const { createRating, updateRating, deleteRating, getAllRatings } = ratingSlice.actions;

export default ratingSlice.reducer;
