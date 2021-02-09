import React from 'react'
import { Link } from 'react-router-dom'

const SidebarIcon = props => {
    return (
        <Link to={props.linkto}>
            <p className='text-gray-800 font-bold hover:bg-blue-200 cursor-pointer p-3 text-center text-lg'>
                <span className=''>{props.icon}</span>
            </p>

        </Link>
    )
}

export default SidebarIcon