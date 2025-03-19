import axios from "axios";
import {
  createGallery,
  updateGallery,
  deleteGallery,
  getAllGalleries,
} from "../Reducers/galleryReducer";

const backendUrl = "http://127.0.0.1:3000"; // Update this with your backend URL

// Handle errors in a reusable way
const handleError = (error, actionName) => {
  console.error(`Error ${actionName}:`, error);
};

// Action to create a gallery item
export const createGalleryAction = (galleryData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${backendUrl}/gallery/create-gallery`,
      galleryData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Content-Type for file uploads
        },
      }
    );
    dispatch(createGallery(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Creating Gallery Item");
  }
};

// Action to update a gallery item
export const updateGalleryAction = (galleryId, galleryData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${backendUrl}/gallery/update-gallery/${galleryId}`,
      galleryData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Content-Type for file uploads
        },
      }
    );
    dispatch(updateGallery(response.data)); // Dispatch the action to update Redux state
    return response.data;
  } catch (error) {
    handleError(error, "Updating Gallery Item");
  }
};

// Action to delete a gallery item
export const deleteGalleryAction = (galleryId) => async (dispatch) => {
  try {
    await axios.delete(`${backendUrl}/gallery/delete-gallery/${galleryId}`);
    dispatch(getAllGalleriesAction()); // Refresh the list after deletion
    return { success: true };
  } catch (error) {
    handleError(error, "Deleting Gallery Item");
  }
};

// Action to get all gallery items
export const getAllGalleriesAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${backendUrl}/gallery/all-galleries`);
    dispatch(getAllGalleries(response.data)); // Dispatch the action to update Redux state
  } catch (error) {
    handleError(error, "Fetching All Gallery Items");
  }
};
