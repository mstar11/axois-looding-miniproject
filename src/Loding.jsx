import React, { useState } from "react";
import axios from "axios";

const Looding = (props) => {
  return (
    <>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Looding</span>
      </div>
    </>
  );
};
export default Looding;
