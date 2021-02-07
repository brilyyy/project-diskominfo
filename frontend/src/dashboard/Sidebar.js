import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarLink = props => {
    return (
        <Link to={props.linkto}>
            <p className='text-gray-800 font-bold hover:bg-blue-200 cursor-pointer p-3'>
            <span className='pr-3'>{props.icon}</span>
            <span className=''>{props.title}</span>
            </p>
        </Link>
    )
}
const SidebarIcon = props => {
    return (
        <Link to={props.linkto}>
            <p className='text-gray-800 font-bold hover:bg-blue-200 cursor-pointer p-3 text-center text-lg'>
                <span className=''>{props.icon}</span>
            </p>

        </Link>
    )
}

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }


    return (
        <div>
            {
                open
                    ?
                    <aside className='w-64 border-r border-gray-light bg-gray-50 h-screen'>
                        <div className='flex p-4 border-b border-gray-light justify-around'>
                            <p className='text-xl antialiased'>Adiarta</p>
                            <p className='text-xl antialiased cursor-pointer' onClick={handleClose}>❌</p>
                        </div>
                        <SidebarLink title='Data Desa' icon='🏠' linkto='/'/>
                        <SidebarLink title='Letter C' icon='👍' linkto='/letterc' />
                        <SidebarLink title='Cetak Surat' icon='📧' linkto='/cetak-surat' />
                        <SidebarLink title='Konfigurasi' icon='⚙' linkto='/konfigurasi' />
                    </aside>
                    :
                    <aside className='w-14 border-r border-gray-light bg-gray-50 h-screen'>
                        <div className='flex p-4 border-b border-gray-light justify-around'>
                            <p className='text-xl antialiased cursor-pointer' onClick={handleOpen}>🔄</p>
                        </div>
                        <SidebarIcon icon='🏠' linkto='/' />
                        <SidebarIcon icon='👍' linkto='/letterc' />
                        <SidebarIcon icon='📧' linkto='/cetak-surat' />
                        <SidebarIcon icon='⚙' linkto='/konfigurasi' />
                    </aside>
            }
        </div>
    )
}

export default Sidebar;