import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Close from "../component/CloseButton";
import Table from "./table/Table";
import API from "../../config/API";
import axios from "axios";
import { Document, pdfjs, Page } from "react-pdf";

const KrawanganDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  // eslint-disable-next-line no-unused-vars
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  useEffect(() => {
    axios
      .get(API.url + "krawangans/" + id, {
        headers: {
          Authorization:
            "Bearer " + window.sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setData(response.data.data[0]);
        console.log(response.data.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [id]);

  return (
    <div className="min-h-screen p-4">
      <div className="bg-white px-5 py-4 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h1 className="mb-6 text-3xl font-bold">
            No Persil {data.no_persil}
          </h1>
          <Close />
        </div>
        <hr />
        <div className="mt-6">
          <div className="w-full flex flex-row justify-center mb-6">
            {
              !loading && (
                // (data.foto.split("/")[5].split(".")[1] === "pdf" ? (
                <div>
                  <Document
                    file={data.foto}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <Page pageNumber={pageNumber} />
                  </Document>
                  <div>
                    <p>
                      Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                      {numPages || "--"}
                    </p>
                    <button
                      type="button"
                      disabled={pageNumber <= 1}
                      onClick={previousPage}
                      className="m-2 p-1 text-white bg-blue-600 rounded-md focus:outline-none"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => window.open(data.foto)}
                      className="m-2 p-1 text-white bg-blue-600 rounded-md focus:outline-none"
                    >
                      Download
                    </button>
                    <button
                      type="button"
                      disabled={pageNumber >= numPages}
                      onClick={nextPage}
                      className="m-2 p-1 text-white bg-blue-600 rounded-md focus:outline-none"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )
              // ) : (
              //   <img src={data.foto} alt="foto" className="w-2/3" />
              // ))
            }
          </div>
          <Table id={id} />
        </div>
      </div>
    </div>
  );
};

export default KrawanganDetail;
