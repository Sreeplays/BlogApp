import { configureStore } from "@reduxjs/toolkit";
import { countReducers } from "./reducer/countReducers";

const store = configureStore({
    reducer:{
        count: countReducers
    }
})


export default store