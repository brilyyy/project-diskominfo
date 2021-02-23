/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'

const Login = () => {
    let history = useHistory()
    const [user, setUser] = useState({})
    const [failed, setFailed] = useState(false)

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post('http://localhost:8000/api/login', user)
            .then(response => {
                localStorage.setItem('accessToken', response.data.data.access_token)
                history.push('/')
            })
            .catch(error => {
                setFailed(true)
            })
    }

    return (
        <div className='bg-gradient-to-br from-blue-400 to-blue-200 w-full h-screen flex justify-center items-center'>
                <div className=' bg-gray-100 p-8 rounded-xl shadow  '>
                <h2 className='antialiased text-3xl text-center mb-14 ' >Log in</h2>
                <form className='w-full' onSubmit={handleSubmit} onChange={handleChange} >
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
                    <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" name="username" autoComplete="off" />

                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                    <input type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" name="password" />

                    <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block mt-3">
                        <span className="inline-block mr-2">Login</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </form>
            </div>
            {
        !failed ? 
        <></>
        :
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">h</span>
                
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                        Hapus Data
                        </h3>
                        <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            Login Gagal
                        </p> 
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button 
                    type="button" 
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={()=>{setFailed(false)}}
                    >
                    OK
                    </button>
                </div>
                </div>
            </div>
            </div>
          
          
        
      }
        </div>
    )
}

export default Login