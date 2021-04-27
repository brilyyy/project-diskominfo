import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import axios from "axios";
import surattanah from "../document/kepemilikantanah.docx";
import letterc from "../document/letterc.docx";
import API from "../../../config/API";

/**
 * dokumentasi
 * @param {any} id ID dari tabel Letter C yang akan digunakan untuk mengambil data dari server
 * @returns data yang berupa JSON
 */
const getData = (id) => {
  // pengambilan data letter c menggunakan axios
  return axios
    .get(API.url + "letter-detail/" + id, {
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("accessToken"),
      },
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      return err.response;
    });
};

/**
 * dokumentasi
 * @param {string} cek string yang akan dilakukan pengecekan apakah null atau tidak
 * @returns jika string yang dicek null, maka akan diganti dengan spasi
 */
const checkUndefined = (cek) => {
  return cek ? cek : "  ";
};

/**
 * dokumentasi fungsi generateSuratTanah
 * untuk mencetak Surat Tanah dari data yang didapat
 * @param {any} id merupakan id yang didapat dari tabel letter c
 */
const generateSuratTanah = async (id) => {
  const data = await getData(id);

  PizZipUtils.getBinaryContent(surattanah, (error, content) => {
    let e = null;
    let out = null;
    let zip = null;
    let doc = null;
    let d = new Date();
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    let date = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    if (error) {
      throw error;
    }

    console.log(data);

    zip = new PizZip(content);
    doc = new Docxtemplater().loadZip(zip);

    // mapping data dari server dengan merubah key sesuai template docx

    data.map((detail, key) => {
      let nip;
      if (checkUndefined(detail.village.nip_desa) !== "  ") {
        nip = `NIP. ${detail.village.nip_desa}`;
      }
      const detailData = {
        nama_desa: checkUndefined(detail.village.nama_desa),
        desa_head: checkUndefined(detail.village.nama_desa.toUpperCase()),
        alamat: checkUndefined(detail.village.alamat),
        no_surat: checkUndefined(detail.village.no_surat),
        tahun: d.getFullYear(),
        kepala_desa: checkUndefined(detail.village.kepala_desa),
        kecamatan: checkUndefined(detail.village.kecamatan),
        kecamatan_head: checkUndefined(detail.village.kecamatan.toUpperCase()),
        no_persil_sawah: checkUndefined(detail.no_persil_sawah),
        kelas_sawah: checkUndefined(detail.kelas_sawah),
        luas_sawah: checkUndefined(detail.luas_sawah),
        nama: checkUndefined(detail.name),
        tanggal: date,
        nip: checkUndefined(nip),
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
      `${new Date().toJSON().slice(0, 10).replace(/-/g, "_")}_${
        data[0].name
      }_Surat_Tanah.docx`
    );
  });
};

/**
 * dokumentasi fungsi generateLetterc
 * untuk mencetak tabel Letter C dari data yang didapat
 * @param {any} id ID yang didapat dari tabel Letter C
 */
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

    // mapping data dari server dengan merubah key sesuai template docx
    console.log(data[0].nama);
    data.map((detail, key) => {
      const detailData = {
        nama: checkUndefined(detail.name),
        nomor: checkUndefined(detail.nomor),
        tempat_tinggal: checkUndefined(detail.tempat_tinggal),
        a: checkUndefined(detail.no_persil_sawah),
        b: checkUndefined(detail.desa_sawah),
        c: checkUndefined(detail.nasional_sawah),
        d: checkUndefined(detail.luas_sawah),
        e: checkUndefined(detail.pajak_sawah),
        f: checkUndefined(detail.mutasi_bumi),
        g: checkUndefined(detail.no_persil_darat),
        h: checkUndefined(detail.desa_darat),
        i: checkUndefined(detail.nasional_darat),
        j: checkUndefined(detail.luas_darat),
        k: checkUndefined(detail.pajak_darat),
        l: checkUndefined(detail.no_persil_bangunan),
        m: checkUndefined(detail.gol_bangunan),
        n: checkUndefined(detail.luas_bangunan),
        o: checkUndefined(detail.pajak_bangunan),
        p: checkUndefined(detail.mutasi_bangunan),
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
      `${new Date().toJSON().slice(0, 10).replace(/-/g, "_")}_${
        data[0].name
      }_Letter_C.docx`
    );
  });
};

export { generateSuratTanah, generateLetterc };
