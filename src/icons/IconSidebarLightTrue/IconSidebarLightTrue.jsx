/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconSidebarLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-sidebar-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.0093 2H3.15741C2.38012 2 1.75 2.59695 1.75 3.33333V12.6667C1.75 13.403 2.38012 14 3.15741 14H13.0093C13.7865 14 14.4167 13.403 14.4167 12.6667V3.33333C14.4167 2.59695 13.7865 2 13.0093 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path className="path" d="M6.41667 14V2H1.75V14H6.41667Z" fill={color} opacity="0.5" />
      <path
        className="path"
        d="M6.41663 2V14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconSidebarLightTrue.propTypes = {
  color: PropTypes.string,
};
