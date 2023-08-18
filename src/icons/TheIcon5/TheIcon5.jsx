/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TheIcon5 = ({ color = "white", className }) => {
  return (
    <svg
      className={`the-icon-5 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.4895 3.31909L12.681 7.99994L4.4895 12.6808V3.31909Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.87766"
      />
    </svg>
  );
};

TheIcon5.propTypes = {
  color: PropTypes.string,
};
