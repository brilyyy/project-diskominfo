import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const TambahData = () => {
    let history = useHistory()
    const [data, setData] = useState({
        name: '',
        username: '',
        password: '',
        password_confirmation: '',
        email: '',
        permissions: [],
        village_id: 0,
    })
    const [village, setVillage] = useState({})
    const [permission, setPermission] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/villages', {
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(response => {
                setVillage(response.data.data)
            })
            .catch(err => {
                console.log(err.response)
            })
        axios.get('http://localhost:8000/api/permissions', {
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(response => {
                setPermission(response.data.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }, [])

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }

    const handleSubmit = e => {
        e.preventDefault()

        // console.log(data);
        axios.post('http://localhost:8000/api/register', data, {
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err.response)
            })
        history.push('/konfigurasi')
    }

    const handleCheckBox = e => {
        console.log(e.target.value)
        data.permissions = [...data.permissions, e.target.value]
        if( data.permissions.includes(e.target.value) )
        {
            console.log('ok')

        }
    }

    return (
        <div className='bg-mac-panel-light p-4 min-h-screen'>
            <h1 className='mb-6 text-3xl font-bold'>Tambah Data</h1>
            <form onSubmit={handleSubmit} >
                {
                    localStorage.getItem('admin') === 'true' ? <select name="village_id" onChange={handleChange}>
                        <option value="">All</option>
                        {Array.from(village).map((village, key) => (
                            <option value={village.id} key={key}>{village.nama_desa}</option>
                        ))}
                    </select>
                        :
                        <></>
                }

                {
                    Array.from(permission).map((permission, key) => (
                        <input
                            type="checkbox"
                            value={permission.name}
                            key={key}
                            onChange={handleCheckBox}
                        />
                    ))
                }


                <div>
                    <div>
                        {/* Input htmlForm */}
                        <div className='mb-6'>
                            <div className="text-gray-700 md:flex md:items-center">
                                <div className="mb-1 md:mb-0 md:w-1/3">
                                    <label
                                        htmlFor="name"
                                    >
                                        name</label>
                                </div>
                                <div className="md:w-2/3 md:flex-grow">
                                    <input
                                        className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                                        type="text"
                                        id="name"
                                        name="name"
                                        autoComplete="off"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <div className="text-gray-700 md:flex md:items-center">
                                <div className="mb-1 md:mb-0 md:w-1/3">
                                    <label
                                        htmlFor="email"
                                    >
                                        email</label>
                                </div>
                                <div className="md:w-2/3 md:flex-grow">
                                    <input
                                        className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                                        type="text"
                                        id="email"
                                        name="email"
                                        autoComplete="off"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <div className="text-gray-700 md:flex md:items-center">
                                <div className="mb-1 md:mb-0 md:w-1/3">
                                    <label
                                        htmlFor="username"
                                    >
                                        Username</label>
                                </div>
                                <div className="md:w-2/3 md:flex-grow">
                                    <input
                                        className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                                        type="text"
                                        id="username"
                                        name="username"
                                        autoComplete="off"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <div className="text-gray-700 md:flex md:items-center">
                                <div className="mb-1 md:mb-0 md:w-1/3">
                                    <label
                                        htmlFor="password"
                                    >
                                        Password</label>
                                </div>
                                <div className="md:w-2/3 md:flex-grow">
                                    <input
                                        className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                                        type="text"
                                        id="password"
                                        name="password"
                                        autoComplete="off"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <div className="text-gray-700 md:flex md:items-center">
                                <div className="mb-1 md:mb-0 md:w-1/3">
                                    <label
                                        htmlFor="password_confirmation"
                                    >
                                        Password Confirmation</label>
                                </div>
                                <div className="md:w-2/3 md:flex-grow">
                                    <input
                                        className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                                        type="text"
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        autoComplete="off"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>


                        {/* End of input form */}
                    </div>
                </div>
                <div className='mt-10 flex flex-row-reverse'>
                    <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none">Simpan</button>
                </div>
            </form>
        </div>
    )
}

export default TambahData