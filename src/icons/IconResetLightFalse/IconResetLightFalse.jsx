/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconResetLightFalse = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`icon-reset-light-false ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_463_4722)">
        <path
          className="path"
          d="M0.666626 2.66675V6.66675H4.66663"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M2.33996 10C2.77222 11.2269 3.59152 12.2801 4.6744 13.0009C5.75728 13.7217 7.04508 14.0711 8.34377 13.9963C9.64246 13.9216 10.8817 13.4268 11.8747 12.5865C12.8677 11.7462 13.5608 10.606 13.8494 9.33758C14.1381 8.06917 14.0067 6.74131 13.475 5.55407C12.9434 4.36684 12.0403 3.38454 10.9018 2.75518C9.76339 2.12583 8.45123 1.88352 7.16308 2.06475C5.87493 2.24599 4.68057 2.84095 3.75996 3.76001L0.666626 6.66667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_463_4722">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconResetLightFalse.propTypes = {
  color: PropTypes.string,
};
