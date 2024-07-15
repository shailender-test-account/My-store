import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addOrderProfile } from '../Reducers/Userslice';
import { useNavigate } from 'react-router-dom';


function Placeorder() {
    const dispatch=useDispatch();
    const Orders=useSelector(state =>state.cartRed.products);
    const Navigate=useNavigate();

    const[profile,setProfile]=useState({
        Fname:"",
        Lname:"",
        email:"",
        country:"",
        address:"",
        city:"",
        region:"",
        postalcode:"",

    });

    const handelProfile=(e)=>{
        const{name,value}=e.target;
        setProfile((prev)=>{
            return(
                {
                    ...prev,
                    [name]:value
                }
            )
        })

    }

    const handelSubmit=(e)=>{
        e.preventDefault();
        dispatch(addOrderProfile(profile))
        setProfile({
            Fname:"",
            Lname:"",
            email:"",
            country:"",
            address:"",
            city:"",
            region:"",
            postalcode:"",

        })

        Navigate("/userprofile");


    }
    return (
        <>

            <div className=' row row-cols-2'>
                <div className=' col-6'>
                    <form  className='p-20'>
                        <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="leading-7 text-[#1b2430] text-[30px] font-serif font-bold">Place Order</h2>
                            <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-3">
                                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                    <div class="mt-2">
                                        <input type="text" onChange={handelProfile} name="Fname" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                    <div class="mt-2">
                                        <input type="text"  onChange={handelProfile} name="Lname" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-4">
                                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div class="mt-2">
                                        <input id="email"  onChange={handelProfile} name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                    <div class="mt-2">
                                        <select id="country"  onChange={handelProfile} name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                            <option>India</option>

                                        </select>
                                    </div>
                                </div>

                                <div class="col-span-full">
                                    <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                    <div class="mt-2">
                                        <input type="text"  onChange={handelProfile} name="address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-2 sm:col-start-1">
                                    <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                                    <div class="mt-2">
                                        <input type="text"  onChange={handelProfile} name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                    <div class="mt-2">
                                        <input type="text"  onChange={handelProfile} name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                    <div class="mt-2">
                                        <input type="text"  onChange={handelProfile} name="postalcode" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>
                        </div>

                       


                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                            <button type="submit" onClick={handelSubmit} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy</button>
                        </div>
                    </form>

                </div>
                <div className='col-6 bg-[#1b2430] p-12 flex flex-col gap-5'>
                    <h1 className='text-[2rem] text-[#ffffff] '>Product <span  className='text-[#17cf97]'>Summary</span></h1>
                    {Orders.map((item)=>{
                        return(
                            <div key={item.id} className='flex p- gap-10 justify-center items-center'>
                                <div className=' w-40'>
                                    <img src={item.image} alt={item.title}/>
                                </div>
                                <div className='text-[#ffffff] font-serif flex flex-col gap-y-3'>
                                    <h1 className='text-[20px] font-bold'>{item.title}</h1>
                                    <p className='text-[12px] font-[200]'>{item.description}</p>
                                    <h2>${item.price*item.qty}</h2>
                                    <h3>Qty:{item.qty}</h3>
                                    
                                </div>


                            </div>
                        )
                    })}

                </div>

            </div>


        </>
    )
}

export default Placeorder;