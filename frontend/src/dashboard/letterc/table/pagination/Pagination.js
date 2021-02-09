import React, { useState, useEffect, useMemo } from 'react'
import PaginationNext from './PaginationNext'
import PaginationPrev from './PaginationPrev'
import PaginationItem from './PaginationItem'


const Pagination = ({total = 0, itemsPerPage = 10, currentPage = 1, onPageChange}) => {
    const [totalPages, setTotalPage] = useState(0)

    useEffect(()=>{
        if ( total > 0 && itemsPerPage > 0){
            setTotalPage(Math.ceil(total / itemsPerPage))
        }
    }, [total, itemsPerPage])

    const paginationItems = useMemo(()=>{
        const pages = []

        for(let i = 1; i <= totalPages; i++){
            pages.push(
                <PaginationItem val={i} active={i === currentPage} onPageChange={() => onPageChange(i)} />
            )
        }

        for(let i=0; i<= Math.ceil(totalPages/5)*5; i += 5){
            if(currentPage <= i){
                return pages.slice(i-5, i)
            }
        }

    }, [ totalPages, currentPage ])

    if ( totalPages === 0 ) return null

    return (
        <div className="flex text-gray-700">
            <div className="flex h-8 font-medium rounded-full bg-gray-200">
            <PaginationPrev onClick={() => onPageChange(currentPage - 1)} disable={ currentPage === 1 } />
            {
                paginationItems
            }
            <PaginationNext onClick={() => onPageChange(currentPage + 1)} disable={ currentPage === totalPages }/>
            </div>
        </div>
    )
}

export default Pagination