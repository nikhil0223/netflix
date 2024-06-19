import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "GptSearch",
    initialState: {
        gptSearch: false,
    },
    reducers: {
        toggleGptSearch : (state)=>{
            state.gptSearch = !state.gptSearch;
        }
    }
});

export const {toggleGptSearch}=gptSlice.actions;

export default gptSlice.reducer;