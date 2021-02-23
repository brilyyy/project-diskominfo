import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const TambahData = () => {
    let history = useHistory()

    const [data, setData] = useState({})

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value})
        console.log(data)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/lettercs', data, {
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err.response)
        })
        history.push('/letterc')
    }

    return(
        <div>
            <h1 className='mb-6 text-3xl font-bold'>Tambah Data</h1>
            <form onChange={handleChange} onSubmit={handleSubmit} >
            <div>
                <div>
                    {/* Input htmlForm */}
                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="nama"
                            >
                            Nama Wajib Pajak</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="nama" 
                            name="nama" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="nomor"
                            >
                            Nomor</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="number" 
                            id="nomor" 
                            name="nomor" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="no_persil_sawah"
                            >
                            Nomor Persil dan Bagian Persil</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="no_persil_sawah" 
                            name="no_persil_sawah" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="desa_sawah"
                            >
                            Desa</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="desa_sawah" 
                            name="desa_sawah" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="nasional_sawah"
                            >
                            Nasional</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="nasional_sawah" 
                            name="nasional_sawah" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="luas_sawah"
                            >
                            Luas (m2) </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="luas_sawah" 
                            name="luas_sawah" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="pajak_sawah"
                            >
                            Pajak (Rp) </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="pajak_sawah" 
                            name="pajak_sawah" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="mutasi_bumi"
                            >
                            Mutasi </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="mutasi_bumi" 
                            name="mutasi_bumi" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="no_persil_darat"
                            >
                            Nomor Persil dan Bagian Persil </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="no_persil_darat" 
                            name="no_persil_darat" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="desa_darat"
                            >
                            Desa </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="desa_darat" 
                            name="desa_darat" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="nasional_darat"
                            >
                            Nasional </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="nasional_darat" 
                            name="nasional_darat" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="luas_darat"
                            >
                            Luas (m2) </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="luas_darat" 
                            name="luas_darat" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="pajak_darat"
                            >
                            Pajak (Rp) </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="pajak_darat" 
                            name="pajak_darat" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="no_persil_bangunan"
                            >
                            Nomor Persil dan Bagian Persil</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="no_persil_bangunan" 
                            name="no_persil_bangunan" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="gol_bangunan"
                            >
                            Golongan</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="gol_bangunan" 
                            name="gol_bangunan" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="luas_bangunan"
                            >
                            Luas (m2)</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="luas_bangunan" 
                            name="luas_bangunan" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="pajak_bangunan"
                            >
                            Pajak (Rp)</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="pajak_bangunan" 
                            name="pajak_bangunan" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="mutasi_bangunan"
                            >
                            Mutasi</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="mutasi_bangunan" 
                            name="mutasi_bangunan" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            htmlFor="foto"
                            >
                            Foto</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="foto" 
                            name="foto" 
                            autoComplete="off"
                            />
                        </div>
                        </div>
                    </div>
                    {/* End of input form */}
                </div>
            </div>
            <div className='mt-10 flex flex-row-reverse'>
                <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none">Large</button>
            </div>
            </form>
        </div>
    )
}

export default TambahData