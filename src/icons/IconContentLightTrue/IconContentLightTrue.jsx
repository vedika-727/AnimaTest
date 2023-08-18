/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconContentLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-content-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1.33325 2.46584C1.33325 1.95764 1.87909 1.63631 2.32343 1.88293L5.68836 3.75048C6.1459 4.00441 6.1459 4.66236 5.68836 4.91629L2.32343 6.78384C1.87908 7.03045 1.33325 6.70913 1.33325 6.20093V2.46584Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect
        className="rect"
        height="4.8889"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="1.5"
        width="4.88667"
        x="1.33325"
        y="9.77771"
      />
      <rect
        className="rect"
        height="4.8889"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="1.5"
        width="4.88667"
        x="9.38135"
        y="1.94446"
      />
      <rect
        className="rect"
        height="5.16667"
        rx="2.58333"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="1.5"
        width="5.16667"
        x="9.26123"
        y="9.64001"
      />
    </svg>
  );
};

IconContentLightTrue.propTypes = {
  color: PropTypes.string,
};
