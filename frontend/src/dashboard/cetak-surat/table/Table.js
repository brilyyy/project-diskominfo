import React, { useState, useEffect, useMemo } from "react"
import Pagination from "./pagination/Pagination"
import Header from "./Header"
import Search from './Search'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {generateSuratTanah} from '../generator/GenerateDocument'

const Table = () => {
  const [data, setData] = useState({})
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  let history = useHistory()

  const ITEMS_PER_PAGE = 20


  useEffect(() => {
    axios.get('http://localhost:8000/api/lettercs',{
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

  const lettercData = useMemo(() => {
    let computedData = Array.from(data)

    if(search){
      computedData = computedData.filter( 
        data => 
        data.nama.toLowerCase().indexOf(search.toLowerCase()) > -1
       )
    }

    setTotalItems(computedData.length)

    return computedData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )
  }, [data, currentPage, search])
  

  return (
    <div >
    <div className='flex items-center w-full justify-between p-3 select-none' >
      <Search onSearch={(value) => {
        setSearch(value)
        setCurrentPage(1)
      }} />
      <Pagination 
          total = {totalItems}
          itemsPerPage = {ITEMS_PER_PAGE}
          currentPage = {currentPage}
          onPageChange = {(page) => setCurrentPage(page)}
      />
    </div>
      
      <table className="border-collapse border border-green-800 w-full">
        <Header />
        <tbody>
          {
            
            lettercData.length !== 0
            ? 
            lettercData.map((letterc, key) => (
            <tr 
            onClick={()=>{generateSuratTanah(letterc.id)}}
            className="text-center h-11 select-none cursor-pointer hover:bg-pink-300"
            key={key}>
              <td className="border border-green-600">{letterc.nama}</td>
              <td className="border border-green-600">{letterc.nomor}</td>
            </tr>
          )) 
          : 
          <tr className="text-center">
              <td colSpan="11" className="border border-green-600 p-5">
                <span className="text-xl">
                  Data Not Found
                </span>
              </td>
            </tr>
            
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
