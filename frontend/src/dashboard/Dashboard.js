import React, {useState, useEffect} from 'react'
import TitleBar from './TitleBar'
import SidebarLink from './sidebar/SidebarLink'
import DataDesa from './data-desa/DataDesa'
import EditDataDesa from './data-desa/crud/EditDesa'
import Letterc from './letterc/Letterc'
import TambahDataLc from './letterc/crud/TambahData'
import EditDataLc from './letterc/crud/EditData'
import CetakSuratTanah from './cetak-surat/CetakSuratTanah'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const [letterc, setLetterc] = useState()
    const [desa, setDesa] = useState()
    const [konfigurasi, setKonfigurasi] = useState()

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/details', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            .then((response) =>{
                const permission = response.data.data.permissions
                for (let i = 0; i < permission.length; i++) {
                    const access = permission[i].name;
                    if (access === 'access lettercs')
                    {
                        setLetterc(true)
                    }
                    if (access === 'access villages')
                    {
                        setDesa(true)
                    }
                    if(access === 'access permissions' || access === 'access users')
                    {
                        setKonfigurasi(true)
                    }
                }
            })
    })

    return (
        <Router>
            <div className='flex h-screen'>
                <div className='fixed'>
                <aside className={open ? 'w-64 border-r border-gray-light bg-gray-50 h-screen' : 'w-14 border-r border-gray-light bg-gray-50 h-screen'} >
                        <div className='flex p-4 border-b border-gray-light justify-around'>
                            {
                            open ?
                            <>
                                <p className='text-xl antialiased'>Adiarta</p>
                                <p className='text-xl antialiased cursor-pointer' onClick={handleClose}>❌</p>
                            </>
                            :
                            <p className='text-xl antialiased cursor-pointer' onClick={handleOpen}>🔄</p>
                            }
                        </div>

                        { desa ? <SidebarLink title='Data Desa' icon='🏠' linkto='/data-desa' open={open}/> : <></> }
                        { letterc ? <SidebarLink title='Letter C' icon='👍' linkto='/letterc' open={open} /> : <></> }
                        <SidebarLink title='Cetak Surat Tanah' icon='📧' linkto='/cetak-surat-tanah' open={open} />
                        { konfigurasi ? <SidebarLink title='Konfigurasi' icon='⚙' linkto='/konfigurasi' open={open} /> : <></> }

                    </aside>
                </div>

                <main className={ !open ? 'w-full ml-14' : 'w-full ml-64' }>
                    <TitleBar title='Adiarta Dashboard' />
                    <div className='p-4'>
                        <Switch>
                            <Route exact path='/data-desa'  component={DataDesa} />
                            <Route exact path='/data-desa/detail/:id' component={EditDataDesa} />
                            <Route exact path='/letterc' component={Letterc} />
                            <Route exact path='/letterc/tambah' component={TambahDataLc} />
                            <Route exact path='/letterc/ubah/:id' component={EditDataLc} />
                            <Route exact path='/cetak-surat-tanah' component={CetakSuratTanah} />
                            <Route exact path='/konfigurasi' component={null} />
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    )
}

export default Dashboard