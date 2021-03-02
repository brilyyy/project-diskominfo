import Docxtemplater from "docxtemplater"
import PizZip from "pizzip"
import PizZipUtils from "pizzip/utils/index.js"
import { saveAs } from "file-saver"
import axios from 'axios'
import surattanah from '../document/kepemilikantanah.docx'



function getData(id) {
  return axios.get('http://localhost:8000/api/letter-detail/' + id,{
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
        .then(response => {
            return response.data.data
        })
        .catch(err => {
            return err.response
        })
}

const generateSuratTanah = async (id) => {
    const data = await getData(id)

    PizZipUtils.getBinaryContent(surattanah, (error, content) => {
        let e = null
        let out = null
        let zip = null
        let doc = null
        let d = new Date()

        if (error) {
          throw error
        }

        console.log(data)

        zip = new PizZip(content)
        doc = new Docxtemplater().loadZip(zip)
        data.map((detail, key) => {
          const detailData = {
            nama: detail.nama_desa.toUpperCase(),
            alamat: detail.alamat,
            no_surat: detail.no_surat,
            tahun: d.getFullYear(),
            kepala_desa: detail.kepala_desa,
            kecamatan: detail.kecamatan,
            kecamatan_head: detail.kecamatan.toUpperCase(),
            no_persil_sawah: detail.no_persil_sawah,
            kelas_sawah: detail.kelas_sawah,
            luas_sawah: detail.luas_sawah,
            name: detail.name
          }
          return (doc.setData(detailData))
        })
        try {
          doc.render()
        } catch (error) {
          e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties
          }
          console.log(JSON.stringify({ error: e }))
          throw error
        }
        out = doc.getZip().generate({
          type: 'blob',
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        })
        saveAs(out, 'SuratTanah.docx')
      })
}

export {
  generateSuratTanah
}