import axios from "axios";
import { createService, updateService, deleteService, getAllServices } from "../Reducers/serviceReducer";

const backendUrl = "https://teasers-backend-host.vercel.app"; // Replace with your actual backend URL

// Handle errors in a reusable way
const handleError = (error, actionName) => {
  console.error(`Error ${actionName}:`, error);
};

// Action to create a new service
export const createServiceAction = (serviceData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${backendUrl}/service/create-service`,
      serviceData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file uploads
        },
      }
    );
    dispatch(createService(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Creating Service");
  }
};

// Action to update an existing service
export const updateServiceAction = (serviceId, serviceData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${backendUrl}/service/update-service/${serviceId}`,
      serviceData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file uploads
        },
      }
    );
    dispatch(updateService(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Updating Service");
  }
};

// Action to delete a service
export const deleteServiceAction = (serviceId) => async (dispatch) => {
  try {
    await axios.delete(`${backendUrl}/service/delete-service/${serviceId}`);
    dispatch(getAllServicesAction()); // Refresh the list of services after deletion
    return { success: true };
  } catch (error) {
    handleError(error, "Deleting Service");
  }
};

// Action to get all services
export const getAllServicesAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${backendUrl}/service/get-all-services`);
    dispatch(getAllServices(response.data)); // Dispatch the action to update Redux state
  } catch (error) {
    handleError(error, "Fetching All Services");
  }
};
