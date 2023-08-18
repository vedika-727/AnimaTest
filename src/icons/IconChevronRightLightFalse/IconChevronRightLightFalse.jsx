/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconChevronRightLightFalse = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`icon-chevron-right-light-false ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.91663 12.5834L13.5 8.00002L8.91663 3.41669"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M2.5 12.5834L7.08333 8.00002L2.5 3.41669"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconChevronRightLightFalse.propTypes = {
  color: PropTypes.string,
};
