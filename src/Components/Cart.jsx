import React from 'react'
import { useSelector } from 'react-redux'
import { IoMdStar } from "react-icons/io";

function Cart() {
    const Carts = useSelector(state => state.products);

    return (
        <div>
            {Carts.map((item) => {
                return (
                    <div key={item.id}>

                        <div className='grid grid-cols-2 p-10'>
                            <div className='h-[500px] flex justify-center items-center'>
                                <img src={item.image} alt={item.title} className='w-[400px] h-[400px]' />

                            </div>
                            <div className='bg-[#1b2430] p-10 flex flex-col gap-3'>
                                <div className='w-96 h-20 flex justify-center items-center text-[#ffffff] font-[200] text-[30px]'>
                                    <h1>{item.category}</h1>
                                </div>
                                <div className='w-96  text-[#ffffff] font-bold text-[2rem]'>
                                    <h1>{item.title}</h1>
                                </div>
                                <div className='w-[500px] text-[#ffffff] '>
                                    <p>{item.description}</p>
                                </div>
                                <div className='w-12 text-[#ffffff]'>
                                    <h2 className='flex w-96  items-center'>Rating: {item.rating && item.rating.rate}<IoMdStar color='#ffffff' /></h2>

                                </div>
                                <div className='w-12 text-[#ffffff] text-[20px]'>
                                    <h2 className='w-96 flex items-center'>Price: ${item.price}</h2>
                                </div>
                                <div className='w-12 text-[#ffffff] text-[20px]'>
                                    <h2 className='w-96 flex items-center'>Quantity: ${item.qty}</h2>
                                </div>

                               

                                <div className='w-96 h-20 flex  gap-5'>
                                    <button className='w-[200px] h-[50px] bg-[#17cf97] hover:bg-transparent hover:border-2 duration-500 ease-linear  text-[#ffffff] flex justify-center items-center'>Remove Cart</button>
                                   
                                </div>




                            </div>

                        </div>

                    </div>

                )
            })}

        </div>
    )
}

export default Cart