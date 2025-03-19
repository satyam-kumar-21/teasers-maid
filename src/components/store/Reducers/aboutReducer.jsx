import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    about: [],
    loading: false,
    success: false,
    error: null,
};

export const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {
        createAbout: (state, action) => {
            state.about = action.payload;
            state.loading = false;
            state.success = true;
            state.error = null;
        },
        updateAbout: (state, action) => {
            state.about = action.payload;
            state.loading = false;
            state.success = true;
            state.error = null;
        },
        deleteAbout: (state, action) => {
            state.about = null;
            state.loading = false;
            state.success = true;
            state.error = null;
        },
        getAbout: (state, action) => {
            state.about = action.payload;
            state.loading = false;
            state.success = true;
            state.error = null;
        },
        getAllAbout: (state, action) => {
            state.about = action.payload;
            state.loading = false;
            state.success = true;
            state.error = null;
        },
    },
});

export const {
    createAbout,
    updateAbout,
    deleteAbout,
    getAbout,
    getAllAbout,
} = aboutSlice.actions;

export default aboutSlice.reducer;
