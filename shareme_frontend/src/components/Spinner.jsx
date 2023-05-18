import React from "react";
import { Circles } from "react-loader-spinner";
const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-fulll">
      <Circles
        type="Circles"
        color="#00BFFF"
        height={50}
        width={200}
        classNamem-5
      />
      <p className="text-lg px-2 text-center">{message}</p>
    </div>
  );
};

export default Spinner;
