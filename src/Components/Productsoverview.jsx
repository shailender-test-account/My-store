import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Productsoverview() {

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    // console.log(products)
    console.log(filter)
    useEffect(() => {

        const getProducts = async () => {
            let response = await fetch("https://fakestoreapi.com/products");
            let data = await response.json();
            setProducts(data);
            setFilter(data);

        }


        getProducts();

    }, [])

    const filterProducts = (cat) => {
        const updatedlist = products.filter((item) => (item.category === cat));
        setFilter(updatedlist);

    }

    return (
        <div>
            <div className='w-full min-h-[400px] flex  flex-col '>
                <div className='w-full h-32 flex flex-col items-center justify-center gap-y-3'>
                    <h1 className='text-[#1b2430] text-[2rem] '>PRODUCT <span className='text-[#17cf97]'>OVERVIEW</span></h1>
                    <div className='w-56 h-1 bg-[#1b2430] rounded-xl'></div>
                </div>
                <div className=' container border-2'>
                    <div className='w-full flex justify-center items-center gap-5'>
                        <button onClick={() => setFilter(products)} className={({ isActive }) => `
                         font-[200] text-[18px] ${isActive ? ' text-[#17cf97]' : ' text-[#1b2430]'}
                         
                                               `}>

                            All Products
                        </button>

                        <button onClick={() => filterProducts("men's clothing")} className={({ isActive }) => `
                         font-[200] text-[18px] ${isActive ? ' text-[#17cf97]' : ' text-[#1b2430]'}
                         
                         
                        `}>

                            Mens Clothing
                        </button>

                        <button onClick={() => filterProducts("women's clothing")} className={({ isActive }) => `
                         font-[200] text-[18px] ${isActive ? ' text-[#17cf97]' : ' text-[#1b2430]'}
                         
                         
                        `}>

                            Womens Clothing
                        </button>

                        <button onClick={() => filterProducts("jewelery")} className={({ isActive }) => `
                         font-[200] text-[18px] ${isActive ? ' text-[#17cf97]' : ' text-[#1b2430]'}
                         
                         
                        `}>

                            Jwellary
                        </button>

                        <button onClick={() => filterProducts("electronics")} className={({ isActive }) => `
                         font-[200] text-[18px] ${isActive ? ' text-[#17cf97]' : ' text-[#1b2430]'}
                         
                         
                        `}>

                            Electronics
                        </button>

                    </div>

                    <div className=' grid grid-cols-3 gap-5 mt-10 p-5'>

                        {filter.map((item) => {
                            return (
                                <div key={item.id}>


                                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                                        <div className='w-full  flex justify-center items-center mt-2'>
                                            <img className="rounded-t-lg w-60 h-52" src={item.image} alt={item.title} />
                                        </div>
                                        <div className="p-5">

                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>

                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ">{item.description}</p>
                                            <NavLink to={`/products/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Buy Now
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </NavLink>
                                        </div>
                                    </div>


                                </div>

                            )
                        })}





                    </div>

                </div>

            </div>

        </div>
    )
}

export default Productsoverview;