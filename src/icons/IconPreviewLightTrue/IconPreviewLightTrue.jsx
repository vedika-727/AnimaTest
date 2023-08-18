/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconPreviewLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-preview-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.20638 13.5556C10.713 13.5556 13.5556 10.713 13.5556 7.20638C13.5556 3.69981 10.713 0.857178 7.20638 0.857178C3.69981 0.857178 0.857178 3.69981 0.857178 7.20638C0.857178 10.713 3.69981 13.5556 7.20638 13.5556Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M15.1428 15.1428L11.6904 11.6904"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M5.25 7.25C5.25 7.25 5.97727 6.25 7.25 6.25C8.52273 6.25 9.25 7.25 9.25 7.25C9.25 7.25 8.52273 8.25 7.25 8.25C5.97727 8.25 5.25 7.25 5.25 7.25Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconPreviewLightTrue.propTypes = {
  color: PropTypes.string,
};
