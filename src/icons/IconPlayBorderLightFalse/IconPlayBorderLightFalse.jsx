/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconPlayBorderLightFalse = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`icon-play-border-light-false ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7 5.72318C7 4.95536 7.82948 4.47399 8.49614 4.85494L19.4806 11.1318C20.1524 11.5157 20.1524 12.4843 19.4806 12.8682L8.49614 19.1451C7.82948 19.526 7 19.0446 7 18.2768V5.72318Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconPlayBorderLightFalse.propTypes = {
  color: PropTypes.string,
};
