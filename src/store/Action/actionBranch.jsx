import axios from "axios";
import {
  createBranch,
  updateBranch,
  deleteBranch,
  getBranch,
  getAllBranch,
} from "../Reducers/branchReducer";

const backendUrl = "https://teasers-backend-host.vercel.app"; // Update this with your backend URL

// Handle errors in a reusable way
const handleError = (error, actionName) => {
  console.error(`Error ${actionName}:`, error);
};

// Action to create a branch
export const createBranchAction = (branchData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${backendUrl}/branch/create-branch`,
      branchData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Content-Type for file upload
        },
      }
    );
    dispatch(createBranch(response.data)); // Dispatch Redux action to store data
    return response.data;
  } catch (error) {
    handleError(error, "Creating Branch");
  }
};

// Action to update a branch
export const updateBranchAction = (branchId, branchData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${backendUrl}/branch/update-branch/${branchId}`,
      branchData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Content-Type for file upload
        },
      }
    );
    dispatch(updateBranch(response.data)); // Dispatch Redux action to update the data
    return response.data;
  } catch (error) {
    handleError(error, "Updating Branch");
  }
};

// Action to delete a branch
export const deleteBranchAction = (branchId) => async (dispatch) => {
  try {
    await axios.delete(`${backendUrl}/branch/delete-branch/${branchId}`);
    dispatch(getAllBranchesAction()); // Refresh list after deletion
    return { success: true };
  } catch (error) {
    handleError(error, "Deleting Branch");
  }
};

// Action to get a single branch
export const getBranchAction = (branchId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${backendUrl}/branch/get-branch/${branchId}`
    );
    dispatch(getBranch(response.data)); // Dispatch Redux action to store single branch data
    return response.data;
  } catch (error) {
    handleError(error, "Fetching Single Branch");
  }
};

// Action to get all branches
export const getAllBranchesAction = () => async (dispatch) => {
  try {
    const response = await axios.get(`${backendUrl}/branch/get-all-branches`);
    dispatch(getAllBranch(response.data)); // Dispatch Redux action to store all branch data
  } catch (error) {
    handleError(error, "Fetching All Branches");
  }
};
