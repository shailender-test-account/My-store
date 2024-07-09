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

        },

        removeCart:(state,action)=>{

        //    console.log(action.payload.id)

         state.products=state.products.filter((item)=>(item.id !== action.payload.id));

        },

        decreaseQuantity:(state , action)=>{
            const find=state.products.findIndex((item)=>(item.id===action.payload.id));
            if(find>=0){
                if(state.products[find].qty===0){
                    state.products=state.products.filter((item)=>(item.id !==action.payload.id))
                }
                else{
                    state.products[find].qty-=1;
                }
            }

        },

        increaseQuantity:(state , action)=>{
            const find=state.products.findIndex((item)=>(item.id===action.payload.id));
            if(find>=0){
                state.products[find].qty+=1;
                
                
            }
            


        }

    }
})

export const {addProduct ,removeCart , decreaseQuantity ,increaseQuantity}=Cartslice.actions;

export const Cartreducer=Cartslice.reducer;