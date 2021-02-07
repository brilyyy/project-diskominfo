import React from 'react'
import Sidebar from './Sidebar'
import TitleBar from './TitleBar'
import DashboardRoute from './DashboardRoute'
import { BrowserRouter as Router } from 'react-router-dom'

const Dashboard = () => {
    return (
        <Router>
            <div className='flex h-screen'>
                <Sidebar />
                <main className='w-full'>
                    <TitleBar title='Adiarta Dashboard' />
                    <div className='p-4'>
                        <DashboardRoute />
                    </div>
                </main>
            </div>
        </Router>
    )
}

export default Dashboard;