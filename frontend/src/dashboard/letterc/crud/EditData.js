import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const EditData = () => {
    let { id } = useParams()
    let history = useHistory()
    const [data, setData] = useState({
        created_at: '',
        desa_darat: '',
        desa_sawah: '',
        foto: '',
        gol_bangunan: '',
        id: null,
        luas_bangunan: '',
        luas_darat: '',
        luas_sawah: '',
        mutasi_bangunan: '',
        mutasi_bumi: '',
        nama: '',
        nasional_darat: '',
        nasional_sawah: '',
        no_persil_bangunan: '',
        no_persil_darat: '',
        no_persil_sawah: '',
        nomor: null,
        pajak_bangunan:'',
        pajak_darat: '',
        pajak_sawah: '',
        updated_at: '',
        user_id: null,
    })

    const handleChange = (name, value) => {
        setData({...data, [name]: value})
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
            console.log(response.data.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])

    return(
        <div className='bg-mac-panel-light p-4 min-h-screen'>
            <h1 className='mb-6 text-3xl font-bold'>Ubah Data</h1>
            <form onSubmit={handleSubmit} onChange = {e => handleChange(e.target.name, e.target.value)} >
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
                            value={ data.nama }
                            
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
                            value={ data.nomor }
                            
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
                            value={ data.no_persil_sawah }
                            
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
                            value={ data.desa_sawah }
                            
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
                            value={ data.nasional_sawah }
                            
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
                            value={ data.luas_sawah }
                            
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
                            value={ data.pajak_sawah }
                            
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
                            value={ data.mutasi_bumi }
                            
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
                            value={ data.no_persil_darat }
                            
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
                            value={ data.desa_darat }
                            
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
                            value={ data.nasional_darat }
                            
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
                            value={ data.luas_darat }
                            
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
                            value={ data.pajak_darat }
                            
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
                            value={ data.no_persil_bangunan }
                            
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
                            value={ data.gol_bangunan }
                            
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
                            value={ data.luas_bangunan }
                            
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
                            value={ data.pajak_bangunan }
                            
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
                            value={ data.mutasi_bangunan }
                            
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
                            value={ data.foto }
                            
                            />
                        </div>
                        </div>
                    </div>
                    {/* End of input htmlForm */}
                </div>
            </div>
            <div className='mt-10 flex flex-row-reverse'>
                <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none">Large</button>
            </div>
            </form>
        </div>
    )
}


export default EditData