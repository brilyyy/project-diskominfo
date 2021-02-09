import React, { useState, useEffect, useMemo } from "react"
import { useHistory } from 'react-router-dom'
import Pagination from "./pagination/Pagination"
import Header from "./Header"
import Search from './Search'
import fakedata from "./fakedata.json"

const Table = () => {
  const history = useHistory()
  const [data, setData] = useState({})
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  const ITEMS_PER_PAGE = 20


  useEffect(() => {
    setData(fakedata)
  }, [])

  const lettercData = useMemo(() => {
    let computedData = Array.from(data)

    if(search){
      computedData = computedData.filter( 
        data => 
        data.nama.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        data.nomor.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        data.foto.toLowerCase().indexOf(search.toLowerCase()) > -1
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
      <span className="px-1 bg-red-400 rounded-full cursor-pointer" onClick={() => {
        history.push('/letterc/tambah')
      }}>➕</span>
    </div>
      
      <table className="border-collapse border border-green-800 w-full">
        <Header />
        <tbody>
          {
            
            lettercData.length !== 0
            ? 
            lettercData.map((letterc) => (
            <tr className="text-center">
              <td className="border border-green-600">{letterc.nama}</td>
              <td className="border border-green-600">{letterc.nomor}</td>
              <td className="border border-green-600">{letterc.noSawah}</td>
              <td className="border border-green-600">{letterc.desaSawah}</td>
              <td className="border border-green-600">
                {letterc.nasionalSawah}
              </td>
              <td className="border border-green-600">{letterc.noDarat}</td>
              <td className="border border-green-600">{letterc.desaDarat}</td>
              <td className="border border-green-600">
                {letterc.nasionalDarat}
              </td>
              <td className="border border-green-600">{letterc.noPersil}</td>
              <td className="border border-green-600">{letterc.gol}</td>
              <td className="border border-green-600">{letterc.luas}</td>
              <td className="border border-green-600">{letterc.foto}</td>
              <td className="border border-green-600">
                <span className="px-1">✏</span>
                <span className="px-1">🗑</span>
                <span className="px-1">🖨</span>
              </td>
            </tr>
          )) 
          : 
          <tr className="text-center">
              <td colspan="13" className="border border-green-600 p-5">
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
