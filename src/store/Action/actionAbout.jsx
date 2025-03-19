import axios from "axios";
import { createAbout, updateAbout, deleteAbout, getAbout, getAllAbout } from "../Reducers/aboutReducer";

const backendurl = "https://teasers-backend-host.vercel.app";

// Handle errors in a reusable way
const handleError = (error, actionName) => {
    console.error(`Error ${actionName}:`, error);
};

// Action to create the About section
export const createAboutAction = (userData) => async (dispatch) => {
    try {
        const response = await axios.post(`${backendurl}/about/create-about`, userData, {
            headers: {
                "Content-Type": "multipart/form-data", // Set content type for file uploads
            },
        });
        dispatch(createAbout(response.data)); // Dispatch the action to update Redux state
        return response.data;
    } catch (error) {
        handleError(error, "Creating About section");
    }
};

// Action to update the About section
export const updateAboutAction = (aboutId, userData) => async (dispatch) => {
    try {
        const response = await axios.put(
            `${backendurl}/about/update-about/${aboutId}`,
            userData,
            {
                headers: {
                    "Content-Type": "multipart/form-data", // Set content type for file uploads
                },
            }
        );
        dispatch(updateAbout(response.data)); // Dispatch the action to update Redux state
        return response.data;
    } catch (error) {
        handleError(error, "Updating About section");
    }
};

// Action to delete the About section
export const deleteAboutAction = (aboutId) => async (dispatch) => {
    try {
        await axios.delete(`${backendurl}/about/delete-about/${aboutId}`);
        dispatch(getAllAboutAction()); // Fetch all About sections after deletion
        return { success: true };
    } catch (error) {
        handleError(error, "Deleting About section");
    }
};

// Action to get a single About section
export const getAboutAction = () => async (dispatch) => {
    try {
        const response = await axios.get(`${backendurl}/about/get-about`);
        dispatch(getAbout(response.data)); // Dispatch the action to update Redux state
        return response.data;
    } catch (error) {
        handleError(error, "Fetching About section");
    }
};

// Action to get all About sections (if needed in future)
export const getAllAboutAction = () => async (dispatch) => {
    try {
        const response = await axios.get(`${backendurl}/about/get-all-about`);
        dispatch(getAllAbout(response.data)); // Dispatch the action to update Redux state
    } catch (error) {
        handleError(error, "Fetching All About sections");
    }
};
