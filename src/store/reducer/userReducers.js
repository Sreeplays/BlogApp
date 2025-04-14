import { createSlice } from "@reduxjs/toolkit";

const userInitial = { userInfo: null }

const userSlices = createSlice({
    name: "user",
    initialState: userInitial,
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        reseUserInfo(state, action) {
            state.userInfo = null
        }
    }
})

const userActions = userSlices.actions;
const userReducers = userSlices.reducer;

export {userActions, userReducers}