import React from 'react'
import axios from 'axios'

const TitleBar = (props) => {

    const handleLogout = () => {
        axios.post('http://127.0.0.1:8000/api/logout', {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
          }
        })
        localStorage.removeItem('accessToken')
        localStorage.removeItem('admin')
        window.location.reload()
    }

    return (
        <div className='w-full p-4 bg-gradient-to-b from-mac-light-gray to-mac-gray flex flex-row-reverse justify-between drop-shadow-md'>
            <div>
                <button onClick={handleLogout}>Log Out</button>
            </div>
            <div>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default TitleBar