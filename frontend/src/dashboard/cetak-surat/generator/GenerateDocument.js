import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import axios from "axios";
import surattanah from "../document/kepemilikantanah.docx";
import letterc from "../document/letterc.docx";
import API from "../../../config/API";

function getData(id) {
  return axios
    .get(API.url + "letter-detail/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      return err.response;
    });
}

const checkUndefined = (cek) => {
  return cek ? cek : "  ";
};

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
        nama_desa: checkUndefined(detail.village.nama_desa.toUpperCase()),
        alamat: checkUndefined(detail.village.alamat),
        no_surat: checkUndefined(detail.village.no_surat),
        tahun: d.getFullYear(),
        kepala_desa: checkUndefined(detail.village.kepala_desa),
        kecamatan: checkUndefined(detail.village.kecamatan),
        kecamatan_head: checkUndefined(detail.village.kecamatan.toUpperCase()),
        no_persil_sawah: checkUndefined(detail.no_persil_sawah),
        kelas_sawah: checkUndefined(detail.kelas_sawah),
        luas_sawah: checkUndefined(detail.luas_sawah),
        nama: checkUndefined(detail.nama),
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
    saveAs(
      out,
      `${new Date().toJSON().slice(0, 10).replace(/-/g, "_")}_Surat_Tanah.docx`
    );
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
        desa_darat: checkUndefined(detail.desa_darat),
        desa_sawah: checkUndefined(detail.desa_sawah),
        tempat_tinggal: checkUndefined(detail.tempat_tinggal),
        gol_bangunan: checkUndefined(detail.gol_bangunan),
        luas_bangunan: checkUndefined(detail.luas_bangunan),
        luas_darat: checkUndefined(detail.luas_darat),
        luas_sawah: checkUndefined(detail.luas_sawah),
        mutasi_bangunan: checkUndefined(detail.mutasi_bangunan),
        mutasi_bumi: checkUndefined(detail.mutasi_bumi),
        nama: checkUndefined(detail.nama),
        nasional_darat: checkUndefined(detail.nasional_darat),
        nasional_sawah: checkUndefined(detail.nasional_sawah),
        no_persil_bangunan: checkUndefined(detail.no_persil_bangunan),
        no_persil_darat: checkUndefined(detail.no_persil_darat),
        no_persil_sawah: checkUndefined(detail.no_persil_sawah),
        nomor: checkUndefined(detail.nomor),
        pajak_bangunan: checkUndefined(detail.pajak_bangunan),
        pajak_darat: checkUndefined(detail.pajak_darat),
        pajak_sawah: checkUndefined(detail.pajak_sawah),
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
    saveAs(
      out,
      `${new Date().toJSON().slice(0, 10).replace(/-/g, "_")}_Letter_C.docx`
    );
  });
};

export { generateSuratTanah, generateLetterc };
