import React from "react";
import { ReactComponent as TextLogo } from "../../img/logo.svg";
import { ReactComponent as LogoBatu } from "../../img/logobatu.svg";

const Logo = (props) => {
  return (
    <div className={"flex flex-col justify-center " + props.width}>
      <div className={"flex flex-row justify-center mb-4"}>
        <LogoBatu className="w-1/5 mr-5" />
        <TextLogo className="w-3/4" />
      </div>
      <span className="text-center font-medium text-vk-text-light">
        Dinas Perpustakaan dan Kearsipan Kota Batu
      </span>
    </div>
  );
};

export default Logo;
