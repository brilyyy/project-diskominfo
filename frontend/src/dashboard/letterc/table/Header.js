import React from 'react'

const Header = () => {
    return (
        <>
            <thead>
                    <tr>
                        <th rowSpan="3" className="border border-green-600">Nama Wajib Pajak</th>
                        <th rowSpan="3" className="border border-green-600">Nomor</th>
                        <th rowSpan="3" className="border border-green-600">Tempat Tinggal</th>
                        <th colSpan="6" className="border border-green-600">Bumi</th>
                        <th colSpan="2" rowSpan="2" className="border border-green-600">Bangunan</th>
                        <th rowSpan="3" className="border border-green-600">Action</th>
                    </tr>
                    <tr>
                        <th colSpan="3" className="border border-green-600">Sawah</th>
                        <th colSpan="3" className="border border-green-600">Darat</th>
                    </tr>
                    <tr>
                        <th className="border border-green-600">Nomor Persil</th>
                        <th className="border border-green-600">Desa</th>
                        <th className="border border-green-600">Nasional</th>
                        <th className="border border-green-600">Nomor Persil</th>
                        <th className="border border-green-600">Desa</th>
                        <th className="border border-green-600">Nasional</th>
                        <th className="border border-green-600">Di Persil dan Bagian Persil Nomor</th>
                        <th className="border border-green-600">Gol/Kelas</th>
                    </tr>
            </thead>
        </>
    )
}

export default Header