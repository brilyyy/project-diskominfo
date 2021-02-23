import React from 'react'
import axios from 'axios'

const TitleBar = (props) => {

    const handleLogout = () => {
        axios.post('http://127.0.0.1:8000/api/logout', {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
          }
        })
        localStorage.setItem('accessToken', '')
        window.location.reload()
    }

    return (
        <div className='border-b border-gray-light w-full p-4 bg-gray-300'>
            <p>{props.title}</p>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default TitleBar