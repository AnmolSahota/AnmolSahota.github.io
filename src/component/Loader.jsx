import React from "react";
import { ColorRing } from "react-loader-spinner";

function Loader() {
  return (
    <ColorRing
      visible={true}
      height="40"
      width="40"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#a9d5c1", "#8ac6d1", "#b2d4ff", "#c1c8e4", "#d8e2dc"]}
    />
  );
}

export default Loader;
