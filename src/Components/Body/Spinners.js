import React from "react";

const Loading = () => {
  return (
    <div className="container p-5 d-flex justify-content-center middle">
      <div
        className="spinner-border text-info text-center"
        style={{ width: "10rem", height: "10rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
