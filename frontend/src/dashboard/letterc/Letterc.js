import React from 'react'

const TableData = (props) => {
    return (
        <tr className='text-center'>
            <td className="border border-green-600">{ props.nama }</td>
            <td className="border border-green-600">{ props.nomor }</td>
            <td className="border border-green-600">{ props.noSawah }</td>
            <td className="border border-green-600">{ props.desaSawah }</td>
            <td className="border border-green-600">{ props.nasionalSawah }</td>
            <td className="border border-green-600">{ props.noDarat }</td>
            <td className="border border-green-600">{ props.desaDarat }</td>
            <td className="border border-green-600">{ props.nasionalDarat }</td>
            <td className="border border-green-600">{ props.noPersil }</td>
            <td className="border border-green-600">{ props.gol }</td>
            <td className="border border-green-600">{ props.luas }</td>
            <td className="border border-green-600">{ props.foto }</td>
            <td className="border border-green-600">
                <span className='px-1'>✏</span>
                <span className='px-1'>🗑</span>
                <span className='px-1'>🖨</span>
            </td>
        </tr>
    )
}
const Letterc = () => {
    return (
        <div>
            <table className='border-collapse border border-green-800 w-full'>
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
                <tbody>
                    <TableData 
                    nama='Waluyo'
                    nomor='33951'
                    noSawah='1'
                    desaSawah='Sumberejo'
                    nasionalSawah='ID'
                    noDarat='1'
                    desaDarat='Ploso Gede'
                    nasionalDarat='ID'
                    noPersil='IV'
                    gol='5'
                    luas='99999'
                    foto='1'
                    />
                    <TableData 
                    nama='Waluyo'
                    nomor='33951'
                    noSawah='1'
                    desaSawah='Sumberejo'
                    nasionalSawah='ID'
                    noDarat='1'
                    desaDarat='Ploso Gede'
                    nasionalDarat='ID'
                    noPersil='IV'
                    gol='5'
                    luas='99999'
                    foto='1'
                    />
                </tbody>
            </table>
        </div>
    )
}

export default Letterc