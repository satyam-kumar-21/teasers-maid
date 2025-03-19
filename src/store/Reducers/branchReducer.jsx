import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    branch: [],
    loading: false,
    success: false,
    error: null,
};

export const branchSlice = createSlice({
    name: "branch",
    initialState,
    reducers: {
        createBranch: (state, action) => {
            state.branch.push(action.payload);
            state.loading = false;
            state.success = true;
            state.error = null;
        },
        updateBranch: (state, action) => {
            state.branch = state.branch.map((lecture) =>
                branch._id === action.payload._id ? action.payload : branch
            );
            state.loading = false;
            state.success = true;
            state.error = null;
        },
        deleteBranch: (state, action) => {
            state.branch = state.branch.filter(
                (branch) => branch._id !== action.payload
            );
            state.loading = false;
            state.success = true;
            state.error = null;
        },
        getBranch: (state, action) => {
            state.branch = action.payload;
            state.loading = false;
            state.success = true;
            state.error = null;
        },
        getAllBranch: (state, action) => {
            state.branch = action.payload;
            state.loading = false;
            state.success = true;
            state.error = null;
        },
    },
});

export const {
    createBranch,
    updateBranch,
    deleteBranch,
    getBranch,
    getAllBranch,
} = branchSlice.actions;

export default branchSlice.reducer;
