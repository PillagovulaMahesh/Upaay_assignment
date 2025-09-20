import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

// ✅ Save state to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.error("Error saving state:", err);
  }
};

// ✅ Load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state:", err);
    return undefined;
  }
};

const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState,
});

// ✅ Subscribe to save every change
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
