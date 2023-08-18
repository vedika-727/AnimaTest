/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsStats4 = ({ opacity = "unset", color = "white", className }) => {
  return (
    <svg
      className={`icons-stats-4 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_401_6396)" opacity={opacity}>
        <path
          className="path"
          d="M7.9987 14.6668C11.6806 14.6668 14.6654 11.6821 14.6654 8.00016C14.6654 4.31826 11.6806 1.3335 7.9987 1.3335C4.3168 1.3335 1.33203 4.31826 1.33203 8.00016C1.33203 11.6821 4.3168 14.6668 7.9987 14.6668Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M6.66797 5.3335L10.668 8.00016L6.66797 10.6668V5.3335Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_401_6396">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconsStats4.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
};
