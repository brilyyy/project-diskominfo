import React from 'react'

const PaginationNext = ({onClick, disable}) => {
    return(
        <div 
        className={ !disable ? "h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer hover:bg-pink-300" : "h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 hover:bg-pink-300 cursor-not-allowed" }
        onClick={!disable ? onClick : () =>{}}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right w-4 h-4">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    )
}

export default PaginationNext