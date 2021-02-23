import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const TambahData = () => {
    let { id } = useParams()
    let history = useHistory()
    const [data, setData] = useState({})

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value})
        console.log(data)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/lettercs/' + id, data, {
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

    useEffect(() => {
        axios.get('http://localhost:8000/api/lettercs/' + id, {
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
        .then(response => {
            setData(response.data.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])

    return(
        <div>
            <h1 className='mb-6 text-3xl font-bold'>Ubah Data</h1>
            <form onChange={handleChange} onSubmit={handleSubmit} >
            <div>
                <div>
                    {/* Input form */}
                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="nama"
                            >
                            Nama Wajib Pajak</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="nama" 
                            name="nama" 
                            autocomplete="off"
                            value={ data.nama }
                            />
                        </div>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="nomor"
                            >
                            Nomor</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="number" 
                            id="nomor" 
                            name="nomor" 
                            autocomplete="off"
                            value={ data.nomor }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="no_persil_sawah"
                            >
                            Nomor Persil dan Bagian Persil</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="no_persil_sawah" 
                            name="no_persil_sawah" 
                            autocomplete="off"
                            value={ data.no_persil_sawah }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="desa_sawah"
                            >
                            Desa</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="desa_sawah" 
                            name="desa_sawah" 
                            autocomplete="off"
                            value={ data.desa_sawah }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="nasional_sawah"
                            >
                            Nasional</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="nasional_sawah" 
                            name="nasional_sawah" 
                            autocomplete="off"
                            value={ data.nasional_sawah }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="luas_sawah"
                            >
                            Luas (m2) </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="luas_sawah" 
                            name="luas_sawah" 
                            autocomplete="off"
                            value={ data.luas_sawah }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="pajak_sawah"
                            >
                            Pajak (Rp) </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="pajak_sawah" 
                            name="pajak_sawah" 
                            autocomplete="off"
                            value={ data.pajak_sawah }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="mutasi_bumi"
                            >
                            Mutasi </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="mutasi_bumi" 
                            name="mutasi_bumi" 
                            autocomplete="off"
                            value={ data.mutasi_bumi }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="no_persil_darat"
                            >
                            Nomor Persil dan Bagian Persil </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="no_persil_darat" 
                            name="no_persil_darat" 
                            autocomplete="off"
                            value={ data.no_persil_darat }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="desa_darat"
                            >
                            Desa </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="desa_darat" 
                            name="desa_darat" 
                            autocomplete="off"
                            value={ data.desa_darat }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="nasional_darat"
                            >
                            Nasional </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="nasional_darat" 
                            name="nasional_darat" 
                            autocomplete="off"
                            value={ data.nasional_darat }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="luas_darat"
                            >
                            Luas (m2) </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="luas_darat" 
                            name="luas_darat" 
                            autocomplete="off"
                            value={ data.luas_darat }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="pajak_darat"
                            >
                            Pajak (Rp) </label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="pajak_darat" 
                            name="pajak_darat" 
                            autocomplete="off"
                            value={ data.pajak_darat }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="no_persil_bangunan"
                            >
                            Nomor Persil dan Bagian Persil</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="no_persil_bangunan" 
                            name="no_persil_bangunan" 
                            autocomplete="off"
                            value={ data.no_persil_bangunan }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="gol_bangunan"
                            >
                            Golongan</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="gol_bangunan" 
                            name="gol_bangunan" 
                            autocomplete="off"
                            value={ data.gol_bangunan }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="luas_bangunan"
                            >
                            Luas (m2)</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="luas_bangunan" 
                            name="luas_bangunan" 
                            autocomplete="off"
                            value={ data.luas_bangunan }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="pajak_bangunan"
                            >
                            Pajak (Rp)</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="pajak_bangunan" 
                            name="pajak_bangunan" 
                            autocomplete="off"
                            value={ data.pajak_bangunan }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="mutasi_bangunan"
                            >
                            Mutasi</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="mutasi_bangunan" 
                            name="mutasi_bangunan" 
                            autocomplete="off"
                            value={ data.mutasi_bangunan }
                            />
                        </div>
                        </div>
                    </div>

                    <div className='mb-6'>
                        <div className="text-gray-700 md:flex md:items-center">
                        <div className="mb-1 md:mb-0 md:w-1/3">
                            <label 
                            for="foto"
                            >
                            Foto</label>
                        </div>
                        <div className="md:w-2/3 md:flex-grow">
                            <input 
                            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                            type="text" 
                            id="foto" 
                            name="foto" 
                            autocomplete="off"
                            value={ data.foto }
                            />
                        </div>
                        </div>
                    </div>
                    {/* End of input form */}
                </div>
            </div>
            <div className='mt-10 flex flex-row-reverse'>
                <button class="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none">Large</button>
            </div>
            </form>
        </div>
    )
}

export default TambahData