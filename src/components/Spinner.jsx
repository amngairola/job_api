import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader
        color="#6366f1"
        loading={loading}
        size={150}
        // cssOverride={override}
      />
    </div>
  );
};

export default Spinner;
