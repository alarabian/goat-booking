import React from "react";

const PageCover = ({ title, bgColor }) => {
  return (
    <>
      <div className="pageCoverSec">
        <div className="container">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
};

export default PageCover;
