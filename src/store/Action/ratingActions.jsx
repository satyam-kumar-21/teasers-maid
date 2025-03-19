import axios from "axios";
import { createRating, updateRating, deleteRating, getAllRatings } from "../Reducers/ratingReducer";

const backendUrl = "https://teasers-backend-host.vercel.app"; // Replace with your actual backend URL

// Handle errors in a reusable way
const handleError = (error, actionName) => {
  console.error(`Error ${actionName}:`, error);
};

// Action to create a new rating item
export const createRatingAction = (ratingData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${backendUrl}/rating/create-rating`,
      ratingData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file uploads
        },
      }
    );
    dispatch(createRating(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Creating Rating");
  }
};

// Action to update an existing rating item
export const updateRatingAction = (ratingId, ratingData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${backendUrl}/rating/update-rating/${ratingId}`,
      ratingData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file uploads
        },
      }
    );
    dispatch(updateRating(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Updating Rating");
  }
};

// Action to delete a rating item
export const deleteRatingAction = (ratingId) => async (dispatch) => {
  try {
    await axios.delete(`${backendUrl}/rating/delete-rating/${ratingId}`);
    dispatch(getAllRatingsAction()); // Refresh the list after deletion
    return { success: true };
  } catch (error) {
    handleError(error, "Deleting Rating");
  }
};

// Action to get all rating items
export const getAllRatingsAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${backendUrl}/rating/get-all-ratings`);
    dispatch(getAllRatings(response.data)); // Dispatch the action to update Redux state
  } catch (error) {
    handleError(error, "Fetching All Ratings");
  }
};
