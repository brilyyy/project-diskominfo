import React from "react";
import { ReactComponent as TextLogo } from "../../img/logo.svg";
import { ReactComponent as LogoBatu } from "../../img/logobatu.svg";

const Logo = (props) => {
  return (
    <div className={"flex flex-row mb-6 justify-center " + props.width}>
      <LogoBatu className="w-1/5 mr-5" />
      <TextLogo className="w-3/4" />
    </div>
  );
};

export default Logo;
