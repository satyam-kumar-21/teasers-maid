import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newUpdates: [], // For storing all new update items
  loading: false,
  success: false,
  error: null,
};

export const newUpdateSlice = createSlice({
  name: "newUpdates",
  initialState,
  reducers: {
    createNewUpdate: (state, action) => {
      state.newUpdates.push(action.payload); // Add new update item to the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    updateNewUpdate: (state, action) => {
      state.newUpdates = state.newUpdates.map((update) =>
        update._id === action.payload._id ? action.payload : update
      ); // Update the specific new update item in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    deleteNewUpdate: (state, action) => {
      state.newUpdates = state.newUpdates.filter(
        (update) => update._id !== action.payload._id
      ); // Remove the deleted new update item from the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    getAllNewUpdates: (state, action) => {
      state.newUpdates = action.payload; // Store all new update items in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
  },
});

export const {
  createNewUpdate,
  updateNewUpdate,
  deleteNewUpdate,
  getAllNewUpdates,
} = newUpdateSlice.actions;

export default newUpdateSlice.reducer;
