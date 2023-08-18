/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconDownloadLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-download-light-true ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21 15V18.3333C21 18.7754 20.7893 19.1993 20.4142 19.5118C20.0391 19.8244 19.5304 20 19 20H5C4.46957 20 3.96086 19.8244 3.58579 19.5118C3.21071 19.1993 3 18.7754 3 18.3333V15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M8 9L12 13L16 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M12 11.5V2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconDownloadLightTrue.propTypes = {
  color: PropTypes.string,
};
