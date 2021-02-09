import React from 'react'

const Header = () => {
    return (
        <>
            <thead>
                    <tr>
                        <th rowspan="3" className="border border-green-600">Nama Wajib Pajak</th>
                        <th rowspan="3" className="border border-green-600">Nomor</th>
                        <th colspan="6" className="border border-green-600">Bumi</th>
                        <th colspan="3" rowspan="2" className="border border-green-600">Bangunan</th>
                        <th rowspan="3" className="border border-green-600">Foto</th>
                        <th rowspan="3" className="border border-green-600">Action</th>
                    </tr>
                    <tr>
                        <th colspan="3" className="border border-green-600">Sawah</th>
                        <th colspan="3" className="border border-green-600">Darat</th>
                    </tr>
                    <tr>
                        <th className="border border-green-600">No</th>
                        <th className="border border-green-600">Desa</th>
                        <th className="border border-green-600">Nasional</th>
                        <th className="border border-green-600">No</th>
                        <th className="border border-green-600">Desa</th>
                        <th className="border border-green-600">Nasional</th>
                        <th className="border border-green-600">Di Persil dan Bag. Persil No.</th>
                        <th className="border border-green-600">Gol/Kelas</th>
                        <th className="border border-green-600">Luas (m2)</th>
                    </tr>
            </thead>
        </>
    )
}

export default Header