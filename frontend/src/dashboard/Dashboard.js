import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { BsGearFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import {
  FaEnvelope,
  FaPrint,
  FaUserAstronaut,
  FaRegNewspaper,
  FaBook,
} from "react-icons/fa";
import { BiChevronRightCircle, BiChevronDownCircle } from "react-icons/bi";
import axios from "axios";
import API from "../config/API";
import TitleBar from "./TitleBar";
import SidebarLink from "./sidebar/SidebarLink";
import DataDesa from "./data-desa/DataDesa";
import EditDataDesa from "./data-desa/crud/EditDesa";
import TambahDataDesa from "./data-desa/crud/TambahDesa";
import Letterc from "./letterc/Letterc";
import TambahDataLc from "./letterc/crud/TambahData";
import EditDataLc from "./letterc/crud/EditData";
import CetakSuratTanah from "./cetak-surat/CetakSuratTanah";
import Konfigurasi from "./konfigurasi/Konfigurasi";
import ConfigUser from "./konfigurasi/crud/EditData";
import AddUser from "./konfigurasi/crud/TambahData";
import Home from "./home/Home";
import Krawangan from "./krawangan/Krawangan";
import TambahDataKrawangan from "./krawangan/crud/TambahData";
import KrawanganDetail from "./krawangan-detail/KrawanganDetail";
import TambahDataKrawanganDetail from "./krawangan-detail/crud/TambahData";
import Profile from "./user-config/UserConfig";
import TreeView from "./letterc/TreeView";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [menu, setMenu] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    axios
      .get(API.url + "details", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setMenu(response.data.data.roles[0].name);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <Router>
      <div
        className="flex bg-pattern-light
       font-poppins"
      >
        <div className="fixed">
          <aside
            className={
              "transition-all duration-300 border-r border-gray-light bg-gray-800 h-screen shadow-md flex flex-col justify-between " +
              (open ? "w-48" : "w-14")
            }
          >
            <div>
              <div className="flex p-4 justify-around">
                {open ? (
                  <p className="font-semibold text-xl antialiased text-white">
                    Adiarta
                  </p>
                ) : (
                  <></>
                )}
                <button
                  onClick={open ? handleClose : handleOpen}
                  type="button"
                  className="focus:outline-none text-white rounded-md text-2xl"
                >
                  {!open ? <TiThMenu /> : <MdClose />}
                </button>
              </div>
              <div className="flex flex-col">
                <SidebarLink
                  title="Krawangan"
                  icon={<FaBook />}
                  linkto="/krawangan"
                  open={open}
                  tooltip="Krawangan"
                />
                <SidebarLink
                  title="Letter C"
                  icon={<FaEnvelope />}
                  linkto="/letterc"
                  open={open}
                  tooltip="Letter C"
                />
                <div className="select-none">
                  <div
                    onClick={handleDropdown}
                    className={
                      "text-white hover:bg-blue-200 cursor-pointer p-3 flex " +
                      (open ? "" : "justify-center")
                    }
                  >
                    <span className={open ? "mr-3" : ""}>
                      <FaPrint />
                    </span>
                    <span className={open ? "" : "hidden"}>Cetak Surat</span>
                    <span className={open ? "ml-3" : "hidden"}>
                      {dropdown ? (
                        <BiChevronDownCircle className="mt-1" />
                      ) : (
                        <BiChevronRightCircle className="mt-1" />
                      )}
                    </span>
                  </div>
                  <div>
                    <div className={!dropdown ? "hidden" : ""}>
                      <SidebarLink
                        title="Surat Tanah"
                        icon={<FaRegNewspaper />}
                        linkto="/cetak-surat-tanah"
                        open={open}
                        dropdown={dropdown}
                        tooltip="Cetak Surat Tanah"
                      />
                    </div>
                  </div>
                </div>
                {menu === "super-admin" ? (
                  <SidebarLink
                    title="Data Desa"
                    icon={<FaUserAstronaut />}
                    linkto="/data-desa"
                    open={open}
                    tooltip="Data Desa"
                  />
                ) : (
                  <></>
                )}
                {menu === "super-admin" ? (
                  <SidebarLink
                    title="Konfigurasi"
                    icon={<BsGearFill />}
                    linkto="/konfigurasi"
                    open={open}
                    tooltip="Konfigurasi"
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </aside>
        </div>

        <main
          className={
            "w-full transition-all duration-300 " + (!open ? "ml-14" : "ml-48")
          }
        >
          <TitleBar title="Adiarta Dashboard" />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/tree-view/:id" component={TreeView} />
              <Route
                exact
                path="/krawangan/tambah"
                component={TambahDataKrawangan}
              />
              <Route exact path="/krawangan" component={Krawangan} />
              <Route
                exact
                path="/krawangan/details/:id"
                component={KrawanganDetail}
              />
              <Route
                exact
                path="/krawangan/details/tambah/:id"
                component={TambahDataKrawanganDetail}
              />
              <Route exact path="/letterc" component={Letterc} />
              <Route exact path="/letterc/tambah" component={TambahDataLc} />
              <Route exact path="/letterc/ubah/:id" component={EditDataLc} />
              <Route
                exact
                path="/cetak-surat-tanah"
                component={CetakSuratTanah}
              />
              <Route exact path="/profile" component={Profile} />
              {menu === "super-admin" ? (
                <>
                  <Route exact path="/data-desa" component={DataDesa} />
                  <Route
                    exact
                    path="/data-desa/tambah"
                    component={TambahDataDesa}
                  />
                  <Route
                    exact
                    path="/data-desa/ubah/:id"
                    component={EditDataDesa}
                  />

                  <Route exact path="/konfigurasi" component={Konfigurasi} />
                  <Route exact path="/konfigurasi/tambah" component={AddUser} />
                  <Route
                    exact
                    path="/konfigurasi/ubah/:id"
                    component={ConfigUser}
                  />
                </>
              ) : null}
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default Dashboard;
