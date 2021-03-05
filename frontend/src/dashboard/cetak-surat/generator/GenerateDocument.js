import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import axios from "axios";
import surattanah from "../document/kepemilikantanah.docx";
import letterc from "../document/letterc.docx";

function getData(id) {
  return axios
    .get("http://localhost:8000/api/letter-detail/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      return err.response;
    });
}

const generateSuratTanah = async (id) => {
  const data = await getData(id);

  PizZipUtils.getBinaryContent(surattanah, (error, content) => {
    let e = null;
    let out = null;
    let zip = null;
    let doc = null;
    let d = new Date();

    if (error) {
      throw error;
    }

    console.log(data);

    zip = new PizZip(content);
    doc = new Docxtemplater().loadZip(zip);
    data.map((detail, key) => {
      const detailData = {
        nama_desa: detail.nama_desa.toUpperCase(),
        alamat: detail.alamat,
        no_surat: detail.no_surat,
        tahun: d.getFullYear(),
        kepala_desa: detail.kepala_desa,
        kecamatan: detail.kecamatan,
        kecamatan_head: detail.kecamatan.toUpperCase(),
        no_persil_sawah: detail.no_persil_sawah,
        kelas_sawah: detail.kelas_sawah,
        luas_sawah: detail.luas_sawah,
        nama: detail.nama,
      };
      return doc.setData(detailData);
    });
    try {
      doc.render();
    } catch (error) {
      e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties,
      };
      console.log(JSON.stringify({ error: e }));
      throw error;
    }
    out = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    saveAs(out, "SuratTanah.docx");
  });
};
const generateLetterc = async (id) => {
  const data = await getData(id);

  PizZipUtils.getBinaryContent(letterc, (error, content) => {
    let e = null;
    let out = null;
    let zip = null;
    let doc = null;

    if (error) {
      throw error;
    }

    console.log(data);

    zip = new PizZip(content);
    doc = new Docxtemplater().loadZip(zip);
    data.map((detail, key) => {
      const detailData = {
        desa_darat: detail.desa_darat,
        desa_sawah: detail.desa_sawah,
        tempat_tinggal: detail.tempat_tinggal,
        gol_bangunan: detail.gol_bangunan,
        luas_bangunan: detail.luas_bangunan,
        luas_darat: detail.luas_darat,
        luas_sawah: detail.luas_sawah,
        mutasi_bangunan: detail.mutasi_bangunan,
        mutasi_bumi: detail.mutasi_bumi,
        nama: detail.nama,
        nasional_darat: detail.nasional_darat,
        nasional_sawah: detail.nasional_sawah,
        no_persil_bangunan: detail.no_persil_bangunan,
        no_persil_darat: detail.no_persil_darat,
        no_persil_sawah: detail.no_persil_sawah,
        nomor: detail.nomor,
        pajak_bangunan: detail.pajak_bangunan,
        pajak_darat: detail.pajak_darat,
        pajak_sawah: detail.pajak_sawah,
      };
      return doc.setData(detailData);
    });
    try {
      doc.render();
    } catch (error) {
      e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties,
      };
      console.log(JSON.stringify({ error: e }));
      throw error;
    }
    out = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    saveAs(out, "LetterC.docx");
  });
};

export { generateSuratTanah, generateLetterc };
