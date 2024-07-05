import { createSlice } from "@reduxjs/toolkit";



const initialState={
    products:[],
    qty:0,
}


const Cartslice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
         addProduct:(state ,action)=>{
            const find=state.products.findIndex((item)=>(item.id===action.payload.id));

            if(find>=0){
                state.products[find].qty+=1;
            }
            else{

                const cart={
                    ...action.payload,
                    qty:1
                }
                state.products.push(cart);

            }

            
            
           

        }

    }
})

export const {addProduct}=Cartslice.actions;
export const Cartreducer=Cartslice.reducer;