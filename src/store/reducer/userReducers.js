import { createSlice } from "@reduxjs/toolkit";

const userInitial = { userInfo: null }

const userSlices = createSlice({
    name: "user",
    initialState: userInitial,
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload
        }
    }
})

const userActions = userSlices.actions;
const userReducers = userSlices.reducer;

export {userActions, userReducers}