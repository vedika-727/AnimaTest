/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconHookLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-hook-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        className="ellipse-3"
        cx="1.05263"
        cy="1.05263"
        rx="1.05263"
        ry="1.05263"
        stroke={color}
        strokeWidth="1.5"
        transform="matrix(-0.00396246 -0.999992 -0.999992 0.00396246 14.2096 9.60889)"
      />
      <path
        className="path"
        d="M5.47535 4.38025C3.44063 4.38831 1.7977 6.04431 1.80576 8.07903C1.81383 10.1137 3.46983 11.7567 5.50454 11.7486C8.95481 11.7349 8.53781 9.80675 12.0424 8.74022M5.47535 4.38025L7.34621 4.25587L5.48114 5.84222L5.47535 4.38025Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconHookLightTrue.propTypes = {
  color: PropTypes.string,
};
