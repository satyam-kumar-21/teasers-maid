import { configureStore } from "@reduxjs/toolkit";
import newupdateReducer from "./Reducers/newUpdateReducer";
import aboutReducer from "./Reducers/aboutReducer";
import galleryReducer from "./Reducers/galleryReducer";
import branchReducer from "./Reducers/branchReducer";
import ratingReducer from "./Reducers/ratingReducer";
import serviceReducer from "./Reducers/serviceReducer";
import topReducer from "./Reducers/topReducer"
import blogReducer from "./Reducers/blogReducer"

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};



const preloadedState = loadState();

const store = configureStore({
  reducer: {
    about: aboutReducer,
    branch: branchReducer, 
    gallery: galleryReducer,
    newupdate: newupdateReducer,
    rating: ratingReducer,
    service: serviceReducer,
    topTeaser: topReducer,
    blogs: blogReducer,
  },
  preloadedState,
});

// Subscribe to store changes and save the state if user is authenticated
store.subscribe(() => {
  const currentState = store.getState();
  // if (currentState.user.isAuthenticated) {
  //   saveState(currentState);
  // }
  saveState(currentState);
});

export default store;
