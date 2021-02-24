import React from 'react'

const PaginationItem = ({active=false, val, onPageChange}) => {
    return (
        <div className={active ? "w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  bg-pink-400" : "w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:bg-pink-300"} onClick={onPageChange}>
        {val}
        </div>
        
    )
}

export default PaginationItem