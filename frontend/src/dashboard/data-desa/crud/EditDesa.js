import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditDesa = () => {
    let { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
    axios
        .get('http://localhost:8000/api/villages/' + id, {
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
          }
        })
        .then(response => {
            setData(response.data.data)
        })
  }, [])

    return(
        <>
            <div>
                <form>
                    <input type="text" name="nama" value={data.nama} />
                    <input type="text" name="status" value={data.status} />
                    <input type="text" name="alamat" value={data.alamat} />
                    <input type="text" name="kecamatan" value={data.kecamatan} />
                    <input type="text" name="no_surat" value={data.no_surat} />
                    <input type="text" name="kepala_desa" value={data.kepala_desa} />
                    <input type="text" name="nip" value={data.nip} />
                </form>
            </div>
        </>
    )
}

export default EditDesa