import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { IoMdStar } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addProduct } from '../Reducers/Cartslice';

function Product() {

    const dispatch=useDispatch();

    const handeladdCart=()=>{
        dispatch(addProduct(product))


    }

    const[product,setProduct]=useState([]);
    console.log(product)
    const {id}=useParams();

    useEffect(()=>{

        const getProduct=async()=>{
            let response=await fetch(`https://fakestoreapi.com/products/${id}`)
            let data=await response.json();
            setProduct(data)

        }
        getProduct();
    },[])
  return (
    <div>

        <div className='grid grid-cols-2 p-10'>
            <div className='h-[500px] flex justify-center items-center'>
                <img src={product.image} alt={product.title} className='w-[400px] h-[400px]'/>

            </div>
            <div className='bg-[#1b2430] p-10 flex flex-col gap-3'>
                <div className='w-96 h-20 flex justify-center items-center text-[#ffffff] font-[200] text-[30px]'>
                    <h1>{product.category}</h1>
                </div>
                <div className='w-96  text-[#ffffff] font-bold text-[2rem]'>
                    <h1>{product.title}</h1>
                </div>
                <div className='w-[500px] text-[#ffffff] '>
                    <p>{product.description}</p>
                </div>
                <div className='w-12 text-[#ffffff]'>
                    <h2 className='flex w-96  items-center'>Rating: {product.rating && product.rating.rate}<IoMdStar color='#ffffff'/></h2>
                    
                </div>
                <div className='w-12 text-[#ffffff] text-[20px]'>
                    <h2 className='w-96 flex items-center'>Price: ${product.price}</h2>
                </div>

                <div className='w-96 h-20 flex  gap-5'>
                    <button onClick={handeladdCart} className='w-[200px] h-[50px] bg-[#17cf97] hover:bg-transparent hover:border-2 duration-500 ease-linear  text-[#ffffff] flex justify-center items-center'>Add To Cart</button>
                    <NavLink to={"/cart"} className='w-[200px] h-[50px]  border-2  hover:bg-[#17cf97]  duration-500 ease-linear  text-[#ffffff] flex justify-center items-center'>Show Cart</NavLink>
                </div>


            </div>

        </div>
   

      

    </div>
  )
}

export default Product;