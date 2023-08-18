/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeIcon = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`type-icon ${className}`}
      fill="none"
      height="10"
      viewBox="0 0 10 10"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.1759 1.90979H3.85952C4.13092 1.90979 4.39097 2.01871 4.58136 2.21212L4.65741 2.28938C4.84392 2.47885 4.94846 2.73407 4.94846 2.99994V6.89698C4.94846 7.16286 4.84392 7.41807 4.65741 7.60755L4.58136 7.6848C4.39097 7.87822 4.13092 7.98713 3.85952 7.98713H3.1759"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="0.759668"
      />
      <path
        className="path"
        d="M6.72107 1.90979H6.03745C5.76605 1.90979 5.50601 2.01871 5.31561 2.21212L5.23956 2.28938C5.05305 2.47885 4.94851 2.73407 4.94851 2.99994V6.89698C4.94851 7.16286 5.05305 7.41807 5.23956 7.60755L5.31561 7.6848C5.50601 7.87822 5.76605 7.98713 6.03745 7.98713H6.72107"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="0.759668"
      />
      <path className="path" d="M4.33533 5H5.66475" stroke={color} strokeLinecap="round" strokeWidth="0.759668" />
    </svg>
  );
};

TypeIcon.propTypes = {
  color: PropTypes.string,
};
