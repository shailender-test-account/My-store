import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../Reducers/Userslice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Signup() {
    const Navigate=useNavigate();

    const dispatch = useDispatch();   
    const [input, setInput] = useState({
        
        email: "",
        password: "",
        confirmpassword: ""

    });

    const handelInnput = (e) => {

        const { name, value } = e.target;
        setInput((prev) => {
            return (
                {
                    ...prev,
                    [name]: value
                }
            )
        }
      )

    }

    const handelsubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(input));
        setInput({
            email: "",
            password: "",
            confirmpassword: ""

        })
        Navigate("/login")



    }


    return (
        <div>
            <div>
                <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
                    <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
                        <div className="text-center mb-12">
                            <h1 className='text-[#1b2430] font-bold'>Create Your Account</h1>
                        </div>

                        <form>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                                    <input onChange={handelInnput} value={input.email} name="email" type="email" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="abc@gmail.com" />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                    <input onChange={handelInnput} value={input.password} name="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                                    <input onChange={handelInnput} value={input.confirmpassword} name="confirmpassword" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
                                </div>

                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label for="remember-me" className="text-gray-800 ml-3 block text-sm">
                                        I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                    </label>
                                </div>
                            </div>

                            <div className="!mt-12">
                                <button type="button" onClick={handelsubmit} className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                    Create an account
                                </button>
                            </div>
                            <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link to={"/login"} className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;