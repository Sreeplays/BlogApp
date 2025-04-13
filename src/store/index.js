import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducer/userReducers";

const getUserInfoLocal = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : null

const initialState = {
    user: {userInfo: getUserInfoLocal}
}

const store = configureStore({
    reducer:{
        user: userReducers
    },
    preloadedState: initialState
})


export default store