import { configureStore } from "@reduxjs/toolkit";
import { Cartreducer } from "../Reducers/Cartslice";

 export const Store=configureStore({
    reducer:Cartreducer

});


