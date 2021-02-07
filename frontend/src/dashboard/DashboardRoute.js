import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Letterc from './letterc/Letterc'
import DataDesa from './data-desa/DataDesa'

const DashboardRoute = () => {
    return (
        <Switch>
        <Route path='/' exact component={DataDesa} />
        <Route path='/letterc' component={Letterc} />
        <Route path='/konfigurasi' component={null} />
        <Route path='/cetak-surat' component={null} />
        </Switch>
    )
}

export default DashboardRoute