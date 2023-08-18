/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconPopoutLightFalse = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`icon-popout-light-false ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13 12L21 4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M14.999 4H20.999V10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M19 14.9062V19C19 20.1046 18.1046 21 17 21H6C4.89543 21 4 20.1046 4 19V8C4 6.89543 4.89543 6 6 6H10.0938"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconPopoutLightFalse.propTypes = {
  color: PropTypes.string,
};
