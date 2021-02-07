import React from 'react'
import { Route } from 'react-router-dom'
import Letterc from './letterc/Letterc'
import DataDesa from './data-desa/DataDesa'

const DashboardRoute = () => {
    return (
        <>
        <Route path='/' exact component={DataDesa} />
        <Route path='/letterc' component={Letterc} />
        <Route path='/konfigurasi' component={null} />
        <Route path='/cetak-surat' component={null} />
        </>
    )
}

export default DashboardRoute