import React, { useState, useEffect, useMemo } from "react"
import Pagination from "./pagination/Pagination"
import Header from "./Header"
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Table = () => {
  let history = useHistory()
  const [data, setData] = useState({})
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const ITEMS_PER_PAGE = 10


  useEffect(() => {
    axios
        .get('http://localhost:8000/api/users', {
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
          }
        })
        .then(response => {
            setData(response.data.data)
        })
  }, [])

  const usersData = useMemo(() => {
    let computedData = Array.from(data)

    setTotalItems(computedData.length)

    return computedData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )
  }, [data, currentPage])

  return (
    <div >
    <div className='flex items-center w-full justify-between p-3 select-none' >
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
            
            usersData.length !== 0
            ? 
            usersData.map((user, key) => (
            <tr className="text-center hover:bg-gray-300 cursor-pointer select-none h-11" 
            key={key}
            onClick={()=>{history.push(`/konfigurasi/${user.id}`)}}
            >
              <td className="border border-green-600">{user.name}</td>
              <td className="border border-green-600">{user.username}</td>
              <td className="border border-green-600">{user.email}</td>
            </tr>
          )) 
          : 
          <tr className="text-center">
              <td colSpan="5" className="border border-green-600 p-5">
                <span className="text-xl">
                  Data Not Found
                </span>
              </td>
            </tr>
            
          }
        </tbody>
      </table>
      
    </div>
  );
}

export default Table
