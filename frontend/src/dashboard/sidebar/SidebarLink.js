import React from 'react'
import { Link } from 'react-router-dom'

const SidebarLink = props => {
    return (
        <Link to={props.linkto}>
            <p className={props.open ? 'text-gray-800 font-bold hover:bg-blue-200 cursor-pointer p-3' : 'text-gray-800 font-bold hover:bg-blue-200 cursor-pointer p-3 text-center text-lg'}>
            {props.open ? 
            <>
            <span className='pr-3'>{props.icon}</span>
            <span className=''>{props.title}</span>
            </>
            :
            <span className=''>{props.icon}</span>
            }
            </p>
        </Link>
    )
}

export default SidebarLink