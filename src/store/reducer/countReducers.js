import { createSlice } from "@reduxjs/toolkit";

const countInitial = { number: 0}

const countSlices = createSlice({
    name: "count",
    initialState: countInitial,
    reducers: {
        countChange(state, action){
            state.number = action.payload;
        }
    }
})

const countActions = countSlices.actions;
const countReducers = countSlices.reducer;

export {countActions, countReducers}