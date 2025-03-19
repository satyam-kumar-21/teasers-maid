import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [], // Store the list of services
  loading: false,
  success: false,
  error: null,
};

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    createService: (state, action) => {
      state.services.push(action.payload); // Add the new service to the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    updateService: (state, action) => {
      state.services = state.services.map((service) =>
        service._id === action.payload._id ? action.payload : service
      ); // Update the service in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    deleteService: (state, action) => {
      state.services = state.services.filter((service) => service._id !== action.payload._id); // Remove the deleted service
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    getAllServices: (state, action) => {
      state.services = action.payload; // Store all services in the state
      state.loading = false;
      state.success = true;
      state.error = null;
    },
  },
});

export const { createService, updateService, deleteService, getAllServices } = serviceSlice.actions;

export default serviceSlice.reducer;
