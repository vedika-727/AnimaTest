/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconArrowDownLightFalse = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`icon-arrow-down-light-false ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.41659 5.99994L7.99992 10.5833L12.5833 5.99994"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconArrowDownLightFalse.propTypes = {
  color: PropTypes.string,
};
