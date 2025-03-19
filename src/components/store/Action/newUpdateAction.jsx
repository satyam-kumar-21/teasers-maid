import axios from "axios";
import {
  createNewUpdate,
  updateNewUpdate,
  deleteNewUpdate,
  getAllNewUpdates,
} from "../Reducers/newUpdateReducer";

const backendUrl = "http://127.0.0.1:3000"; // Replace with your actual backend URL

// Handle errors in a reusable way
const handleError = (error, actionName) => {
  console.error(`Error ${actionName}:`, error);
};

// Action to create a new update item
export const createNewUpdateAction = (updateData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${backendUrl}/new-update/create-new-update`,
      updateData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file uploads
        },
      }
    );
    dispatch(createNewUpdate(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Creating New Update");
  }
};

// Action to update an existing update item
export const updateNewUpdateAction = (updateId, updateData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${backendUrl}/new-update/update-new-update/${updateId}`,
      updateData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file uploads
        },
      }
    );
    dispatch(updateNewUpdate(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Updating New Update");
  }
};

// Action to delete an update item
export const deleteNewUpdateAction = (updateId) => async (dispatch) => {
  try {
    await axios.delete(`${backendUrl}/new-update/delete-new-update/${updateId}`);
    dispatch(getAllNewUpdatesAction()); // Refresh the list after deletion
    return { success: true };
  } catch (error) {
    handleError(error, "Deleting New Update");
  }
};

// Action to get all new update items
export const getAllNewUpdatesAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${backendUrl}/new-update/get-all-new-updates`);
    dispatch(getAllNewUpdates(response.data)); // Dispatch the action to update Redux state
  } catch (error) {
    handleError(error, "Fetching All New Updates");
  }
};
