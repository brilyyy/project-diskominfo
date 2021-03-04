import React from 'react'

const PaginationItem = ({active=false, val, onPageChange}) => {
    return (
        <div className={active ? "w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in rounded-md  bg-gray-200" : "w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in rounded-md bg-gray-100 hover:bg-gray-300"} onClick={onPageChange}>
        {val}
        </div>
        
    )
}

export default PaginationItem