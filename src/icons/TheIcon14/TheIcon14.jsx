/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TheIcon14 = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`the-icon-14 ${className}`}
      fill="none"
      height="23"
      viewBox="0 0 23 23"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6 4.16663L18.8333 11.5L6 18.8333V4.16663Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.375"
      />
    </svg>
  );
};

TheIcon14.propTypes = {
  color: PropTypes.string,
};
