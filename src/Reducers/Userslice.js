import { createSlice,nanoid } from "@reduxjs/toolkit";
import React from "react";

const initialState={
    profiles:null,
    loggedin:false,
}

 const UserSlice=createSlice({
    name:"User",
    initialState,
    reducers:{
        addUser:(state,action)=>{
           state.profiles=action.payload

        },

        login:(state,action)=>{
            state.loggedin=action.payload
        }
    }
 });

 export const {addUser ,login}=UserSlice.actions;
 export const Userreducer=UserSlice.reducer;