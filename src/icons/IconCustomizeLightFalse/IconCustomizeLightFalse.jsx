/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconCustomizeLightFalse = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`icon-customize-light-false ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_463_4780)">
        <path
          className="path"
          d="M2.66797 14.0002V9.3335M2.66797 6.66667V2M8 14V8M8 5.33333V2M13.332 13.9998V10.6665M13.332 8V2M0.667969 9.3335H4.66797M6 5.33333H10M11.332 10.6665H15.332"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_463_4780">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconCustomizeLightFalse.propTypes = {
  color: PropTypes.string,
};
