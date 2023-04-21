import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null
}


export const userSlice = createSlice({
    name : "userSlice",
    initialState ,
    reducers : {
        
        setUserData:(state,action) => {
            console.log('>>set user data reducer function called', state,action);
            state.userData = action.payload
        },
        removeUserData:(state) =>{
            state.userData = null
        }
    }
});

export const {
    setUserData,
    removeUserData
} = userSlice.actions


export default userSlice.reducer