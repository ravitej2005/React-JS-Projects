import { createSlice } from "@reduxjs/toolkit";

const notes = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push({
        ...action.payload,
        isCompleted: false,
        canEdit: false,
      })
    },
    setCanEdit: (state, action) => {
      state.forEach((task) => {
        if (task.id === action.payload) {
          task.canEdit = !task.canEdit;
        }
      })
    },
    EditNotesData: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...action.payload };
      }
    },
    removeCompleted: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    }
  }
})

export const { addNote, setCanEdit, removeCompleted, EditNotesData } = notes.actions;
export default notes.reducer;