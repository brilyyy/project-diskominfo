import React, { useState, useEffect, useMemo } from "react"
import { useHistory } from 'react-router-dom'
import Pagination from "./pagination/Pagination"
import Header from "./Header"
import Search from './Search'
import axios from 'axios'
import FadeLoader from 'react-spinners/FadeLoader'

const Table = () => {
  const history = useHistory()
  const [data, setData] = useState({})
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const [deleteModal, setDeleteModal] = useState()
  const [activeItem, setActiveItem] = useState()
  const [namaItem, setNamaItem] = useState()
  const [navbar, setNavbar] = useState(false)
  const [loading, setLoading] = useState(true)
  const [village, setVillage] = useState({})
  const [searchVillage, setSearchVillage] = useState('')

  const ITEMS_PER_PAGE = 20


  useEffect(() => {
    axios.get('http://localhost:8000/api/lettercs',{
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
        .then(response => {
            setData(response.data.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err.response)
        })
    axios.get('http://localhost:8000/api/villages',{
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
        .then(response => {
            setVillage(response.data.data)
        })
        .catch(err => {
            console.log(err.response)
        })
  }, [])

  const lettercData = useMemo(() => {
    let computedData = Array.from(data)
    if(search){
      computedData = computedData.filter( 
        data => 
        data.nama.toLowerCase().indexOf(search.toLowerCase()) > -1
       )
    }

    if(searchVillage){
      computedData = computedData.filter( 
        i => {
          console.log(i)
          return String(i.user_id) === searchVillage
          }
       )
       console.log(computedData)
    }

    setTotalItems(computedData.length)

    return computedData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )
  }, [data, currentPage, search, searchVillage])

  const handleDelete = () => {
        axios.delete('http://localhost:8000/api/lettercs/' + activeItem, {
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
        .then(response => {
            setDeleteModal(false)
            history.go(0)
        })
        .catch(err => {
            console.log(err.response)
        })
  }

  const changeNavbar = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false)
  }

  window.addEventListener('scroll', changeNavbar)

  const handleChange = e => {
    setSearchVillage(e.target.value)
  }

  return (
    <div >
    <div className={ 'transition-all duration-500 flex items-center w-full justify-between py-3 select-none sticky top-0 ' + (!navbar ? '' : 'bg-gradient-to-b from-mac-light-gray to-mac-gray drop-shadow-md p-3 rounded-sm') } >
      <Search onSearch={(value) => {
        setSearch(value)
        setCurrentPage(1)
      }} />
      {
        localStorage.getItem('admin') === 'true' ? <select name="" id="" onChange={handleChange}>
        <option value="">All</option>
        { Array.from(village).map((village, key) => (
          <option value={village.id} key={key}>{village.nama_desa}</option>
        )) }
        </select>
        :
        <></>
      }

      <Pagination 
          total = {totalItems}
          itemsPerPage = {ITEMS_PER_PAGE}
          currentPage = {currentPage}
          onPageChange = {(page) => setCurrentPage(page)}
      />
      <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:outline-none hover:bg-indigo-800" onClick={() => {history.push('/letterc/tambah')}} >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" fillRule="evenodd"></path></svg>
      </button>
    </div>
      
      <table className="border-collapse border w-full">
        <Header />
        <tbody>
          {
            lettercData.length !== 0
            ? 
            lettercData.map((letterc, key) => (
            <tr className="text-center h-11 select-none cursor-pointer hover:bg-pink-300"
            key={key}>
              <td className="border border-green-600">{letterc.nama}</td>
              <td className="border border-green-600">{letterc.nomor}</td>
              <td className="border border-green-600">{letterc.tempat_tinggal}</td>
              <td className="border border-green-600">{letterc.no_persil_sawah}</td>
              <td className="border border-green-600">{letterc.desa_sawah}</td>
              <td className="border border-green-600">
                {letterc.nasional_sawah}
              </td>
              <td className="border border-green-600">{letterc.no_persil_darat}</td>
              <td className="border border-green-600">{letterc.desa_darat}</td>
              <td className="border border-green-600">
                {letterc.nasional_darat}
              </td>
              <td className="border border-green-600">{letterc.no_persil_bangunan}</td>
              <td className="border border-green-600">{letterc.gol_bangunan}</td>
              <td className="border border-green-600">
                <span 
                className="px-1 cursor-pointer" 
                onClick={() => {history.push(`/letterc/ubah/${letterc.id}`)}} >✏</span>
                <span 
                className="px-1 cursor-pointer" 
                onClick={() => {history.push(`/letterc/cetak/${letterc.id}`)}} >🖨</span>
                <span 
                className="px-1 cursor-pointer" 
                onClick={() => {
                  setDeleteModal(true)
                  setActiveItem(letterc.id)
                  setNamaItem(letterc.nama)
                }} >🗑</span>
              </td>
            </tr>
          )) 
          : 
          <tr className="text-center">
              <td colSpan="12" className="border border-green-600 p-5">
                {loading ? <FadeLoader/> : <span className="text-xl">
                  Data Not Found
                </span>}
              </td>
          </tr>
            
          }
        </tbody>
      </table>
      
      {
        !deleteModal ? 
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
                            Apakah anda yakin untuk menghapus data {namaItem}
                        </p> 
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button 
                    type="button" 
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleDelete}
                    >
                    Hapus
                    </button>

                    <button 
          type="button" 
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => {setDeleteModal(false)}}
          
          >
          Cancel
          </button>
                </div>
                </div>
            </div>
            </div>
          
          
        
      }
      
    </div>
  );
}

export default Table
