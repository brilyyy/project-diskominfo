import React, { useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditData = () => {
    let { id } = useParams()

    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/detail/'+ id,{
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
        .then(response => {
            setData(response.data.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])

    console.log(data)
    return (
        <>
        
        </>
    )
}

export default EditData