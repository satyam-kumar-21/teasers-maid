// topTeaserActions.js
import axios from "axios";
import { createTopTeaser, updateTopTeaser, deleteTopTeaser, getAllTopTeasers } from "../Reducers/topReducer";

const backendUrl = "https://teasers-backend-host.vercel.app"; // Replace with your backend URL

// Handle errors in a reusable way
const handleError = (error, actionName) => {
  console.error(`Error ${actionName}:`, error);
};

// Action to create a top teaser
export const createTopTeaserAction = (topTeaserData) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("description", topTeaserData.description);
    formData.append("image", topTeaserData.image);

    const response = await axios.post(`${backendUrl}/top-teasers/upload-top-teaser`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Content-Type for file uploads
      },
    });

    dispatch(createTopTeaser(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Creating Top Teaser");
  }
};

// Action to update a top teaser
export const updateTopTeaserAction = (topTeaserId, topTeaserData) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("description", topTeaserData.description);
    if (topTeaserData.image) {
      formData.append("image", topTeaserData.image);
    }

    const response = await axios.put(`${backendUrl}/top-teasers/update-top-teaser/${topTeaserId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch(updateTopTeaser(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Updating Top Teaser");
  }
};

// Action to delete a top teaser
export const deleteTopTeaserAction = (topTeaserId) => async (dispatch) => {
  try {
    await axios.delete(`${backendUrl}/top-teasers/delete-top-teaser/${topTeaserId}`);
    dispatch(getAllTopTeasersAction()); // Refresh the list after deletion
    return { success: true };
  } catch (error) {
    handleError(error, "Deleting Top Teaser");
  }
};

// Action to get all top teasers
export const getAllTopTeasersAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${backendUrl}/top-teasers/all-top-teasers`);
    dispatch(getAllTopTeasers(response.data)); // Dispatch the action to update Redux state
  } catch (error) {
    handleError(error, "Fetching All Top Teasers");
  }
};
