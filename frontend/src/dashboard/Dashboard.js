import React, {useState} from 'react'
import TitleBar from './TitleBar'
import DataDesa from './data-desa/DataDesa'
import Letterc from './letterc/Letterc'
import CetakSurat from './cetak-surat/CetakSurat'
import TambahDataLc from './letterc/crud/TambahData'
import SidebarLink from './sidebar/SidebarLink'
import SidebarIcon from './sidebar/SidebarIcon'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <Router>
            <div className='flex h-screen'>
                <div className='fixed'>
                {
                open
                    ?
                    <aside className='w-64 border-r border-gray-light bg-gray-50 h-screen  '>
                        <div className='flex p-4 border-b border-gray-light justify-around'>
                            <p className='text-xl antialiased'>Adiarta</p>
                            <p className='text-xl antialiased cursor-pointer' onClick={handleClose}>❌</p>
                        </div>

                        <SidebarLink title='Data Desa' icon='🏠' linkto='/data-desa'/>
                        <SidebarLink title='Letter C' icon='👍' linkto='/letterc' />
                        <SidebarLink title='Cetak Surat' icon='📧' linkto='/cetak-surat' />
                        <SidebarLink title='Konfigurasi' icon='⚙' linkto='/konfigurasi' />

                    </aside>
                    :
                    <aside className='w-14 border-r border-gray-light bg-gray-50 h-screen'>
                        <div className='flex p-4 border-b border-gray-light justify-around'>
                            <p className='text-xl antialiased cursor-pointer' onClick={handleOpen}>🔄</p>
                        </div>
                        <SidebarIcon icon='🏠' linkto='/data-desa' />
                        <SidebarIcon icon='👍' linkto='/letterc' />
                        <SidebarIcon icon='📧' linkto='/cetak-surat' />
                        <SidebarIcon icon='⚙' linkto='/konfigurasi' />
                    </aside>
                }
                </div>

                <main className={ !open ? 'w-full ml-14' : 'w-full ml-64' }>
                    <TitleBar title='Adiarta Dashboard' />
                    <div className='p-4'>
                        <Switch>
                            <Route exact path='/data-desa'  component={DataDesa} />
                            <Route exact path='/letterc' component={Letterc} />
                            <Route exact path='/letterc/tambah' component={TambahDataLc} />
                            <Route exact path='/cetak-surat' component={CetakSurat} />
                            <Route exact path='/konfigurasi' component={null} />
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    )
}

export default Dashboard