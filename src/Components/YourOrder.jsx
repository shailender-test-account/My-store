import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { complete } from '../Reducers/Userslice';
import { TiTick } from "react-icons/ti";


function YourOrder() {
    const dispatch = useDispatch();
    const userprofile = useSelector(state => state.userRed.orderprofile);

    const success = useSelector(state => state.userRed.success)
    console.log(success)


    return (
        <>
            {success ? <div className='w-100 h-[600px]  flex justify-center items-center bg-[#1b2430]  text-[2rem] text-[#17cf97] font-serif font-bold'><TiTick size={30} color='#17cf97'/>Your Order is successfully submited</div> : <div>

                <div className='row bg-[#1b2430] flex flex-col  items-center gap-5'>
                    <div className='w-96 h-20  shadow-lg flex justify-center items-center mt-5'>
                        <h1 className='text-[2rem] text-[#17cf97] font-bold font-serif'>Your Information</h1>

                    </div>
                    <div className='col-12 flex  flex-col  items-center gap-8 shadow-slate-500'>
                        <div className='min-w-[600px] flex justify-center'>
                            <h1 className='text-[#17cf97] text-[20px] flex gap-3'>Name:<span className='text-[#ffffff]'>{userprofile.Fname}{userprofile.Lname}</span></h1>
                        </div>
                        <div className='min-w-[600px] flex justify-center'>
                            <h1 className='text-[#17cf97] text-[20px] flex gap-3'>Address:<span className='text-[#ffffff]'>{userprofile.address}</span></h1>
                        </div>
                        <div className='min-w-[600px] flex justify-center'>
                            <h1 className='text-[#17cf97] text-[20px] flex gap-3'>City:<span className='text-[#ffffff]'>{userprofile.city}</span></h1>
                        </div>
                        <div className='min-w-[600px] flex justify-center'>
                            <h1 className='text-[#17cf97] text-[20px] flex gap-3'>Zip-code:<span className='text-[#ffffff]'>{userprofile.postalcode}</span></h1>
                        </div>
                        <div className='min-w-[600px] flex justify-center'>
                            <h1 className='text-[#17cf97] text-[20px] flex gap-3'>Region:<span className='text-[#ffffff]'>{userprofile.region}</span></h1>
                        </div>
                        <div className='min-w-[600px] flex justify-center'>
                            <h1 className='text-[#17cf97] text-[20px] flex gap-3'>State:<span className='text-[#ffffff]'>{userprofile.region}</span></h1>
                        </div>


                    </div>

                    <div className='w-500px flex justify-center items-center gap-5'>
                        <button className='w-[200px] h-[50px] bg-[#17cf97]  hover:bg-[#3272b2] duration-300 ease-linear flex justify-center items-center text-[#ffffff]' onClick={() => dispatch(complete(true))}>Cash On Delivery</button>
                        <button className='w-[200px] h-[50px] hover:bg-[#3272b2] duration-300 ease-linear bg-[#17cf97]  flex justify-center items-center text-[#ffffff]'>Pay Now</button>
                    </div>

                </div>



            </div>}
        </>
    )
}

export default YourOrder;