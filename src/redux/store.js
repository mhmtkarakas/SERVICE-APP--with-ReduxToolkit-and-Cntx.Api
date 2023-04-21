import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer : {
        userState : userSlice
    }
})

export default store;