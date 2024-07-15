import { createSlice,nanoid } from "@reduxjs/toolkit";
import React from "react";

const initialState={
    profiles:null,
    orderprofile:null,
    loggedin:false,
    success:false,
}

 const UserSlice=createSlice({
    name:"User",
    initialState,
    reducers:{
        addUser:(state,action)=>{
           state.profiles=action.payload

        },

        addOrderProfile:(state,action)=>{
            state.orderprofile=action.payload
        },

        login:(state,action)=>{
            state.loggedin=action.payload
        },

        complete:(state,action)=>{
            state.success=action.payload
        }
        

    }
 });

 export const {addUser ,login , addOrderProfile ,complete}=UserSlice.actions;
 export const Userreducer=UserSlice.reducer;