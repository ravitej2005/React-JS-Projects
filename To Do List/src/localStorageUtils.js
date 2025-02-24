export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("notesState");
        if (!serializedState) return {}; 

        const notesArray = JSON.parse(serializedState);
        return { notes: notesArray }; 
    } catch (error) {
        console.error("Error loading state from localStorage:", error);
        return {};
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.notes); 
        localStorage.setItem("notesState", serializedState);
    } catch (error) {
        console.error("Error saving state to localStorage:", error);
    }
};
