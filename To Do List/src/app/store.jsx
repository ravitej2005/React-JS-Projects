import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes";
import { loadState, saveState } from "../localStorageUtils";

const preloadedState = loadState(); 

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  preloadedState,
});

store.subscribe(() => {
    saveState(store.getState()); 
});

export default store;
