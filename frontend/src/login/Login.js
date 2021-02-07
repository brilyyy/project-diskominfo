import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        alert(email + ' = ' + password)
        event.preventDefault()
    }

    return (
        <div className='bg-gradient-to-br from-blue-400 to-blue-200 w-full h-screen flex justify-center items-center'>   
            <div className=' bg-gray-100 p-8 rounded-xl shadow  '>
                <h2 className='antialiased text-3xl text-center mb-14 ' >Log in</h2>
                <form className='w-full' onSubmit={handleSubmit}>
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                    <input type="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={event => setEmail(event.target.value)} />

                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                    <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={event => setPassword(event.target.value)} />

                    <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block mt-3">
                        <span className="inline-block mr-2">Login</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login