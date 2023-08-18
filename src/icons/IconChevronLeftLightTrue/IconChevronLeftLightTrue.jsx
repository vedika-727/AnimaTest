/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconChevronLeftLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-chevron-left-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.08337 3.41671L2.50004 8.00004L7.08337 12.5834"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M13.5 3.41671L8.91667 8.00004L13.5 12.5834"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconChevronLeftLightTrue.propTypes = {
  color: PropTypes.string,
};
