import React from 'react'

const TitleBar = (props) => {
    return (
        <div className='border-b border-gray-light w-full p-4 bg-gray-300'>
            <p>{props.title}</p>
        </div>
    )
}

export default TitleBar