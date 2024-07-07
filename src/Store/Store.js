import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import { Cartreducer } from "../Reducers/Cartslice";
import { Userreducer } from "../Reducers/Userslice";

const rooterducer=combineReducers({userRed:Userreducer , cartRed:Cartreducer})

 export const Store=configureStore({
    reducer:rooterducer,
   


});


