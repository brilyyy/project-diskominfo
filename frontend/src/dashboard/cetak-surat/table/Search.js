import React, { useState } from 'react'

const Search = ({onSearch}) => {
    const [search, setSearch] = useState('')

    const onInputChange = (value) => {
        setSearch(value)
        onSearch(value)
    }

    return (
        <>
            <input 
                type="text" 
                placeholder='Cari...' 
                className='p-2 border-2 w-1/3 rounded-lg border-gray-400 focus:bg-green-200 focus:outline-none '
                value={search}
                onChange={(e) => onInputChange( e.target.value )}
            />
        </>
    )
}

export default Search